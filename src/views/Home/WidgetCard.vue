<template>
  <div
    class="flex justify-center h-232 bg-#F6F7F9 rounded-6 overflow-hidden relative shadow-[0px_0px_16px_0px_#00000014] relative"
  >
    <img
      :src="img"
      alt=""
      class="w-128 h-132 rounded-10 mt-24 object-cover"
      :style="widgetCardStyle(leave[0])"
    />
    <div
      class="w-full h-58 absolute bottom-0 left-0 bg-#fff p-10 flex flex-col gap-2"
    >
      <div class="text-14">{{ widgetName }}</div>
      <div class="flex justify-between items-center">
        <div class="flex gap-4 items-center">
          <img :src="authorImg" alt="" class="w-18 h-18 rounded-50%" />
          <div class="text-10 text-#8A8A8A">{{ authorName }}</div>
        </div>
        <div class="text-10 text-#8A8A8A">{{ usePeople }}</div>
      </div>
    </div>

    <div class="absolute top-8 right-8 flex gap-4">
      <div
        class="w-16 h-16 lh-16 text-center rounded-4 bg-#0F0F0F/5% text-#B3B3B3 text-11 font-600"
        v-for="(item, index) in leave"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Leave } from './data';

interface Props {
  leave?: Leave[];
  img?: string;
  widgetName?: string;
  authorName?: string;
  authorImg?: string;
  usePeople?: string;
}

withDefaults(defineProps<Props>(), {
  leave: () => ['小', '中', '大'],
  img: '/avatar.webp',
  widgetName: 'CCD相机',
  authorName: '狗电筒',
  authorImg: '/avatar.webp',
  usePeople: '4.8万人使用',
});

const widgetCardStyle = (leave: string) => {
  switch (leave) {
    case '小':
      return {
        width: '114px',
        height: '114px',
        borderRadius: '10px',
        marginTop: '34px',
      };
    case '中':
      return {
        width: '155px',
        height: '72px',
        borderRadius: '10px',
        marginTop: '55px',
      };
    case '大':
      return {
        width: '128px',
        height: '132px',
        borderRadius: '10px',
        marginTop: '24px',
      };
    default:
      return {
        width: '114px',
        height: '114px',
        borderRadius: '10px',
        marginTop: '34px',
      };
  }
};
</script>

<style scoped lang="scss"></style>
