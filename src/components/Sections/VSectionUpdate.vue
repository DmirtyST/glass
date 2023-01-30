<template>
  <div class="update">
    <div class="update_row">
      <div class="update_content">
        <div class="update_item">
          <div class="update_title">
            <div class="update_sub">
              <VTypography size="md">Examples of how to use GLOSSY 3d set</VTypography>
            </div>
            <VHtag size="xxl" tag="h2">Enhance your design projects</VHtag>
          </div>
          <div class="update_left">
            <picture>
              <source media="(max-width: 568px)" :srcset="updateLeftSm" />
              <VImg :sourse="updateLeft" ps="contain" />
            </picture>
          </div>
        </div>
        <div class="update_item">
          <div class="update_right">
            <VImg :sourse="updateRight" ps="contain" />
          </div>
        </div>
      </div>
    </div>
    <div class="update_bottom">
      <div class="update-bottom_content">
        <div class="update-bottom_img">
          <VImg :sourse="updateBox" ps="contain" />
        </div>
        <div class="update-bottom_item">
          <p class="update-bottom_text">
            <VTypography size="md">
              Building a portfolio, posting stories for your brand, looking for a new
              graphic for a design studio or just want to impress your client with fresh
              3D illustrations?</VTypography
            >
          </p>
          <p class="update-bottom_text">
            <VTypography size="md">
              This abstract pack is perfect for a variety of design projects!</VTypography
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import VImg from '../UI/Img/VImg.vue';
  import updateRight from '../Image/updateRight.png';
  import updateLeft from '../Image/updateLeft.png';
  import updateLeftSm from '../Image/updateLeftSm.png';
  import updateBox from '../Image/updateBox.png';
  import {gsap} from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import {onMounted} from 'vue';
  import VHtag from '../UI/Htag/VHtag.vue';
  import VTypography from '../UI/Typography/VTypography.vue';
  gsap.registerPlugin(ScrollTrigger);
  onMounted(() => {
    let mm = gsap.matchMedia();
    mm.add('(min-width:1024px)', () => {
      const tlLeft = gsap.timeline({
        scrollTrigger: {
          scrub: 4,
          toggleActions: 'restart none none none',
          start: 'center bottom',
          trigger: '.update_row',
        },
      });
      tlLeft.to('.update_title', {
        translateX: '-120%',
        position: 'absolute',
        duration: 0.5,
      });
      tlLeft.to('.update_left', {
        opacity: 1,
        scale: 1,
        transition: 'all .4s easy',
        duration: 1,
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 4,
          toggleActions: 'restart none none none',
          start: 'top center',
          trigger: '.update_row',
        },
      });
      tl.to('.update_right', {
        translateY: '-13%',
      });
      gsap.to('.update-bottom_img', {
        x: '0%',
        opacity: 1,
        duration: 2,
        transition: 'all .4s easy',
        scrollTrigger: {
          toggleActions: 'restart none none reverse',
          start: 'top center',
          trigger: '.update_bottom',
        },
      });
      gsap.to('.update-bottom_item', {
        x: '0%',
        opacity: 1,
        duration: 2,
        transition: 'all .4s easy',
        scrollTrigger: {
          toggleActions: 'restart none none reverse',
          start: 'top center',
          trigger: '.update_bottom',
        },
      });
    });
  });
</script>

<style lang="scss" scoped>
  .update {
    height: auto;

    &_row {
      height: 450vh;
    }
    &_content {
      position: sticky;
      top: 0;
      height: 100vh;
      padding: 0 7.5rem;
      padding-top: 13rem;
      display: flex;
      justify-content: space-between;
      overflow: hidden;
    }
    &_item {
      &:first-child {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
    &_sub {
      opacity: 0.5;
      margin-bottom: 0.5rem;
    }
    &_title {
      width: 66rem;
    }
    &_right {
      width: 40rem;
      height: 60rem;
      position: relative;
      transform: translateY(100%);
    }

    &_left {
      position: relative;
      width: 90rem;
      height: 56rem;
      opacity: 0;
      transform: scale(0.8);
    }
    &_bottom {
      height: 100vh;
      padding-top: 4rem;
    }
    &-bottom {
      &_img {
        width: 40rem;
        height: 60rem;
        position: relative;
        transform: translateX(-100%);
        opacity: 0;
      }
      &_item {
        width: 26rem;
        display: flex;
        flex-direction: column;
        gap: 7rem;
        transform: translateX(100%);
        opacity: 0;
      }

      &_content {
        display: flex;
        margin: 0 auto;
        width: 90rem;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  @include media('max', 'lg') {
    .update {
      padding: 0 1.5rem;
      padding-bottom: 2rem;
      &_row {
        height: auto;
      }
      &_content {
        position: static;
        height: auto;
        padding: 0 0rem;
        padding-top: 5rem;
        display: block;
        justify-content: space-between;
        overflow: hidden;
      }
      &_right {
        width: 40rem;
        height: 60rem;
        position: relative;
        transform: translateY(0%);
      }
      &_item {
        display: none;
      }
      &_title {
        margin-bottom: 2rem;
      }
      &_left {
        width: 100%;
        height: 40rem;
        opacity: 1;
        transform: scale(1);
        img {
          object-fit: cover;
        }
      }
      &_bottom {
        height: auto;
        padding-top: 4rem;
      }
      &-bottom {
        &_img {
          width: 30rem;
          height: 50rem;
          position: relative;
          transform: translateX(0%);
          opacity: 1;
        }
        &_item {
          width: 26rem;
          display: flex;
          flex-direction: column;
          gap: 7rem;
          transform: translateX(0%);
          opacity: 1;
        }

        &_content {
          display: flex;
          margin: 0 auto;
          width: 100%;
          gap: 1rem;
          justify-content: space-around;
          align-items: center;
        }
      }
    }
  }

  @include media('max', 'sm') {
    .update {
      &_title {
        width: 100%;
      }

      &_left {
        width: 100%;
        height: 22rem;
        opacity: 1;
        transform: scale(1);
        img {
          object-fit: cover;
        }
      }
      &_bottom {
        padding-top: 3rem;
      }
      &-bottom {
        &_img {
          width: 20rem;
          height: 40rem;
          position: relative;
          transform: translateX(0%);
          opacity: 1;
        }
        &_item {
          width: 26rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          text-align: center;
        }

        &_content {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 3rem;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
</style>
