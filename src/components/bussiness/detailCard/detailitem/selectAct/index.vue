<template>
  <div class="text-center">
    <v-menu
      top
      left
    >
      <template v-slot:activator="{ props }">
      <v-btn v-bind="props">
        <v-icon>
          {{ actIcon }}
       </v-icon>
      </v-btn>
      </template>

      <v-list class="detail-icon-list">
        <v-list-item
          v-for="(item, index) in items"
          :key="index" @click="chooseAct(index)"
        >
            <v-icon>
              {{ item }}
            </v-icon>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { iconAct } from '../static'

const items = iconAct

const actIcon = ref('mdi-walk')

function chooseAct (num: any) {
  actIcon.value = items[num]
}
</script>
<style lang="less" scoped>
.detail-item{
  height: 50px;
}
.detail-icon-list{
  background-color: aliceblue;
}
</style>
