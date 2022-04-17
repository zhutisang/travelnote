<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        class="navbar"
        width="210"
      >
        <v-list>
          <v-list-item
            prepend-avatar="/1.jpg"
            title="zhutisang"
            subtitle="13924680329"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <!-- <v-list-item v-for="item in navbarMsg" prepend-icon="item.icon" /> -->
          <v-list-item prepend-icon="mdi-home" title="主页" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-note-plus" title="新计划" value="newEdit" @click="toEdit">

          </v-list-item>
          <v-list-item prepend-icon="mdi-star" title="收藏夹" value="collection"></v-list-item>
          <v-list-item prepend-icon="mdi-cog" title="设置" value="setting"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="home-main"></v-main>
    </v-layout>
  </v-card>
</template>
<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
function toEdit () {
  router.push({
    path: '/edit/coverCard',
    query: {
      isEdit: 'true'
    }
  })
}
</script>
<style lang="less" scoped>
.navbar{
    position: absolute !important;
    margin-top: 50px !important;
    height: 580px !important;
}
.home-main{
   height: 580px;
   margin-top: 50px;
   background-color: rgb(250, 250, 250);
}
/deep/ .v-list-item{
  padding:10px 16px 10px 20px !important;
}
</style>
