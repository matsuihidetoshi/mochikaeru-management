<template>
  <div class="top">
    <h1>管理メニュー</h1>
    <p>下記より編集する情報を選択してください</p>
    <v-row>
      <v-flex xs12 sm6 md4 text-center class="pa-3 mh-10">
        <v-btn width="100%" to="/shop" class="font-weight-bold button">店舗</v-btn>
      </v-flex>
      <v-flex xs12 sm6 md4 text-center class="pa-3 mh-10">
        <v-btn width="100%" to="/item" class="font-weight-bold button">商品</v-btn>
      </v-flex>
      <v-flex xs12 sm6 md4 text-center class="pa-3 mh-10">
        <v-btn width="100%" to="/sideitem" class="font-weight-bold button">商品（写真無し）</v-btn>
      </v-flex>
      <v-flex xs12 sm6 md4 text-center class="pa-3 mh-10">
        <v-btn width="100%" to="/notice" class="font-weight-bold button">補足</v-btn>
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
            <v-flex xs12 sm6 md4 text-center class="pa-3 mh-10">
              <v-btn
                @click.stop="dialog = true;dialogStatus = 0"
                width="100%"
                class="font-weight-bold success"
              >
                営業中
              </v-btn>
            </v-flex>
            <v-flex xs12 sm6 md4 text-center class="pa-3 mh-10">
              <v-btn
                @click.stop="dialog = true;dialogStatus = 1"
                width="100%"
                class="font-weight-bold primary"
              >
                本日休業
              </v-btn>
            </v-flex>
            <v-flex xs12 sm6 md4 text-center class="pa-3 mh-10">
              <v-btn
                @click.stop="dialog = true;dialogStatus = 2"
                width="100%"
                class="font-weight-bold accent"
              >
                準備中
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
      status: ["営業中", "本日休業", "準備中"],
      statusColor: ["success", "primary", "accent"],
      dialogStatus: null,
      currentStatus: 0
    }
  }
}
</script>
<style>

</style>