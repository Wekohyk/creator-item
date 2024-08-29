<template>
  <div class="backgroundImg w-100vw h-327 fixed top-0 left-0 -z-1"></div>
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
  <div class="grid-areas h-218 flex-shrink-0 mt-23 relative top-0 left-0">
    <div
      v-for="item in heatSurgeDataTopList"
      :key="item.top"
      :style="{ gridArea: `item${item.top}` }"
      :class="
        item.top === 1
          ? ''
          : item.top === 2
            ? 'absolute bottom-40 left-45'
            : 'absolute bottom-40 right-45'
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

  <div class="w-full bg-#fff rounded-t-10 px-20 mb-34">
    <div
      class="flex items-center"
      v-for="item in heatSurgeData"
      :key="item.top"
    >
      <div
        class="text-14 font-600 text-#8A8A8A w-20 h-20 text-center lh-20 bg-#F2F2F2 rounded-4"
      >
        {{ item.top }}
      </div>
      <div
        class="flex justify-between items-center w-full ml-10 py-16"
        :class="item.top === 1 ? '' : 'b-t-#F2F2F7 b-t-solid b-t-0.5'"
      >
        <div class="flex justify-center items-center gap-8">
          <img
            :src="item.avatarImg"
            alt=""
            class="w-40 h-40 rounded-50% ml-2"
          />
          <div class="text-15 font-500">{{ item.name }}</div>
        </div>
        <div class="flex justify-center items-center gap-6">
          <div
            class="px-8 py-4 bg-#FF9500/8% flex items-center justify-center rounded-6"
          >
            <Icon
              v-show="item.isUpDown === 'up'"
              icon="eva:arrow-up-fill"
              width="13px"
              height="13px"
              color="#FF9500"
            />
            <Icon
              v-show="item.isUpDown === 'down'"
              icon="eva:arrow-down-fill"
              width="13px"
              height="13px"
              color="#FF9500"
            />
            <div class="text-11 font-500 text-#FF9F0A">{{ item.hot }}</div>
          </div>
          <Icon
            icon="weui:arrow-filled"
            width="16px"
            height="16px"
            color="#2B2967"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import AuthorCard from './AuthorCard.vue';
import { heatSurgeData } from './data';

const heatSurgeDataTopList = heatSurgeData.splice(0, 3);

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
  // background: linear-gradient(180deg, #e6eaff 0%, #fff1f1 100%);
}

.grid-areas {
  display: grid;
  grid-template-areas:
    'item1 item1 item1 item1'
    'item2 item2 item3 item3';
  grid-template-columns: repeat(4, 1fr);
}
</style>
