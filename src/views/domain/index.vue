<template>
  <v-app>
    <container />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import container from '../../components/container.vue'

export default defineComponent({
  name: 'Home',

  components: {
    container
  }
})
</script>
