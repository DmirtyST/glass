<template>
  <div class="benefits">
    <div class="benefits_row">
      <div class="benefits_content">
        <div class="benefits_image">
          <VImg :sourse="benefistCenter" ps="contain" />
        </div>
        <div class="benefits_item">
          <div class="benefits_rotate">
            <ACircling />
          </div>
          <div class="benefits_title">
            <VHtag size="xxl" tag="h2">Premium quality</VHtag>
          </div>
          <div class="benefits_sub">
            <VTypography size="md">
              Highly detailed renders. With good light. At 3600x3600px
              resolution.</VTypography
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import VImg from '../UI/Img/VImg.vue';
  import benefistCenter from '../Image/benefist_center.png';
  import {gsap} from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import {onMounted} from 'vue';
  import ACircling from '../UI/Animation/ACircling.vue';
  import VHtag from '../UI/Htag/VHtag.vue';
  import VTypography from '../UI/Typography/VTypography.vue';
  gsap.registerPlugin(ScrollTrigger);
  onMounted(() => {
    gsap.to('.benefits_image', {
      scale: 1,
      ease: '.7s',
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '.benefits_content',
        toggleActions: 'restart none none reverse',
        start: 'top 40%',
      },
    });
  });
</script>

<style lang="scss" scoped>
  .benefits {
    padding-top: 12rem;
    background-color: $black;
    height: auto;
    &_row {
      height: 100vh;
    }
    &_image {
      width: 65rem;
      height: 65rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%) scale(0.4);
      z-index: -1;
      opacity: 0;
    }
    &_title {
      padding: 0 15px;
    }
    &_item {
      color: $white;
      text-align: center;
    }
    &_rotate {
      display: flex;
      justify-content: center;
    }

    &_content {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: sticky;
      top: 0;
      overflow: hidden;
    }
  }
  @include media('max', 'lg') {
    .benefits {
      padding-top: 0rem;
      padding: 0 1.5rem;
      &_row {
        height: 55rem;
      }
      &_content {
        height: 100%;
      }

      &_image {
        width: 45rem;
        height: 45rem;
        position: absolute;
        left: 50%;
        top: 10%;
        transform: translateX(-50%) scale(0.4);
        z-index: -1;
        opacity: 0;
      }
    }
  }
  @include media('max', 'sm') {
    .benefits {
      padding-top: 0rem;
      &_row {
        height: 40rem;
      }
      &_content {
        height: 100%;
      }

      &_image {
        width: 35rem;
        height: 35rem;
        position: absolute;
        left: 50%;
        top: 10%;
        transform: translateX(-50%) scale(0.4);
        z-index: -1;
        opacity: 0;
      }
    }
  }
</style>
