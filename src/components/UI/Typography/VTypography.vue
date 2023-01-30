<template>
  <p :style="{color: color}" :class="['Typography', `Typography_${size}`]">
    <slot></slot>
  </p>
</template>

<script setup>
  const props = defineProps({
    size: {
      type: String,
      default: 'sm',
    },

    color: {
      type: String,
      default: '#F9F9F9',
    },
  });
</script>

<style lang="scss" scoped>
  .Typography {
    &_lg {
      color: $white;
      @include size(2.4rem, 3rem, 0, 400);
    }
    &_md {
      color: $white;
      @include size(2.2rem, 3rem, 0, 400);
    }
  }

  @include media('max', 'sm') {
    .Typography {
      &_lg {
        color: $white;
        @include size(1.9rem, 2.2rem, 0, 400);
      }
      &_md {
        color: $white;
        @include size(1.8rem, 2.2rem, 0, 400);
      }
    }
  }
</style>
