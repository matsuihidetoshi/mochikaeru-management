<template>
  <div class="shop">
    <h1>店舗情報管理</h1>
    <h2 v-if="!shop && !loading" class="error--text">店舗情報が未登録です</h2>
    <v-row>
      <v-col class="pa-5">

        <v-form v-model="valid">
          <v-text-field
            v-for="(content, index, i) in contents"
            v-bind:key="i"
            v-model="contents[index]"
            :rules="validations[i]"
            :label="labels[i]"
            required
            class="pa-3"
          ></v-text-field>
        </v-form>

        <div v-if="shop">
          <v-file-input
            v-for="(image, index, i) in images"
            v-bind:key="index"
            id="file"
            @change="setFile($event, index)"
            accept="image/*"
            :label="imageLabels[i]"
          ></v-file-input>
        </div>
        
        <v-btn to="/">戻る</v-btn>
        <v-progress-circular
          indeterminate
          color="success"
          :class="'absolute-center display-' + loading"
          :size="80"
          :width="10"
        ></v-progress-circular>
        <p :class="'success--text title font-weight-bold absolute-center display-' + done">{{ action }}しました</p>
        <p :class="'error--text font-weight-bold absolute-center display-' + failed">{{ action }}できませんでした</p>
        <v-btn v-if="!shop" @click="createShop()" class="float-right success">登録</v-btn>
        <v-btn v-if="shop" @click="updateShop();upload()" class="float-right success">更新</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { API, graphqlOperation} from "aws-amplify"
import { createShop, updateShop } from "../graphql/mutations"
import { listShops } from "../graphql/queries"
import { Storage } from 'aws-amplify'

export default {
  name: 'Shop',
  data() {
    return {
      owner: null,
      shop: null,
      contents: {
        name: null, shortName: null, description: null,
        zipcode: null, prefecture: null, city: null, address: null, otherAddress: null,
        tel: null, email: null, receptionHours: null, deliveryHours: null, close: null,
        payments: null, url: null, map: null
      },
      labels: [
        '店舗名', '店舗略称', '店舗紹介',
        '郵便番号', '都道府県', '市町村', '詳細住所', '建物名・室等',
        '電話番号', 'メールアドレス', '注文受付時間', '受渡可能時間', '定休日',
        '支払い方法', 'URL', 'Google Map 埋め込みタグ'
      ],
      valid: false,
      validations: [
        [v => !!v || '必須項目です'], [v => !!v || '必須項目です'], [],
        [v => !!v || '必須項目です'], [v => !!v || '必須項目です'],
        [v => !!v || '必須項目です'], [v => !!v || '必須項目です'], [],
        [v => !!v || '必須項目です', v => /^\d*$/.test(v) || '数字のみで入力してください'],
        [v => /.+@.+/.test(v) || 'メールアドレスの形式が正しくありません'],
        [v => !!v || '必須項目です'], [v => !!v || '必須項目です'], [v => !!v || '必須項目です'],
        [v => !!v || '必須項目です'], [], []
      ],
      loading: false,
      done: false,
      failed: false,
      action: '', 
      limit: 2 ** 31 - 1,
      images: {thumbnail: null, main: null, sub: null},
      results: {thumbnail: null, main: null, sub: null},
      imageLabels: ['サムネイル画像', 'メイン画像', 'サブ画像']
    }
  },
  mounted() {
    this.getShop()
  },
  methods: {
    getShop: async function () {
      this.loading = true
      let shops = await API.graphql(graphqlOperation(
        listShops, {limit: this.limit}
      ))
      this.shop = shops.data.listShops.items[0]
      if (this.shop) this.contents = Object.assign({}, this.shop)
      delete this.contents.id
      delete this.contents.key
      delete this.contents.status
      delete this.contents.owner
      this.loading = false
    },
    createShop: async function () {
      this.action = '登録'
      if (!this.valid) return
      this.loading = true
      let shop = Object.assign({}, this.contents)
      shop.key = 'shop' + new Date().getTime()
      shop.status = 0
      try {
        await API.graphql(graphqlOperation(
          createShop, {input: shop}
        ))
        this.loading = false
        this.done = true
        this.getShop()
      } catch (error) {
        this.loading = false
        this.failed = true
      }
    },
    updateShop: async function () {
      this.action = '更新'
      if (!this.valid) return
      this.done = false
      this.loading = true
      let shop = Object.assign({}, this.contents)
      shop.id = this.shop.id
      shop.key = this.shop.key
      shop.status = this.shop.status
      try {
        await API.graphql(graphqlOperation(
          updateShop, {input: shop}
        ))
        this.loading = false
        this.done = true
      } catch (error) {
        this.loading = false
        this.failed = true
      }
    },
    validate: function () {
      let valid = true
      this.contents.forEach(content => {
        if (!content) {valid = false}
      })
      return valid
    },
    setFile: function (e, filename) {
      this.images[filename] = e
    },
    upload: async function () {
      Object.keys(this.images).map(key => {
        if (this.images[key]) {
          Storage.put(this.shop.key + '/' + key + '.jpg', this.images[key])
          .then (result => {
            this.results[key] = result
          }).catch(err => this.results[key] = err)
        }
      })
    },
  }
}
</script>
<style>
.absolute-center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
.display-true {
  display: block;
}
.display-false {
  display: none;
}
</style>