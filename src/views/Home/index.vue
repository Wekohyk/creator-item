<template>
  <PageLayout hideBack enable-back-to-top hide-navigation-bar>
    <!-- 横线上方内容 -->
    <div class="text-#0F0F0F mb-83">
      <!-- 搜索功能 -->
      <div class="px-12">
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
      </div>

      <!-- 周热度飙升版 -->
      <div class="mt-24">
        <div class="flex justify-between px-12">
          <div class="font-600 text-17">周热度飙升榜</div>
          <div
            class="flex items-center gap-4 text-#0A7AFF text-14"
            @click="goHeatSurge"
          >
            <span>查看全部</span>
            <Icon icon="weui:arrow-outlined" class="text-16" />
          </div>
        </div>

        <!-- 排名 -->
        <div class="flex w-full scrollbar-hidden overflow-x-scroll">
          <div class="flex items-center gap-12 py-16 min-w-[calc(100%+1px)]">
            <RankCard
              class="shrink-0 first:ml-12px"
              v-for="(item, index) in weekList"
              :isUpDown="item.isUpDown"
              :avatar="item.avatar"
              :name="item.name"
              :hot="item.hot"
              :rank="item.rank"
              :key="index"
            ></RankCard>
          </div>
        </div>
      </div>

      <!-- 横线 -->
      <div class="w-full h-8 bg-#F2F2F7"></div>

      <div class="flex justify-between px-16 mt-16">
        <div class="font-600 text-17">周热度飙升榜</div>
        <div class="flex items-center text-#5C5C5C text-14" @click="openSort">
          <div class="relative">
            <span>{{ sortName ? sortName : '综合排序' }}</span>
            <SortSelection
              :visible="visible"
              :sortValue="sortValueList"
              @selectSortName="selectSortName"
            ></SortSelection>
          </div>
          <Icon
            icon="eva:arrow-down-fill"
            width="16px"
            height="16px"
            color="#D9D9D9"
          />
        </div>
      </div>

      <div class="px-16 mt-16 flex flex-1">
        <div class="grid w-full gap-x-8 grid gap-y-8 grid-cols-2">
          <WidgetCard
            v-for="(item, index) in widgetCardList"
            :key="index"
            :leave="item.leave"
            @click="shareWidget(item.id)"
          ></WidgetCard>
        </div>
      </div>
    </div>
  </PageLayout>

  <ShareWight
    :visible="shareWidgetValue"
    :id="shareWightItem"
    @offShareWidget="offShare"
  ></ShareWight>
</template>

<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue';
import RankCard from './RankCard.vue';
import WidgetCard from './WidgetCard.vue';
import SortSelection from './SortSelection.vue';
import ShareWight from './ShareWight.vue';
import { Icon } from '@iconify/vue';
import { weekList, widgetCardList, sortValueList } from './data';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const visible = ref(false);

const openSort = () => {
  visible.value = !visible.value;
};

const sortName = ref<string>('');
const selectSortName = (name: string) => {
  sortName.value = name;
};

const router = useRouter();

const goHeatSurge = () => {
  router.push('/heatSurge');
};

const shareWightItem = ref<string>('1');
// 分享组件
const shareWidgetValue = ref(false);
const shareWidget = (item: string) => {
  shareWidgetValue.value = !shareWidgetValue.value;
  shareWightItem.value = item;
};

const offShare = (value: boolean) => {
  shareWidgetValue.value = value;
};
</script>

<style scoped lang="scss"></style>
