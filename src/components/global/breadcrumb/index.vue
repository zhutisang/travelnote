<template>
  <v-breadcrumbs :items="items">
    dhksahdka
    <template v-slot:text="{ item }">
      {{ item.text.toUpperCase() }}
    </template>
  </v-breadcrumbs>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component'
@Options({})
export default class breadcrumbs extends Vue {}
</script>
