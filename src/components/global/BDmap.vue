<template>
<div id="container" style="width: 800px;height: 800px"></div>
</template>
<script lang="ts" setup>
import BMap from 'BMap'
import { onMounted } from 'vue'

onMounted(() => {
  const map = new BMap.Map('container')
  const point = new BMap.Point(116.404, 39.915)
  map.centerAndZoom(point, 15)
  map.enableScrollWheelZoom(true)
  const local = new BMap.LocalSearch(map, { renderOptions: { map: map, autoViewport: true, selectFirstResult: false } })
  local.search('五邑锦绣豪庭')
})
</script>
<style>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>
