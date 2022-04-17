<template>
  <v-card class="card">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      class="card-img"
      :aspect-ratio="16 / 9"
      cover
    >
      <v-icon
        large
        color="white darken-2"
        class="card-img-switch"
        @click="concludeSwitch()"
      >mdi-chevron-right</v-icon>
      <v-scroll>
        <v-textArea
          readonly="props.isEdit"
          autofocus
          v-show="isOpen"
          class="card-img-conclude"
        >{{ expImgConclude }}</v-textArea>
      </v-scroll>
    </v-img>
    <div class="card-chips">
      <v-chip
        v-for="(item, i) in expClips"
        :key="i"
        class="ma-2"
        size="large"
        closable="props.isEdit"
        color="secondary"
      >{{ item }}</v-chip>
      <v-icon class="card-clips-add" v-if="canChipAdd">"mdi-plus-circle</v-icon>
    </div>
    <v-rating class="card-rating" v-model="expStars" half-increments></v-rating>
    <div class="card-author" v-show="expIsShowAuthor">{{ expAuthor }}</div>
  </v-card>
</template>
<script lang="ts" setup>
import { computed, defineProps, ref } from 'vue'
import { maxclips, expClips, expStars, expIsShowAuthor, expImgConclude, expAuthor } from './static'

const isOpen = ref(false)

const iconLeft = ref('rotate(0deg)')

const degree = ref(iconLeft.value.indexOf('8') ? 0 : 180)

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: false
  }
})

const canChipAdd = computed(() => {
  return expClips.length !== maxclips || props.isEdit
})

const concludeSwitch = () => {
  isOpen.value = !isOpen.value
}

</script>
<style lang="less" scoped>
.card {
  position: relative;
  top: -20px;
  margin: 0 auto;
  height: 440px;
  width: 40%;
  background-color: rgb(230, 230, 230);
  &-img {
    height: 60%;
    width: 100%;
    &-switch {
      position: absolute;
      top: 50%;
      z-index: 1;
    }
    @keyframes fade-in {
    0% {opacity: 0;}
    100% {opacity: 0.8;}
    0% { opacity: 0; }
}
    &-conclude {
      position: absolute;
      height: 100%;
      width: 100%;
      white-space: normal;
      flex-wrap: wrap;
      padding: 10px 5px 10px 15px;
      background-color: black;
      opacity: 80%;
      line-height: 25px;
      letter-spacing: 2px;
      overflow-y: auto;
      animation: fade-in 0.5s ease;
    }
  }
  &-chips {
    display: inline-block;
    height: 20%;
    width: 100%;
    margin-top: 10px;
    &-add {
      width: 10px;
      height: 10px;
    }
  }
  &-rating {
    position: absolute;
    bottom: 0px;
    left: 0;
  }
  &-author {
    position: absolute;
    right: 10px;
    bottom: 10px;
    font-size: 20px;
  }
}
</style>
