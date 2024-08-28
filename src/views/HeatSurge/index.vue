<template>
  <div class="backgroundImg w-full h-327 fixed top-0 left-0 -z-1"></div>
  <div class="flex justify-center items-center relative top-0 left-0">
    <Icon
      icon="fluent:ios-arrow-24-filled"
      width="18px"
      height="18px"
      class="absolute top-3 left-16"
      @click="goBack"
    />
    <div class="font-500 text-18 text-#252525">热度飙升榜</div>
  </div>

  <!-- 排名123 -->
  <div class="grid-areas w-full h-218 flex-shrink-0 mt-23">
    <div
      v-for="item in heatSurgeData"
      :key="item.top"
      :style="{ gridArea: `item${item.top}` }"
      :class="
        item.top === 1
          ? ''
          : item.top === 2
            ? '-translate-y-70 -translate-x-25'
            : '-translate-y-70 translate-x-25'
      "
    >
      <AuthorCard
        :top="item.top"
        :avatar-img="item.avatarImg"
        :name="item.name"
        :hot="item.hot"
        :is-up-down="item.isUpDown"
      ></AuthorCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import AuthorCard from './AuthorCard.vue';
import { heatSurgeData } from './data';

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<style scoped lang="scss">
.backgroundImg {
  background-image: url('/heatSurge/backgroundImg.webp');
  background-size: 100%;
  object-fit: cover;
  background-color: linear-gradient(180deg, #e6eaff 0%, #fff1f1 100%);
}

.grid-areas {
  display: grid;
  grid-template-areas:
    'item1 item1 item1 item1'
    'item2 item2 item3 item3';
  grid-template-columns: repeat(4, 1fr);
}
</style>
