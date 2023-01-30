<template>
  <div class="services">
    <VContainer width="120rem">
      <div class="services_row">
        <div class="services_item">
          <div class="services_rotate">
            <ACircling />
          </div>
          <div class="services_title">
            <VHtag tag="h3" size="xl">
              <div>Pro Access.</div>
              <div>
                huge library of 3d illustrations. 1000+ assets and regular releases
              </div>
            </VHtag>
          </div>
          <button class="services_btn">Try, from $23/month</button>
        </div>
      </div>
    </VContainer>
  </div>
</template>

<script setup>
  import VContainer from '../UI/Container/VContainer.vue';
  import ACircling from '../UI/Animation/ACircling.vue';
  import VHtag from '../UI/Htag/VHtag.vue';
</script>

<style lang="scss" scoped>
  .services {
    &_row {
      min-height: 65rem;
    }
    &_item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &_rotate {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
    }
    &_title {
      text-align: center;
      margin-bottom: 5.5rem;
    }
    &_btn {
      padding: 1.5rem 3.3rem;
      background: $pureLinear;
      font-size: 2.4rem;
      font-weight: 300;
      line-height: 3rem;
      text-transform: uppercase;
      letter-spacing: 0em;
      border-radius: 10rem;
      color: $white;
    }
  }
  @include media('max', 'lg') {
    .services {
      &_row {
        min-height: 45rem;
      }
    }
  }
  @include media('max', 'sm') {
    .services {
      &_row {
        min-height: 35rem;
      }
      &_btn {
        padding: 1.4rem 1.6rem;
        background: $pureLinear;
        font-size: 1.4rem;
        font-weight: 300;
        line-height: 1.4rem;
        text-transform: uppercase;
        letter-spacing: 0em;
        border-radius: 10rem;
        color: $white;
      }
    }
  }
</style>
