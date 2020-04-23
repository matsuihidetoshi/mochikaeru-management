<template>
  <div class="item">
    <h1>商品情報管理</h1>
    <h2 v-if="items.length == 0" class="error--text">商品情報が未登録です</h2>
    <v-row>
      <v-col span="12">
        <v-card
        v-for="(item, index) in items"
        v-bind:key="index"
        class="pa-3 ma-3">
          <v-card-title>
            {{ item.name }}
          </v-card-title>
          <v-card-text>
            <p>価格: ¥{{ item.price.toLocaleString() }}-</p>
            <p>紹介文: {{ item.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-5">
        <v-btn to="/">戻る</v-btn>
        <v-btn
          @click.stop="dialog = true;action = '作成'"
          class="font-weight-bold success float-right"
        >
          作成
        </v-btn>
        <v-dialog
          v-model="dialog"
          max-width="290"
        >
          <v-card>
            <v-card-title class="font-weight-bold">
              商品{{ action }}
            </v-card-title>
            <v-card-text>
              <v-form v-model="valid">
                <v-text-field
                  v-for="(content, index, i) in item"
                  v-bind:key="i"
                  v-model="item[index]"
                  :rules="validations[i]"
                  :label="labels[i]"
                  required
                  class="pa-3"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                @click="dialog = false;"
              >
                戻る
              </v-btn>
              <v-btn
                class="success"
                @click="createItem"
              >
                保存
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
    <v-progress-circular
      indeterminate
      color="success"
      :class="'absolute-center display-' + loading"
      :size="80"
      :width="10"
    ></v-progress-circular>
  </div>
</template>
<script>
import { API, graphqlOperation} from "aws-amplify"
import { createItem, updateItem } from "../graphql/mutations"
import { listShops, listItems } from "../graphql/queries"
import { Storage } from 'aws-amplify'

export default {
  name: 'Item',
  data() {
    return {
      shop: null,
      items: null,
      item: {
        name: null,
        price: null,
        description: null,
      },
      labels: [
        '商品名', '金額', '説明',
      ],
      valid: false,
      validations: [
        [v => !!v || '必須項目です'],
        [v => !!v || '必須項目です', v => /^\d*$/.test(v) || '数字のみで入力してください'],
        []
      ],
      oading: false,
      done: false,
      failed: false,
      limit: 2 ** 31 - 1,
      image: null,
      result: null,
      dialog: false,
      action: null,
      loading: false,
    }
  },
  mounted() {
    this.listItems()
    this.getShop()
  },
  methods: {
    getShop: async function () {
      this.loading = true
      let shops = await API.graphql(graphqlOperation(
        listShops, {limit: this.limit}
      ))
      this.shop = shops.data.listShops.items[0]
      this.loading = false
    },
    listItems: async function () {
      this.loading = true
      let shops = await API.graphql(graphqlOperation(
        listItems, {limit: this.limit}
      ))
      this.items = shops.data.listItems.items
      this.loading = false
    },
    createItem: async function () {
      if (!this.valid) return
      this.loading = true
      let item = this.item
      item.key = this.shop.key
      try {
        await API.graphql(graphqlOperation(
          createItem, {input: item}
        ))
        this.loading = false
        this.done = true
        this.dialog = false
        this.listItems()
      } catch (error) {
        this.loading = false
        this.failed = true
        this.dialog = false
      }
    },
    updateItem: async function (id) {
      if (!this.valid) return
      this.done = false
      this.loading = true
      let item = this.item
      item.key = this.shop.key
      item.id = id
      try {
        await API.graphql(graphqlOperation(
          updateItem, {input: item}
        ))
        this.loading = false
        this.done = true
        this.dialog = false
      } catch (error) {
        this.loading = false
        this.failed = true
        this.dialog = false
      }
    },
    upload: async function () {
      Storage.put(this.shop.key + '/items/' + this.item.id + '.jpg', this.image)
      .then (result => {
        this.result = result
      }).catch(err => this.result = err)
    },
  }
}
</script>
<style>

</style>