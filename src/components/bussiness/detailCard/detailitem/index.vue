<template>
<div class="item">
  <select-act class="item-icon"/>
  <time-select class="item-time" />
  <!-- <locate></locate> -->
  <!-- <b-d-map /> -->
  
  <v-textarea
   class="item-text"
   no-resize
   background-color="grey lighten-2"
   color="cyan"
   clearable
   prepend-icon="mdi-comment" />
</div>
</template>
<script lang="ts" setup>
import { mdiComment } from '@mdi/js'
import { getCurrentInstance, inject } from 'vue'
import BDMap from '@/components/global/BDmap.vue'
import SelectAct from '../detailitem/selectAct/index.vue'
import TimeSelect from '../detailitem/timePicker/index.vue'
// import { detailItemAxios } from '@/api/index'
// detailItemAxios({})

</script>
<style lang="less" scoped>
.item{
    position: absolute;
    left: 0;
    right: 0;
    width: 90%;
    height: 250px;
    margin: 0 auto;
  &-icon{
    position: absolute;
    left: 100px;
  }
  &-time{
    position: absolute;
  }
  &-locate{
    position: absolute;
    right: 30px;
    min-width: 100px;
    margin-top: -5px;
  }
  &-text{
    height: 200px;
    margin: 50px 0 10px 10px;
  }
}
</style>
