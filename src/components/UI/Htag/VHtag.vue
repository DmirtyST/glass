<template>
  <h1 v-if="tag === 'h1'" :class="('Htag', `Htag_${size}`)"><slot></slot></h1>
  <h2 v-if="tag === 'h2'" :class="('Htag', `Htag_${size}`)"><slot></slot></h2>
  <h3 v-if="tag === 'h3'" :class="('Htag', `Htag_${size}`)"><slot></slot></h3>
  <h4 v-if="tag === 'h4'" :class="('Htag', `Htag_${size}`)"><slot></slot></h4>
  <h5 v-if="tag === 'h5'" :class="('Htag', `Htag_${size}`)"><slot></slot></h5>
  <h6 v-if="tag === 'h6'" :class="('Htag', `Htag${size}`)"><slot></slot></h6>
</template>

<script setup>
  const props = defineProps({
    size: {
      type: String,
      default: 'xs',
    },
    tag: {
      type: String,
      default: 'xs',
    },
  });
</script>

<style lang="scss" scoped>
  .Htag {
    &_xxl {
      color: $white;
      text-transform: uppercase;
      @include size(13.8rem, 12.9rem, -0.4rem, 300);
    }
    &_xl {
      color: $white;
      text-transform: uppercase;
      @include size(8rem, 8rem, -0.5rem, 300);
    }
  }
  @include media('max', 'lg') {
    .Htag {
      &_xxl {
        color: $white;
        text-transform: uppercase;
        @include size(9.8rem, 9.9rem, -0.2rem, 300);
      }
      &_xl {
        color: $white;
        text-transform: uppercase;
        @include size(5rem, 5rem, -0.2rem, 300);
      }
    }
  }

  @include media('max', 'sm') {
    .Htag {
      &_xxl {
        color: $white;
        text-transform: uppercase;
        @include size(5.8rem, 5.9rem, -0.2rem, 300);
      }
      &_xl {
        color: $white;
        text-transform: uppercase;
        @include size(3rem, 3rem, -0.1rem, 300);
      }
    }
  }
</style>
