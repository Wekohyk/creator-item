<template>
  <div
    class="flex flex-col items-center gap-4 w-114 h-136 pt-26 rounded-8 relative shadow-[0px_4px_16px_0px_#00000014]"
  >
    <img :src="avatar" alt="" class="w-52 h-52 rounded-50%" />
    <div class="text-13 font-500">{{ name }}</div>
    <div
      class="flex items-center px-8 py-4 rounded-6 bg-#ECA800/8% text-#ECA800"
    >
      <Icon
        v-show="isUpDown === 'up'"
        icon="eva:arrow-up-fill"
        width="13px"
        height="13px"
      />
      <Icon
        v-show="isUpDown === 'down'"
        icon="eva:arrow-down-fill"
        width="13px"
        height="13px"
      />
      <span class="text-11 font-500">{{ hot }}</span>
    </div>

    <div
      class="text-center lh-20 absolute top-8 left-8 w-20 h-20 font-600 text-14 rounded-4"
      :style="settingRankColor(rank)"
    >
      {{ rank }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

interface Props {
  avatar?: string;
  name?: string;
  hot?: number;
  rank?: string;
  isUpDown?: 'up' | 'down';
}

withDefaults(defineProps<Props>(), {
  rank: '2',
});

const settingRankColor = (rank: string) => {
  switch (rank) {
    case '1':
      return { color: '#FF9500', backgroundColor: '#ECA8001A' };
    case '2':
      return { color: '#899FAF', backgroundColor: '#899FAF1A' };
    case '3':
      return { color: '#DAAA81', backgroundColor: '#DAAA811A' };
    default:
      return { color: '#899FAF', backgroundColor: '#899FAF1A' };
  }
};
</script>

<style scoped lang="scss"></style>
