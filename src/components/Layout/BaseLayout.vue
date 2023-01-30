<template>
  <div class="wrapper">
    <BaseHeader />
    <main class="page">
      <slot></slot>
    </main>
    <BaseFooter />
  </div>
</template>

<script setup>
  import BaseHeader from './BaseHeader.vue';
  import BaseFooter from './BaseFooter.vue';
</script>

<style lang="scss" scoped>
  .wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .page {
    flex: 1 1 auto;
  }
</style>
