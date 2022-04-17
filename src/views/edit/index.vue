<template>
<process-bar />

<router-view></router-view>

<div class="edit-button-pre"
     v-show="preRouterName"
     @click="toPreStep">
  上一步
  <v-icon
    x-large
    color="white darken-2"
    class="edit-button-pre-icon"
    tag="下一步"
  >mdi-chevron-left</v-icon>
  </div>

<div class="edit-button-next" @click="toNextStep">
  下一步
  <v-icon
    x-large
    color="white darken-2"
    class="edit-button-next-icon"
    tag="下一步"
  >mdi-chevron-right</v-icon>
  </div>
</template>
<script lang="ts" setup>
import processBar from '../../components/bussiness/processBar/index.vue'
import { useRouter, useRoute } from 'vue-router'
import { computed, ref, inject, onMounted } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const $http:any = inject('$http')
// $http.get('http://localhost:3000/api/v1/users/register/find/zhutisang').then((res:unknown) => {
//   // eslint-disable-next-line no-unused-expressions
//   console.log(res.data)
// }).catch((err: unknown) => {
//   console.log(err)
// })
$http({
  path: 'http://localhost:3000/api/v1/users/register/find/zhutisang',
  method: 'get',
  params: {

  }
}).then((res: any) => {
  console.log(res)
})
const router = useRouter()

const route = useRoute()

const isEdit = false

const preRouterName = computed(() => {
  return route.name !== 'CoverCard'
})

function toPreStep () {
  router.go(-1)
}

function toNextStep () {
  router.push({
    path: '/edit/detailCard',
    query: {
      isEdit: 'true'
    }
  })
}
</script>
<style lang="less" scoped>
.edit-button-next{
    display: inline;
    width: 50px;
    height: 50px;
    position: fixed;
    right: 50px;
    top: 45%;
    color: aliceblue;
    &-icon{
      font-size: 50px;
    }
}
.edit-button-pre{
    display: inline;
    width: 50px;
    height: 50px;
    position: fixed;
    left: 50px;
    top: 45%;
    color: aliceblue;
    &-icon{
      font-size: 50px;
    }
}
</style>
