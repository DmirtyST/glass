<template>
  <div class="price">
    <div class="price_row">
      <div class="price_content">
        <div class="price_item">
          <div class="price_img">
            <VImg :sourse="priceCenter" ps="contain" />
          </div>
          <div class="price_title">
            <VHtag tag="h3" size="xl"> Get Full Glossy set</VHtag>
          </div>
          <ul class="price_lists">
            <li class="price_list">20 Different shapes</li>
            <li class="price_list">4 Cool materials</li>
            <li class="price_list">3600x3600px</li>
            <li class="price_list">Figma file</li>
            <li class="price_list">PNG images</li>
          </ul>
          <div class="price_btn">Purchase, $36</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import VImg from '../UI/Img/VImg.vue';
  import priceCenter from '../Image/priceCenter.png';
  import {gsap} from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import {onMounted} from 'vue';
  import VHtag from '../UI/Htag/VHtag.vue';
  gsap.registerPlugin(ScrollTrigger);
  onMounted(() => {
    let mm = gsap.matchMedia();
    mm.add('(min-width:568px)', () => {
      gsap.to('.price_img', {
        ease: '.7s',
        opacity: 1,
        translate: '(-50% -50%)',
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.price_row',
          toggleActions: 'restart none none reverse',
          start: 'top 20%',
        },
      });
    });
  });
</script>

<style lang="scss" scoped>
  .price {
    padding-top: 15rem;
    margin-bottom: 22rem;
    &_row {
      height: 100vh;
    }
    &_content {
      height: 63rem;
      width: 130rem;
      margin: 0 auto;
      position: sticky;
      top: 4rem;
      border: 1px solid #333333;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    &_item {
      color: $white;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5.6rem;
      width: 50rem;
      text-align: center;
      position: relative;
      z-index: 1;
    }
    &_img {
      position: absolute;
      transform: translate(-50%, -50%) scale(0.5) rotateX(33deg);
      top: 50%;
      left: 50%;
      width: 120rem;
      height: 120rem;
      z-index: -1;
      opacity: 0;
    }

    &_title {
      font-family: Inter;
      font-size: 7.9rem;
      font-weight: 300;
      line-height: 8rem;
      letter-spacing: -0.1rem;
      text-transform: uppercase;
    }
    &_lists {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }
    &_list {
      font-family: Inter;
      font-size: 2.4rem;
      font-weight: 400;
      line-height: 2.4rem;
      letter-spacing: -0.5px;
    }
    &_btn {
      padding: 1.5rem 3.1rem;
      background-color: $white;
      border-radius: 10rem;
      font-size: 2.4rem;
      font-weight: 300;
      line-height: 2.4rem;
      color: $black;
    }
  }
  @include media('max', 'lg') {
    .price {
      margin-bottom: 5rem;
      padding: 0 1.5rem;
      height: auto;
      &_row {
        height: 55rem;
      }
      &_content {
        height: 100%;
        width: 100%;
        position: static;
      }
      &_img {
        position: absolute;
        transform: translate(-50%, -50%) scale(0.5) rotateX(33deg);
        top: 50%;
        left: 50%;
        width: 80rem;
        height: 80rem;
        z-index: -1;
        opacity: 0;
      }
      &_list {
        font-size: 1.8rem;
        line-height: 1.8rem;
      }
      &_btn {
        padding: 1.5rem 2.1rem;
        font-size: 1.8rem;
        line-height: 1.8rem;
      }
    }
  }
  @include media('max', 'sm') {
    .price {
      margin-bottom: 5rem;
      padding: 0 1.5rem;
      padding-top: 1rem;
      overflow: hidden;

      &_row {
        height: 40rem;
      }
      &_item {
        width: 100%;
      }
      &_img {
        position: absolute;
        transform: translate(-50%, -50%) scale(1) rotateX(33deg);
        top: 50%;
        left: 50%;
        width: 50rem;
        height: 55rem;
        z-index: -1;
        opacity: 1;
      }
      &_list {
        font-size: 1.5rem;
        line-height: 1.5rem;
      }
      &_btn {
        padding: 1.1rem 1.8rem;
        font-size: 1.5rem;
        line-height: 1.5rem;
      }
    }
  }
</style>
