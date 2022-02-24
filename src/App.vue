<template>
  <v-app>
    <topbar />
      <router-view/>
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
