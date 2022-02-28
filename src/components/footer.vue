<template>
  <v-footer class="domain-footer">
    <v-card
      elevation="0"
      rounded="0"
      width="100%"
      max-height=70
      border=50
      class="bg-grey text-center"
    >
      <v-card-text>
        <v-btn
          class="mx-4"
          icon="mdi-home"
          variant="plain"
        ></v-btn>
        <v-btn
          class="mx-4"
          icon="mdi-email"
          variant="plain"
        ></v-btn>
        <v-btn
          class="mx-4"
          icon="mdi-calendar"
          variant="plain"
        ></v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="text-white">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<style lang="less" scoped>
.domain-footer{
    flex:0;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 2;
}
</style>
