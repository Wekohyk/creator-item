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
      >
        {{ item }}
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
interface Props {
  visible: boolean;
  sortValue?: string[];
}

withDefaults(defineProps<Props>(), {
  visible: false,
  sortValue: () => ['综合排序', '最新发布', '最多使用'],
});
</script>

<style scoped lang="scss"></style>
