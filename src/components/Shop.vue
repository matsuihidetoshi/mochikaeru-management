<template>
  <div class="shop">
    <h1>店舗情報管理</h1>
    <v-row>
      <v-col cols="12">
        
      </v-col>
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
        name: "", shortName: "", key: "", description: "",
        zipcode: "", prefecture: "", city: "", address: "", otherAddress: "",
        tel: "", email: "", receptionHours: "", deliveryHours: "", close: "",
        payments: "", url: "", map: "", status: ""
      },
      labels: [
        '店舗名', '店舗略称', 
      ]
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