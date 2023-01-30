<template>
  <div class="tab">
    <ul class="tab_nav">
      <li
        :class="selectedTab === item.id ? 'tab_list selected' : 'tab_list'"
        v-for="item in tabsData"
        :key="item.id"
        @click="clickOnTab(item.id)"
      >
        {{ item.label }}
      </li>
    </ul>
    <div class="tab_content"><slot></slot></div>
  </div>
</template>

<script setup>
  import {gsap} from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import {onMounted} from 'vue';
  const props = defineProps({
    tabsData: {
      type: Array,
      required: true,
    },
    selectedTab: {
      type: String,
      required: false,
    },
  });
  const emit = defineEmits(['changeTab']);
  const clickOnTab = (tabId) => {
    emit('changeTab', tabId);
  };

  gsap.registerPlugin(ScrollTrigger);
  onMounted(() => {
    gsap.to('.tab_nav', {
      scrollTrigger: {
        toggleActions: 'restart none none reverse',
        start: 'top top',
      },
    });
  });
</script>

<style lang="scss" scoped>
  .tab {
    color: white;
    &_nav {
      display: flex;
      gap: 2rem;
      justify-content: center;
      margin-bottom: 6rem;
      z-index: 22;
    }

    &_list {
      font-size: 2.4rem;
      font-weight: 400;
      line-height: 2.4rem;
      letter-spacing: -0.800000011920929px;
      opacity: 0.2;
      transition: all ease 0.4s;
      cursor: pointer;
      &.selected {
        opacity: 1;
      }
    }
    &_content {
      height: auto;
    }
  }
  @include media('max', 'sm') {
    .tab {
      &_list {
        font-size: 1.4rem;
        line-height: 1.4rem;
      }
      &_nav {
        margin-bottom: 3rem;
      }
    }
  }
</style>
