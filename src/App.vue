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
      <v-container>
        <router-view></router-view>
      </v-container>
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
