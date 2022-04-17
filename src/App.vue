<template>
  <v-app class="app">
    <topbar />
      <router-view />
    <foot />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import topbar from '../src/components/topbar.vue'
import foot from '../src/components/footer.vue'

export default defineComponent({
  name: 'App',

  components: {
    topbar,
    foot
  },

  data () {
    return {
      //
    }
  }
})
</script>
<style lang="less">
.app{
  overflow-y: hidden;
  ::-webkit-scrollbar{
    width: 5px;
    height: 14px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: #b6b6b6;
  }
}
</style>
