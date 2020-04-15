<template>
  <div class="shop">
    <h1>店舗情報管理</h1>
    {{ valid }}
    <v-row>
      <v-form v-model="valid">
        <v-text-field
          v-for="(content, index, i) in contents"
          v-bind:key="i"
          :v-model="content"
          :rules="nameRules"
          :label="labels[i]"
        ></v-text-field>
      </v-form>
    </v-row>
  </div>
</template>
<script>
import { API, graphqlOperation} from "aws-amplify"
import { createShop, updateShop } from "../graphql/mutations"
import { listShops } from "../graphql/queries"

export default {
  name: 'Shop',
  data() {
    return {
      owner: null,
      shop: null,
      contents: {
        name: "", shortName: "", description: "",
        zipcode: "", prefecture: "", city: "", address: "", otherAddress: "",
        tel: "", email: "", receptionHours: "", deliveryHours: "", close: "",
        payments: "", url: "", map: ""
      },
      labels: [
        '店舗名', '店舗略称', '店舗紹介',
        '郵便番号', '都道府県', '市町村', '詳細住所', '建物名・室等',
        '電話番号', 'メールアドレス', '注文受付時間', '受渡可能時間', '定休日',
        '支払い方法', 'URL', 'Google Map 埋め込みタグ'
      ],
      valid: false,
      textRules: [
        v => !!v || '必須項目です'
      ],
      emailRules: [
        v => !!v || '必須項目です',
        v => /.+@.+/.test(v) || 'メールアドレスの形式が正しくありません'
      ],
      numberRules: [
        v => !!v || '必須項目です',
        v => /^\d*$/.test(v) || '数字のみで入力してください'
      ],
      validations: [
        this.textRules, this.textRules, '',
        this.textRules, this.textRules, this.textRules, this.textRules, '',
        
      ],
    }
  },
  methods: {
    getShop: async function () {
      let shops = await API.graphql(graphqlOperation(
        listShops, {limit: 1}
      ))
      this.shop = shops[0]
    },
    createShop: async function () {
      if (!this.valid()) return
      let shop = this.contents
      try {
        await API.graphql(graphqlOperation(
          createShop, {input: shop}
        ))
      } catch (error) {
        error
      }
    },
    updateShop: async function (id) {
      if (!this.valid()) return
      let shop = this.contents
      shop.id = id
      try {
        await API.graphql(graphqlOperation(
          updateShop, {input: shop}
        ))
      } catch (error) {
        error
      }
    },
    validate: function () {
      let valid = true
      this.contents.forEach(content => {
        if (!content) {valid = false}
      })
      return valid
    }
  }
}
</script>
<style>

</style>