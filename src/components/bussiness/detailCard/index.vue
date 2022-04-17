computed, import { ref } from 'vue';
<template>
<v-card class="card white">
  <div class="card-day">
      <v-icon class="card-day-pre" @click="minusDay">mdi-chevron-left-circle</v-icon>
      <span class="card-day-current">{{ curDay }}</span>
      <v-icon class="card-day-next" @click="addDay">mdi-chevron-right-circle</v-icon>
  </div>
  <v-icon class="card-daypause" @click="pauseDayAll">mdi-close-circle</v-icon>
<!-- <v-container>
    <v-row v-for="(item, index) in items" :key="index">

    </v-row>
  </v-container> -->
  <detail-item />
</v-card>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import DetailItem from './detailitem/index.vue'

const day = ref(1)

const curDay = computed(() => {
  return '第' + day.value + '天'
})

function minusDay () {
  if (day.value > 1) {
    day.value--
  }
}

function addDay () {
  day.value++
}

function pauseDayAll () {
  minusDay()
}
</script>
<style lang="less" scoped>
.card{
  position: relative;
  top: -20px;
  margin: 0 auto;
  height: 440px;
  width: 40%;
  background-color: rgb(51, 51, 51);
  &-day{
      width: 30%;
      padding: 10px;
  }
  &-daypause{
    position: absolute;
    right: 10px;
    top: 10px;
  }
}
</style>
