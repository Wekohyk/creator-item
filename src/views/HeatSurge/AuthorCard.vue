<template>
  <div class="flex flex-col justify-center items-center relative top-0 left-0">
    <img
      :src="
        top === 1
          ? '/heatSurge/oneHot.webp'
          : top === 2
            ? '/heatSurge/twoHot.webp'
            : '/heatSurge/threeHot.webp'
      "
      class="absolute"
      :class="top === 1 ? 'w-120 h-60' : 'w-82 h-45'"
    />
    <div class="flex justify-center items-center flex-col gap-4">
      <div
        class="py-4 bg-#fff text-#ECA800 font-600 rounded-6"
        :class="top === 1 ? 'text-15 px-8' : 'text-13 px-6'"
      >
        {{ 'TOP.' + top }}
      </div>
      <img
        :src="avatarImg"
        alt=""
        class="rounded-50% mt-2"
        :class="top === 1 ? 'w-56 h-56' : 'w-40 h-40'"
      />
      <div
        class="font-500 text-#0F0F0F"
        :class="top === 1 ? 'text-15' : 'text-13'"
      >
        {{ name }}
      </div>
      <div class="flex items-center justify-center">
        <Icon
          v-show="isUpDown === 'up'"
          icon="eva:arrow-up-fill"
          width="13px"
          height="13px"
          color="#FF9500"
        />
        <Icon
          v-show="isUpDown === 'down'"
          icon="eva:arrow-down-fill"
          width="13px"
          height="13px"
          color="#FF9500"
        />
        <span class="text-#FF9500 text-11 font-500">{{ hot }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

export interface Props {
  top: number;
  avatarImg: string;
  name: string;
  hot: number;
  isUpDown: 'up' | 'down';
}

withDefaults(defineProps<Props>(), {});
</script>

<style scoped lang="scss"></style>
