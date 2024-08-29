<template>
  <transition
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      class="fixed top-0 left-0 right-0 bottom-0 bg-#000000/50% flex justify-center items-center transition-opacity duration-200 ease-in"
      v-if="visible"
    >
      <!-- 上方 -->
      <div
        class="backgroundImage w-310 h-444 flex flex-col justify-center items-center relative bottom-5% left-0"
      >
        <div
          class="flex flex-col justify-center items-center w-full absolute"
          :class="
            widgetCardList[id].leave[0] === '小'
              ? 'top-49'
              : widgetCardList[id].leave[0] === '中'
                ? 'top-71'
                : 'top-44'
          "
        >
          <img
            :src="
              widgetCardList[id].leave[0] === '小'
                ? '/smallWidget.webp'
                : widgetCardList[id].leave[0] === '中'
                  ? '/mediumWidget.webp'
                  : '/largeWidget.webp'
            "
            alt=""
            class="shadow-[0px_30px_40px_0px_#0000000D] rounded-24"
            :class="
              widgetCardList[id].leave[0] === '小'
                ? 'w-160 h-160'
                : widgetCardList[id].leave[0] === '中'
                  ? 'w-248 h-116'
                  : 'w-177.5 h-186'
            "
          />
          <div class="text-20 font-600 text-#0F0F0F mt-24">
            {{ widgetCardList[id].widgetName }}
          </div>
          <div class="text-12 text-#0A7AFF mt-10">
            {{ widgetCardList[id].usePeople }}
          </div>
        </div>
        <div
          class="b-t-2 b-t-dashed b-t-#E1ECFA w-285 h-1 absolute top-75%"
        ></div>
        <div
          class="bg-#2C3A90/2% w-full h-109 flex items-center justify-between absolute bottom-0 px-22"
        >
          <div class="flex items-center gap-8">
            <img src="/avatar.webp" alt="" class="w-48 h-48 rounded-50%" />
            <div class="flex flex-col">
              <div class="text-16 font-600">
                {{ widgetCardList[id].authorName }}
              </div>
              <div class="text-12 text-#8A8A8A">
                {{ '组件id:' + widgetCardList[id].id }}
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <img src="/twoCode.webp" alt="" class="w-60 h-60" />
            <div class="text-10 text-#8A8A8A">长按识别</div>
          </div>
        </div>
      </div>

      <!-- 下方分享 -->
      <div
        class="fixed bottom-0 left-0 w-full h-146 bg-#fff rounded-t-15"
      ></div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { widgetCardList } from './data';
interface Props {
  visible: boolean;
  id: string;
}

withDefaults(defineProps<Props>(), {});
</script>

<style scoped lang="scss">
.backgroundImage {
  background: url('/home/backgroundWhite.webp');
  background-size: 100%;
}
</style>
