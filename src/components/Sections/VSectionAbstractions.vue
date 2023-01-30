<template>
  <div id="abs" class="abstractions">
    <div class="abstractions_row">
      <div class="abstractions_content">
        <div class="abstractions_substrate"></div>
        <div class="abstractions_title">
          <VHtag size="xxl" tag="h2">4 awesome materials</VHtag>
        </div>

        <ul class="abstractions_item">
          <li class="abstractions_img">
            <VImg :sourse="abstractions1" ps="contain" />
          </li>
          <li class="abstractions_img">
            <VImg :sourse="abstractions2" ps="contain" />
          </li>
          <li class="abstractions_img">
            <VImg :sourse="abstractions3" ps="contain" />
          </li>
          <li class="abstractions_img">
            <VImg :sourse="abstractions4" ps="contain" />
          </li>
        </ul>
      </div>
    </div>
    <nav class="abstractions_nav">
      <ul class="abstractions_lists">
        <li class="abstractions_list">Iridescent</li>
        <li class="abstractions_list">Black holographic</li>
        <li class="abstractions_list">Holographic</li>
        <li class="abstractions_list">Glass</li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
  import {gsap} from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import {onMounted} from 'vue';
  import abstractions1 from '../Image/abstractions1.png';
  import abstractions2 from '../Image/abstractions2.png';
  import abstractions3 from '../Image/abstractions3.png';
  import abstractions4 from '../Image/abstractions4.png';
  import VHtag from '../UI/Htag/VHtag.vue';
  import VImg from '../UI/Img/VImg.vue';
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();

  onMounted(() => {
    mm.add('(min-width:1024px)', () => {
      gsap.to('.abstractions_img:nth-child(4)', {
        duration: 7,
        left: '50rem',
        scrollTrigger: {
          scrub: 3,
          trigger: '.abstractions_row',
          start: 'center bottom',
        },
      });
      gsap.to('.abstractions_img:nth-child(3)', {
        duration: 7,
        left: '15rem',
        scrollTrigger: {
          scrub: 3,
          trigger: '.abstractions_row',
          start: 'center bottom',
        },
      });
      gsap.to('.abstractions_img:nth-child(2)', {
        duration: 7,
        left: '-20rem',
        scrollTrigger: {
          scrub: 3,
          trigger: '.abstractions_row',
          start: 'center bottom',
        },
      });
      gsap.to('.abstractions_img:nth-child(1)', {
        duration: 7,
        left: '-50rem',
        scrollTrigger: {
          scrub: 3,
          trigger: '.abstractions_row',
          start: 'center bottom',
        },
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 2,
          trigger: '.abstractions_row',
        },
      });
      tl.to('.abstractions_item', {
        duration: 1,
        bottom: '48rem',
      });
      tl.to('.abstractions_title', {
        duration: 2,
        opacity: 0,
      });
    });
    mm.add('(max-width:1024px)', () => {
      gsap.to(
        '.abstractions_img:nth-child(4),.abstractions_img:nth-child(3),.abstractions_img:nth-child(2),.abstractions_img:nth-child(1)',
        {
          left: '0rem',
          scrollTrigger: {
            scrub: 3,
            trigger: '.abstractions_row',
            start: 'center bottom',
          },
        },
      );
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 3,
          trigger: '.abstractions_row',
        },
      });
      tl.to('.abstractions_item', {
        duration: 0,
        bottom: 'unset',
      });
      tl.to('.abstractions_title', {
        duration: 2,
        opacity: 1,
      });
    });
  });
</script>

<style lang="scss" scoped>
  .abstractions {
    height: auto;
    background-color: $black;
    padding-bottom: 10rem;
    &_substrate {
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.5);
      z-index: 2;
    }
    &_row {
      height: 600vh;
      position: relative;
    }
    &_nav {
      width: 80rem;
      margin: 0 auto;
      padding-top: 5.5rem;
      display: flex;
      justify-content: center;
    }
    &_lists {
      display: flex;
    }
    &_list {
      font-size: 2.3rem;
      line-height: 2.3rem;
      color: $white;
      border-right: 0.3rem solid $white;
      padding: 0 1rem;
      &:first-child {
        padding-left: 0rem;
      }
      &:last-child {
        border-right: none;
      }
    }
    &_content {
      position: sticky;
      top: 0;
      width: 100%;
      height: 117vh;
      padding-top: 10rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
    }
    &_item {
      position: relative;
      bottom: -30rem;
    }
    &_img {
      width: 75rem;
      height: 75rem;
      position: absolute;
      left: 50%;
      transform: translateX(-45%);
      top: 0;

      img {
        left: 0;
        top: 0;
      }
    }
    &_title {
      width: 70rem;
      margin: 0 auto;
      text-align: center;
    }
  }

  @include media('max', 'lg') {
    .abstractions {
      padding-top: 2rem;
      &_substrate {
        opacity: 1;
      }
      &_row {
        height: 60rem;
      }
      &_content {
        position: relative;
        height: 100%;
        padding-top: 0rem;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &_title {
        width: 70rem;
        position: relative;
        z-index: 22;
      }
      &_item {
        position: relative;
        bottom: 34rem !important;
        z-index: 1;
      }
      &_img {
        width: 50rem;
        height: 50rem;
        position: absolute;
        left: 50%;
        transform: translateX(-45%);
        top: 0;
        z-index: -1;
        &:nth-child(4) {
          left: 27rem !important;
        }
        &:nth-child(3) {
          left: 12rem !important;
        }
        &:nth-child(2) {
          left: -3rem !important;
        }
        &:nth-child(1) {
          left: -18rem !important;
        }
        img {
          left: 0;
          top: 0;
        }
      }
      &_list {
        font-size: 1.8rem;
        line-height: 1.8rem;
        border-right: 0.2rem solid $white;
      }
      &_nav {
        padding: 0 1.5rem;
      }
    }
  }
  @include media('max', 'sm') {
    .abstractions {
      padding-bottom: 5rem;
      &_row {
        height: 40rem;
      }
      &_nav {
        width: 100%;
        padding-top: 5.5rem;
      }

      &_item {
        bottom: 16rem !important;
      }
      &_img {
        width: 30rem;
        height: 30rem;
        position: absolute;
        left: 50%;
        transform: translateX(-45%);
        top: 0;
        z-index: -1;
        &:nth-child(4) {
          left: 18rem !important;
        }
        &:nth-child(3) {
          left: 9rem !important;
        }
        &:nth-child(2) {
          left: 0.3rem !important;
        }
        &:nth-child(1) {
          left: -10rem !important;
        }
        img {
          left: 0;
          top: 0;
        }
      }
      &_title {
        width: 100%;
        position: relative;
        z-index: 22;
      }
      &_list {
        font-size: 1.2rem;
        line-height: 1.2rem;
        border-right: 0.1rem solid $white;
      }
    }
  }
</style>
