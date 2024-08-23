import { ref } from 'vue';
import { WeekList, WidgetCardList } from '@/types/home';

export const weekList = ref<WeekList[]>([
  {
    name: '白开水',
    avatar: '/avatar.webp',
    hot: 122,
    rank: '1',
    isUpDown: 'up',
  },
  {
    name: '亚比囧囧囧',
    avatar: '/avatar.webp',
    hot: 799,
    rank: '2',
    isUpDown: 'down',
  },
  {
    name: '黑关土',
    avatar: '/avatar.webp',
    hot: 588,
    rank: '3',
    isUpDown: 'down',
  },
  {
    name: '白开水',
    avatar: '/avatar.webp',
    hot: 122,
    rank: '4',
    isUpDown: 'up',
  },
  {
    name: '亚比囧囧囧',
    avatar: '/avatar.webp',
    hot: 799,
    rank: '5',
    isUpDown: 'down',
  },
  {
    name: '黑关土',
    avatar: '/avatar.webp',
    hot: 588,
    rank: '6',
    isUpDown: 'up',
  },
]);

export const widgetCardList = ref<WidgetCardList[]>([
  {
    authorName: '狗电筒',
    authorImg: '/avatar.webp',
    leave: ['小', '中', '大'],
    img: '/avatar.webp',
    widgetName: 'CCD相机',
    usePeople: '4.8万人使用',
  },
  {
    authorName: '狗电筒',
    authorImg: '/avatar.webp',
    leave: ['中', '大'],
    img: '/avatar.webp',
    widgetName: 'CCD相机',
    usePeople: '4.8万人使用',
  },
  {
    authorName: '狗电筒',
    authorImg: '/avatar.webp',
    leave: ['大'],
    img: '/avatar.webp',
    widgetName: 'CCD相机',
    usePeople: '4.8万人使用',
  },
  {
    authorName: '狗电筒',
    authorImg: '/avatar.webp',
    leave: ['小', '中', '大'],
    img: '/avatar.webp',
    widgetName: 'CCD相机',
    usePeople: '4.8万人使用',
  },
  {
    authorName: '狗电筒',
    authorImg: '/avatar.webp',
    leave: ['中'],
    img: '/avatar.webp',
    widgetName: 'CCD相机',
    usePeople: '4.8万人使用',
  },
  {
    authorName: '狗电筒',
    authorImg: '/avatar.webp',
    leave: ['小'],
    img: '/avatar.webp',
    widgetName: 'CCD相机',
    usePeople: '4.8万人使用',
  },
  {
    authorName: '狗电筒',
    authorImg: '/avatar.webp',
    leave: ['小', '大'],
    img: '/avatar.webp',
    widgetName: 'CCD相机',
    usePeople: '4.8万人使用',
  },
  {
    authorName: '狗电筒',
    authorImg: '/avatar.webp',
    leave: ['小', '中', '大'],
    img: '/avatar.webp',
    widgetName: 'CCD相机',
    usePeople: '4.8万人使用',
  },
]);

export const sortValueList = ['综合排序', '最新发布', '最多使用'];
