<template>
    <div class="register">
      用户头像
      <div class="register-picture">
        <v-avatar size="200px">
          <v-img crossorigin="anonymous" class="register-picture-jpg" :aspect-ratio="1"
        :src="hasadd ? userImgUrl : '/register_placehold.jpg'" cover>
        <input class="jpg-input" type="file" @change="getUserImg($event)"/>
        </v-img>
        </v-avatar>
      </div>
        <v-divider style="margin:50px auto" inset></v-divider>
        <div class="register-input">用户名
            <v-text-field v-model="username"/>
        </div>
        <div class="register-input">密码
            <v-text-field 
             v-model="pwd"
             :append-inner-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
             :type="showPwd ? 'text' : 'password'" 
             @click:append-inner="changeShow()"/>
        </div>
        <span>标签</span>
        <v-card class="register-title">
          <v-item-group multiple class="register-title-content" 
                        @update:modelValue="selectedTitle($event)">
           <v-item v-slot="{ isSelected, toggle }" 
           v-for="(item, index) in allTitleArray"
           :key="index">
            <v-card
              :color="isSelected ? 'primary' : ''"
              class="title-chips"
              dark
              width="70"
              height="40"
              @click="toggle"
            >
              {{ item }}
            </v-card>
          </v-item>
          </v-item-group>
        </v-card>
        <span>
            介绍
            <v-textarea color="white" v-model="introduction"/>
        </span>
        <div class="register-next">
          <v-btn color="success" @click="toVerify()">下一步</v-btn>
        </div>
    </div>
    <v-overlay 
     v-model="isVerify"
     height="100%" 
     width="100%" 
     absolute 
     persistent 
     >
       <verify-box class="register-verify" @pause="pause"/>
    </v-overlay>
</template>
<script lang="ts" setup>
import { ref, inject } from 'vue'
import { allTitleArray } from '../register/static'
import VerifyBox from '@/components/bussiness/verifyBox/index.vue'
const $http:any = inject('$http')
const hasadd = ref(false)
const username = ref('')
const pwd = ref('')
const titleArray = ref([])
const introduction = ref('')
const showPwd = ref(false)
const userImgUrl:any = ref('')
const isVerify:any = ref(null)
const changeShow = () => {
  showPwd.value = !showPwd.value
  console.log(showPwd.value)
}

const selectedTitle = (e:Array<number>) => {
  let selected:any = []
  e.forEach((n, index) => {
    e[index] = e[index] - 2
  })
  for (const i in e) {
    selected.push(allTitleArray[e[i]])
  }
  selected = [...new Set(selected)]
  titleArray.value = selected
}

const getUserImg = (e:any) => {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
      userImgUrl.value = reader.result   
  }
  hasadd.value = true
}

const toVerify = () => {
  isVerify.value = true
}

const pause = (value:boolean) => {
  console.log(value)
  isVerify.value = value
}

// const postMessage = () => {
//   console.log(JSON.stringify(userImgUrl.value))
//   $http({
//   path: '/api/v1/users/register/add',
//   method: 'post',
//   params: {
//     userImgUrl: userImgUrl.value,
//     username: username.value,
//     pwd: pwd.value,
//     titleArray: titleArray.value,
//     introduction: introduction.value
//   }
// }).then((res: any) => {
//   console.log(res)
// })
// }
</script>
<style lang="less" scoped>
.register{
    position: absolute;
    left: 0;
    right: 0;
    top: 80px;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px 10px;
    width: 500px;
    height: 78%;
    overflow: auto;
    background-color: rgb(37, 37, 37);
    &-picture{
      display: flex;
      justify-content: center;
        &-jpg{
            max-height: 100%;
            .jpg-input{
              width: 100%;
              height: 100%;
              opacity: 0;
            }
        }
    }
    &-input{
        height: 100px;
    }
    &-title{
      width: 100%;
      height: 200px;
      margin-bottom: 20px;
      &-content{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        white-space: normal;
        height: 100%;
        width: 100%;
        background-color: rgb(65, 65, 65);
        .title-chips{
          text-align: center;
          line-height: 40px;
          margin: 10px;
        }
      }
    }
    &-next{
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 100px;
      height: 40px;
    }
}
.register-verify{
  position: absolute;
  right: 0;
  left: 0;
  margin: 0 auto;
  top: 140px;
}
</style>
