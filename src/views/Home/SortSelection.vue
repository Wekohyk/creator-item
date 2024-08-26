<template>
  <transition
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      class="absolute top-24 left-50% -translate-x-50% px-4 shadow-[0px_4px_16px_0px_#00000014] z-999 bg-#fff rounded-6 transition-opacity duration-200 ease-in"
      v-if="visible"
    >
      <div
        class="w-76 h-37 lh-37 text-center b-b-0.5 b-b-solid b-b-#F2F2F7"
        v-for="(item, index) in sortValue"
        :key="index"
        @click="selectSort(item.id)"
        :style="selectedSortId === index ? 'color: #0A7AFF' : ''"
      >
        {{ item.name }}
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { SortValueList } from '@/types/home';
interface Props {
  visible: boolean;
  sortValue?: SortValueList[];
}

const props = withDefaults(defineProps<Props>(), {
  visible: false,
  sortValue: () => [{ name: '综合排序', id: 0 }],
});

const emit = defineEmits(['selectSortName']);

const selectedSortId = ref(0);
const selectSort = (id: number) => {
  selectedSortId.value = id;
  emit('selectSortName', props.sortValue[id].name);
};
</script>

<style scoped lang="scss"></style>
