import { useRoute } from 'vue-router';
, computed<template>
  <v-timeline side="before"
              direction="horizontal"
              truncate-line="both"
              class="processbar">
    <v-timeline-item
      align-dot="start"
      color="pink"
      size="small"
      height="30px"
      dot-color="orange"
    >
      <strong class="processbar-text">编辑封面</strong>
    </v-timeline-item>

    <v-timeline-item
      align-dot="start"
      color="teal-lighten-3"
      size="small"
      height="30px"
      :dot-color="detailDotColor"
    >
      <template v-slot:opposite>
        <strong class="processbar-text">编辑项目</strong>
      </template>
    </v-timeline-item>

    <v-timeline-item
      align-dot="start"
      color="pink"
      size="small"
      height="30px"
    >
      <strong class="processbar-text">管理计划</strong>
    </v-timeline-item>
  </v-timeline>
</template>
<script lang="ts" setup>
import { reactive, defineProps, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const detailDotColor = computed(() => {
  return route.name === 'detailCard' ? 'orange' : ''
})

</script>
<style lang="less" scoped>
.processbar {
  width: 70%;
  position: relative;
  left: 25%;
  top: -10px;
  &-text {
    margin-left: -25px;
  }
  // &-liner{

  // }
}
</style>
