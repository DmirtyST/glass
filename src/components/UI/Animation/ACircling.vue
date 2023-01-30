<template>
  <div class="circling">
    <VImg :sourse="rotate" ps="cover" />
  </div>
</template>

<script setup>
  import VImg from '../Img/VImg.vue';
  import rotate from '../../Image/benefist_rotate.png';
</script>

<style lang="scss" scoped>
  .circling {
    width: 6.8rem;
    height: 6.8rem;
    position: relative;
    z-index: 1;
    animation: rotate 3.6s infinite linear;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
  @include media('max', 'lg') {
    .circling {
      width: 4.8rem;
      height: 4.8rem;
    }
  }
</style>
