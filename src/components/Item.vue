<template>
  <div class="item">
    <h1>商品情報管理</h1>
    <h2 v-if="items.length == 0" class="error--text">商品情報が未登録です</h2>
    <v-row>
      <v-col class="pa-5">
        <v-btn to="/">戻る</v-btn>
        <!--<v-btn v-if="!shop" @click="open()" class="float-right success">登録</v-btn>-->
      </v-col>
    </v-row>
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
        key: null,
        name: null,
        price: null,
        description: null,
      },
      labels: [
        '商品名', '金額', '説明',
      ],
      valid: false,
      validations: [
        [v => !!v || '必須項目です'], [v => !!v || '必須項目です'], 
        [v => !!v || '必須項目です', v => /^\d*$/.test(v) || '数字のみで入力してください'],
        []
      ],
      oading: false,
      done: false,
      failed: false,
      limit: 2 ** 31 - 1,
      image: null,
      result: null,
    }
  },
  mounted() {
    this.listItems()
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
      console.log(this.items.length)
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
        this.listItems()
      } catch (error) {
        this.loading = false
        this.failed = true
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
      } catch (error) {
        this.loading = false
        this.failed = true
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