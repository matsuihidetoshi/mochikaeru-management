<template>
  <v-app :style="{background: '#ffeedd'}">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <Menu />
    </v-navigation-drawer>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="font-weight-bold">Mochikaeru 管理画面</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <div id="nav" class="pa-3">
        <router-link to="/">トップページ</router-link> |
        <router-link to="/signin">ログイン/ログアウト</router-link> | 
        <router-link to="/shop">店舗</router-link> |
        <router-link to="/item">商品</router-link> |
        <router-link to="/sideitem">商品（画像無し）</router-link> |
        <router-link to="/notice">補足</router-link> |
        <router-link to="/about">このサービスについて</router-link>
      </div>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Menu from '@/views/Menu.vue'
export default {
  name: 'App',

  components: {
    Menu
  },

  data: () => ({
    drawer: null
  }),
};
</script>
