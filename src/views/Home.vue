<template>
  <PageLayout hideBack enable-back-to-top hide-navigation-bar>
    <!-- 横线上方内容 -->
    <div class="px-12 text-#0F0F0F">
      <!-- 搜索功能 -->
      <div
        class="flex items-center justify-start gap-4 bg-#F2F2F7 rounded-8 w-full py-6 px-12"
      >
        <img src="/home/search.webp" alt="" class="w-20 h-20" />
        <input
          type="search"
          placeholder="搜索创作者"
          class="text-#8A8A8A text-15 bg-#F2F2F7 w-full"
        />
      </div>

      <!-- 周热度飙升版 -->
      <div class="mt-24">
        <div class="flex justify-between">
          <div class="font-600 text-17">周热度飙升榜</div>
          <div class="flex items-center gap-4 text-#0A7AFF text-14">
            <span>查看全部</span>
            <Icon icon="weui:arrow-outlined" class="text-16" />
          </div>
        </div>

        <!-- 排名 -->
        <div>1231231</div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue';
import { Icon } from '@iconify/vue';
</script>

<style scoped lang="scss"></style>
