<template>
  <v-list dense>
    <!-- Top -->
    <v-list-item link to="/">
      <v-list-item-content>
        <v-list-item-title>管理メニュー</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <!-- Shop -->
    <v-list-item link to="/shop">
      <v-list-item-content>
        <v-list-item-title>店舗</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <!-- Item -->
    <v-list-item link to="/item">
      <v-list-item-content>
        <v-list-item-title>商品</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <!-- SideItem -->
    <v-list-item link to="/sideitem">
      <v-list-item-content>
        <v-list-item-title>商品（画像無し）</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <!-- Notice -->
    <v-list-item link to="/notice">
      <v-list-item-content>
        <v-list-item-title>補足</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <!-- Notice -->
    <v-list-item link to="/signin">
      <v-list-item-content>
        <v-list-item-title>サインイン/サインアウト</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <!-- Notice -->
    <v-list-item link to="/about">
      <v-list-item-content>
        <v-list-item-title>このサイトについて</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
