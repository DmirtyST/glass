<template>
  <img :class="['img', `img_${ps}`]" :src="sourse" alt="img" />
</template>

<script setup>
  const props = defineProps({
    ps: {
      type: String,
      default: '',
    },
    sourse: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="scss" scoped>
  .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    &_cover {
      object-fit: cover;
    }
    &_contain {
      object-fit: contain;
    }
  }
</style>
