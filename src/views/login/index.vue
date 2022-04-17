<template>
<div cover class="background">
<v-img class="bg-white"
        width="100%"
        height="100%"
        transition
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        cover />
  <v-card class="login-card">
      <v-card-text class="login-card-title">登录</v-card-text>
      <div class="login-card-method" @click="changelogin($event)">
          <v-btn max-width="50%" 
                 variant="contained-text">密码登录</v-btn>
          <v-btn max-width="50%" 
                 variant="contained-text">手机登录</v-btn>
      </div>
      <div class="login-card-username" v-if="!isphone">
          <v-text-field
            color="success"
            label="用户名"
            variant="outlined" />
            <v-text-field
            color="success"
            label="密码"
            variant="outlined"
            hint="密码限制" />
      </div>
      <div class="login-card-phone" v-if="isphone">
          <v-text-field
            color="success"
            label="手机号"
            variant="outlined" />
            <v-text-field
            color="success"
            label="验证码"
            variant="outlined" />
      </div>
      <div class="login-card-signin">
          <v-btn color="success" >登录</v-btn>
      </div>

      <div class="register-forget">
        <span class="register-forget-text" @click="toRegister">注册</span> |
        <span>忘记密码</span>
      </div>
  </v-card>     
</div>
</template>
<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
const isphone = ref(false)

const router = useRouter()

const route = useRoute()
const changelogin = (e:any) => {
    console.log(e, isphone.value)
    const name = e.target.innerText
    if (name === '手机登录' && isphone.value === false) {
        isphone.value = !isphone.value
    } else if (name === '密码登录' && isphone.value === true) {
        isphone.value = !isphone.value
    } else {
        return 0
    }
}

const toRegister = () => {
    router.push({
        path: '/register'
    })
}

</script>
<style lang="less" scoped>
/deep/ .v-responsive__sizer{
    padding-bottom: 0 !important;
}
.background{
    height: 88%;
}
.login{
    &-card{
    position: absolute;
    right: 50px;
    top: 150px;
    height: 55%;
    min-width: 300px;
        &-method{
          display: flex;
          justify-content: space-evenly;
          margin-bottom: 20px;
        }
        &-username{
            margin: 0 25px;
        }
        &-phone{
            margin: 0 25px;
        }
        &-signin{
            margin-top: -10px;
            display: flex;
            justify-content: center;
        }
        }
}
.register-forget{
    position: absolute;
    right: 10px;
    bottom: 10px;
    font-size: 12px;
    &-text:hover{
        border-bottom: solid white;
        cursor: pointer;
    }
    }
</style>
