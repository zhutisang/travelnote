<template>
  <v-card width="400" height="460" class="verifybox" title="安全验证">
     <v-card-header>
       <span>选择您的验证方式</span>
     </v-card-header>
     <v-card-action>
         <v-radio-group v-model="verifyMethod" @change="chooseMethod($event)">
           <v-radio label="手机号码验证" value="1" />     
           <v-radio label="邮箱验证" value="2" />
         </v-radio-group>
         <div class="verifybox-input" v-if="verifyMethod == 1">
             <v-text-field
             color="success"
             label="电话号码"
             variant="outlined" v-model="phoneVerify"/>
             <div class="verifybox-input-code">
               <verify-code class="input" v-model="phoneVerifyCode" />
             </div>
         </div>
         <div class="verifybox-input" v-if="verifyMethod == 2">
             <v-text-field 
              color="success"
              label="电子邮箱"
              variant="outlined"
              v-model="emailVerify"/>
             <div class="verifybox-input-code">
              <verify-code class="input" v-model="emailVerifyCode" />
             </div>
         </div>
         <div class="verifybox-btn">
             <v-btn style="margin:0 10px" color="error" @click="pauseVerify">返回</v-btn>
             <v-btn style="margin:0 10px" color="success">完成注册</v-btn>
         </div>
     </v-card-action>
  </v-card>
</template>
<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import VerifyCode from './verifyCode/index.vue'
const verifyMethod = ref('1')
const phoneVerify = ref(null)
const phoneVerifyCode = ref('')
const emailVerify = ref('')
const emailVerifyCode = ref('')
const pauseVerifyEmit = defineEmits(['pause'])
console.log(verifyMethod.value)
const chooseMethod = (e:any) => {
    verifyMethod.value = e.target.value
}

const pauseVerify = () => {
    pauseVerifyEmit('pause', false)
}
</script>
<style lang="less" scoped>
.verifybox{
    position: absolute;
    padding: 10px;
    &-input{
        margin: 0 15px;
        &-code{
            display: inline-flex;
            width: 100%
        }
    }
    &-btn{
        text-align: center;
    }
}
</style>
