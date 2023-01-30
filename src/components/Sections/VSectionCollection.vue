<template>
  <div class="collection">
    <div class="collection_top">
      <div class="collection_title">
        <VHtag size="xxl" tag="h2">20 different Shapes</VHtag>
      </div>
      <div class="collection_text">
        <VTypography size="md">
          Curved lines, abstract, surreal, flying-paper-like, fluid, liquid, ribbons.
          Diverse variety of cool forms that you can use in your projects. Just look at
          how bright and attractive these illustrations are!
        </VTypography>
      </div>
    </div>
    <div class="collection_row">
      <div class="collection_item">
        <div class="collection_number">1</div>
        <div class="collection_img">
          <VImg ps="contain" :sourse="collection1" />
        </div>
      </div>
      <div class="collection_item">
        <div class="collection_number">2</div>
        <div class="collection_img">
          <VImg ps="contain" :sourse="collection2" />
        </div>
      </div>
      <div class="collection_item">
        <div class="collection_number">3</div>
        <div class="collection_img">
          <VImg ps="contain" :sourse="collection3" />
        </div>
      </div>
      <div class="collection_item">
        <div class="collection_number">4</div>
        <div class="collection_img">
          <VImg ps="contain" :sourse="collection4" />
        </div>
      </div>
      <div class="collection_item">
        <div class="collection_number">5</div>
        <div class="collection_img">
          <VImg ps="contain" :sourse="collection5" />
        </div>
      </div>
      <div class="collection_item">
        <div class="collection_number">6</div>
        <div class="collection_img">
          <VImg ps="contain" :sourse="collection6" />
        </div>
      </div>
      <div class="collection_item">
        <div class="collection_number">7</div>
        <div class="collection_img">
          <VImg ps="contain" :sourse="collection7" />
        </div>
      </div>
      <div class="collection_item">
        <div class="collection_number">8</div>
        <div class="collection_img">
          <VImg ps="contain" :sourse="collection8" />
        </div>
      </div>
      <div class="collection_item">
        <div class="collection_number">9</div>
        <div class="collection_img">
          <VImg ps="contain" :sourse="collection9" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import collection1 from '../Image/collection1.png';
  import collection2 from '../Image/collection2.png';
  import collection3 from '../Image/collection3.png';
  import collection4 from '../Image/collection4.png';
  import collection5 from '../Image/collection5.png';
  import collection6 from '../Image/collection6.png';
  import collection7 from '../Image/collection7.png';
  import collection8 from '../Image/collection8.png';
  import collection9 from '../Image/collection9.png';
  import VImg from '../UI/Img/VImg.vue';
  import VHtag from '../UI/Htag/VHtag.vue';
  import VTypography from '../UI/Typography/VTypography.vue';
</script>

<style lang="scss" scoped>
  .collection {
    height: auto;
    background-color: $blue;
    &_row {
      min-height: 200vh;
      height: 300vh;
      display: flex;
      flex-wrap: wrap;
      padding-left: 7rem;
      overflow: hidden;
    }
    &_top {
      color: $white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 9rem;
      padding-left: 7.5rem;
      padding-bottom: 9rem;
      width: 130rem;
    }
    &_item {
      width: 48rem;
      height: 53rem;
      border: 1px solid #252a52;
      z-index: 1;
      padding: 6.5rem 4.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #0d123f;
      position: relative;
      transition: all ease 0.4s;
      overflow: hidden;
      &:hover {
        background-color: $black;
        transition: all ease 0.4s;
      }

      &:nth-child(2) {
        transform: translate(-18rem, 40rem);
        box-shadow: 53px 28px 30px -10px #00000073;
        z-index: 5;
      }
      &:nth-child(3) {
        transform: translate(-15.2rem, 10.6rem);
        z-index: 4;
      }
      &:nth-child(4) {
        transform: translate(114rem, -33.4rem);
        z-index: 22;
        box-shadow: 53px 27px 30px -10px #00000073;
      }
      &:nth-child(5) {
        transform: translate(-64rem, 33.5rem);
        z-index: 20;
        width: 50;
        height: 53;
        box-shadow: 51px 29px 30px -10px #00000073;
        img {
          left: 45px;
        }
      }
      &:nth-child(6) {
        transform: translate(63rem, -35rem);
        width: 53rem;
        height: 53rem;
        z-index: 6;
      }
      &:nth-child(7) {
        transform: translate(-28.5rem, 13.5rem);
        z-index: 15;
        width: 50rem;
        height: 53rem;
      }
      &:nth-child(8) {
        transform: translate(93rem, -44rem);
        z-index: 22;
        width: 50rem;
        height: 53rem;
      }
      &:last-child {
        transform: translate(15.5rem, 12rem);
        box-shadow: 60px 0px 30px -10px #00000073;
      }
    }
    &_img {
      width: inherit;
      height: inherit;
      position: relative;
      z-index: -1;
    }
    &_title {
      width: 70rem;
    }
    &_number {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 20px;
      color: $white;
      top: 2.3rem;
      left: 2.1rem;
      position: absolute;
      z-index: 22;
    }
    &_text {
      width: 30rem;
    }
  }

  @include media('max', 'lg') {
    .collection {
      padding: 0 1.5rem;
      &_top {
        padding-left: 0;
        padding-bottom: 5rem;
        padding-top: 5rem;
        width: 100%;
        display: block;
      }
      &_text {
        display: none;
      }
      &_title {
        width: 100%;
      }
      &_row {
        min-height: 200vh;
        height: auto;
        display: grid;
        grid-template-columns: 50% 48%;
        padding-left: 0;
        padding-bottom: 3rem;
        overflow: hidden;
        gap: 1.5rem;
        margin: 0 auto;
      }
      &_item {
        &:first-child,
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6),
        &:nth-child(7),
        &:nth-child(8),
        &:last-child {
          width: 100%;
          height: 100%;
          transform: translate(-0rem, 0rem);
          box-shadow: none;
          padding: 4.5rem 3.5rem;
        }
      }
      &_number {
        top: 1.3rem;
        left: 1.3rem;
      }
    }
  }

  @include media('max', 'sm') {
    .collection {
      &_row {
        grid-template-columns: 100%;
        gap: 1rem;
      }
      &_top {
        padding-bottom: 3rem;
        padding-top: 3rem;
      }
      &_item {
        &:first-child,
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6),
        &:nth-child(7),
        &:nth-child(8),
        &:last-child {
          height: 33rem;
        }
      }
    }
  }
</style>
