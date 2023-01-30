<template>
  <div class="container" :style="{'max-width': `${width}`}">
    <slot></slot>
  </div>
</template>

<script setup>
  const props = defineProps({
    width: {
      type: String,
      default: '100',
    },
  });
</script>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    height: 100%;
    width: 100%;
    padding: 0 15px;
    position: relative;
  }
</style>
