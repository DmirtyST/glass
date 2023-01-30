<template>
  <div class="header">
    <div class="header_row">
      <div class="header_logo">
        <VImg :sourse="logo" ps="cover" />
      </div>
      <button class="header_btn">FREE TRY</button>
    </div>
  </div>
</template>

<script setup>
  import VImg from '../UI/Img/VImg.vue';
  import logo from '../Image/logo.png';
</script>

<style lang="scss" scoped>
  .header {
    position: absolute;
    width: 100%;
    z-index: 9999;
    left: 0;
    top: 0;
    &_row {
      padding: 0 4.5rem;
      padding-top: 2.4rem;
      padding-bottom: 3.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &_btn {
      border-radius: 10rem;
      padding: 1.7rem 2.8rem 1.7rem 2.8rem;
      background-color: $black;
      color: $white;
      font-family: Inter;
      font-size: 1.9rem;
      font-weight: 300;
      line-height: 2rem;
    }
    &_logo {
      width: 23rem;
      height: 5rem;
      position: relative;
    }
  }
  @include media('max', 'lg') {
    .header {
      &_logo {
        width: 14.2rem;
        height: 3.2rem;
        position: relative;
      }

      &_btn {
        border-radius: 10rem;
        padding: 1.2rem 2.4rem 1.2rem 2.4rem;
        background-color: $black;
        color: $white;
        font-family: Inter;
        font-size: 1.4rem;
        font-weight: 300;
        line-height: 2rem;
      }
    }
  }
  @include media('max', 'sm') {
    .header {
      &_logo {
        width: 12.2rem;
        height: 2.6rem;
        position: relative;
      }
      &_row {
        padding: 0 1.5rem;
        padding-top: 2.4rem;
      }
      &_btn {
        border-radius: 10rem;
        padding: 1rem 2rem 1rem 2rem;
        background-color: $black;
        color: $white;
        font-family: Inter;
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 2rem;
      }
    }
  }
</style>
