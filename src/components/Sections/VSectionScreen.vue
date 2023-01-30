<template>
  <div class="screen">
    <img :src="bgScreen" />
    <div class="screen_row">
      <div class="screen_content">
        <div class="screen_item">
          <div class="screen_sub"><VTypography size="lg">For Figma</VTypography></div>
          <div class="screen_title">
            <VHtag tag="h2" size="xl"
              >Glass And Holographic abstract 3d backgrounds</VHtag
            >
          </div>
        </div>
        <div class="screen_item">
          <div class="screen_desc">
            <VTypography size="md">
              Set of bold and vivid graphics. To make your projects look
              stunning.</VTypography
            >
          </div>
          <a href="#abs">
            <VSvg class="screen_icon" id="arrow-down" width="2.6rem" height="3.7rem" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import bgScreen from '../Image/bg-screen.png';
  import VHtag from '../UI/Htag/VHtag.vue';
  import VSvg from '../UI/SVG/VSvg.vue';
  import VTypography from '../UI/Typography/VTypography.vue';
</script>

<style lang="scss" scoped>
  .screen {
    height: 120vh;
    position: relative;
    z-index: 1;
    background-image: $pureLinear;
    overflow: hidden;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      vertical-align: middle;
      display: inline-block;
      will-change: transform;
      transform: translate3d(0rem, 0rem, 0rem) scale3d(1.3, 1.26666, 1) rotateX(35deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg);
      transform-style: preserve-3d;
      object-fit: cover;
      z-index: -1;
    }
    &_row {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 15px;
    }

    &_content {
      height: 57rem;
      font-family: Inter;
      width: 119rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $white;
      justify-content: space-between;
    }
    &_item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &_sub {
      margin-bottom: 3.2rem;
      opacity: 0.8;
      font-style: italic;
    }
    &_title {
      text-align: center;
    }
    &_desc {
      width: 30rem;
      text-align: center;
      opacity: 0.8;
    }
    &_icon {
      margin-top: 10rem;
      position: relative;
      z-index: 22;
      top: 4rem;
      animation: down 2s ease-in-out infinite alternate-reverse;
    }
    @keyframes down {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(50px);
      }
    }
  }
  @include media('max', 'lg') {
    .screen {
      &_content {
        height: 57rem;
        width: 100%;
        margin: 0 auto;
      }
      &_title {
        margin-bottom: 3rem;
      }
      &_sub {
        font-size: 2.3rem;
        line-height: 2.3rem;
        margin-bottom: 2rem;
      }
      &_desc {
        font-size: 2.2rem;
        line-height: 2.2rem;
        width: 30rem;
      }
      &_content {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: $white;
      }
    }
  }

  @include media('max', 'sm') {
    .screen {
      height: 60rem;
      &_content {
        height: 57rem;
        width: 100%;
        margin: 0 auto;
      }
      &_title {
        width: 20rem;
      }
      &_sub {
        font-size: 2rem;
        line-height: 2rem;
        margin-bottom: 2rem;
      }
      &_desc {
        font-size: 2rem;
        line-height: 2rem;
        width: 30rem;
      }
    }
  }
</style>
