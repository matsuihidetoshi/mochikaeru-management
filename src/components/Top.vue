<template>
  <div class="top">
    <h1>管理メニュー</h1>
    <p>下記より編集する情報を選択してください</p>
    <v-row>
      <v-flex v-for="(value, index) in menu" v-bind:key="index" xs12 sm6 md4 text-center class="pa-3 mh-10">
        <v-btn width="100%" :to="menuPath[index]" class="font-weight-bold button">{{ value }}</v-btn>
      </v-flex>
    </v-row>
    <v-row>
      <v-col span="12">
        <v-card class="pa-3">
          <h2>
            公開状態管理:
            <span
              :class="statusColor[currentStatus] + '--text'"
            >
              &nbsp; {{ status[currentStatus] }}
            </span>
          </h2>
          <p>下記ボタンで公開状態を変更できます</p>
          <v-row>
            <v-flex v-for="(value, index) in status" v-bind:key="index" xs12 sm6 md4 text-center class="pa-3 mh-10">
              <v-btn
                @click.stop="dialog = true;dialogStatus = index"
                width="100%"
                :class="'font-weight-bold ' + statusColor[index]"
              >
                {{ status[index] }}
              </v-btn>
            </v-flex>            
          </v-row>
        </v-card>
      </v-col>
      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="font-weight-bold">
            公開状態を<span :class="statusColor[dialogStatus] + '--text'">{{ status[dialogStatus] }}</span>に切り替えますか？
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="info"
              @click="dialog = false;currentStatus = dialogStatus"
            >
              はい
            </v-btn>
            <v-btn
              class="error"
              @click="dialog = false;"
            >
              いいえ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'Top',
  data() {
    return {
      dialog: false,
      status: ["営業中", "本日休業", "準備中", "非公開"],
      statusColor: ["success", "primary", "accent", ""],
      menu: ["店舗", "商品", "商品（写真無し）", "補足"],
      menuPath: ["/shop", "/item", "/sideitem", "/notice"],
      dialogStatus: null,
      currentStatus: 0
    }
  }
}
</script>
<style>

</style>