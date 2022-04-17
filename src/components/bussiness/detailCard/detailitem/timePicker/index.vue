<template>
<vue-timepicker input-width="80px"
                v-model="setTime"
                class="picker"/>
</template>
<script lang="ts" setup>
import VueTimepicker from 'vue3-timepicker'
const setTime = '00:00'
</script>
<style lang="less" scoped>
@import 'vue3-timepicker/dist/VueTimepicker.css';
/deep/ .input.vue__time-picker-input{
    width: 80px !important;
}
.picker{
    background-color: aliceblue;
}
</style>
