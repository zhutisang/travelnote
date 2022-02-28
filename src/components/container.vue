<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        class="navbar"
      >
        <v-list>
          <v-list-item
            prepend-avatar="../assets/pictures/1.jpg"
            title="zhutisang"
            subtitle="13924680329"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
          <v-list-item prepend-icon="home-assistant" title="Home" value="home"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 750px"></v-main>
    </v-layout>
  </v-card>
</template>
<style lang="less" scoped>
.navbar{
    position: absolute !important;
    margin-top: 50px !important;
    margin-bottom: 100px !important;
}
</style>
