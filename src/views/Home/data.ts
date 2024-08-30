import { ref } from 'vue';
import { WeekList, WidgetCardList } from '@/types/home';
import { SortValueList } from '@/types/home';

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

export type Leave = '小' | '中' | '大';
export const widgetCardList = ref<WidgetCardList[]>([
  {
    id: '0',
    authorName: '狗电筒',
    authorImg: '/avatar.webp',
    leave: ['小', '中', '大'],
    img: '/avatar.webp',
    widgetName: 'CCD相机',
    usePeople: '4.8万人使用',
  },
  {
    id: '1',
    authorName: '狗电筒',
    authorImg: '/avatar.webp',
    leave: ['中', '大'],
    img: '/avatar.webp',
    widgetName: 'CCD相机',
    usePeople: '4.8万人使用',
  },
  {
    id: '2',
    authorName: '狗电筒',
    authorImg: '/avatar.webp',
    leave: ['大'],
    img: '/avatar.webp',
    widgetName: 'CCD相机',
    usePeople: '4.8万人使用',
  },
  {
    id: '3',
    authorName: '狗电筒',
    authorImg: '/avatar.webp',
    leave: ['小', '中', '大'],
    img: '/avatar.webp',
    widgetName: 'CCD相机',
    usePeople: '4.8万人使用',
  },
  {
    id: '4',
    authorName: '狗电筒',
    authorImg: '/avatar.webp',
    leave: ['中'],
    img: '/avatar.webp',
    widgetName: 'CCD相机',
    usePeople: '4.8万人使用',
  },
  {
    id: '5',
    authorName: '狗电筒',
    authorImg: '/avatar.webp',
    leave: ['小'],
    img: '/avatar.webp',
    widgetName: 'CCD相机',
    usePeople: '4.8万人使用',
  },
  {
    id: '6',
    authorName: '狗电筒',
    authorImg: '/avatar.webp',
    leave: ['小', '大'],
    img: '/avatar.webp',
    widgetName: 'CCD相机',
    usePeople: '4.8万人使用',
  },
  {
    id: '7',
    authorName: '狗电筒',
    authorImg: '/avatar.webp',
    leave: ['小', '中', '大'],
    img: '/avatar.webp',
    widgetName: 'CCD相机',
    usePeople: '4.8万人使用',
  },
]);

export const sortValueList: SortValueList[] = [
  { name: '综合排序', id: 0 },
  { name: '最新发布', id: 1 },
  { name: '最多使用', id: 2 },
];

export const ShareAppList = [
  { name: '微信', imgUrl: '/sharePage/Wechat.webp' },
  { name: 'QQ', imgUrl: '/sharePage/QQ.webp' },
  { name: '微博', imgUrl: '/sharePage/WeiBo.webp' },
  { name: '小红书', imgUrl: '/sharePage/XiaoHongShu.webp' },
  { name: '朋友圈', imgUrl: '/sharePage/PengYouQuan.webp' },
  { name: '存入相册', imgUrl: '/sharePage/XiangCe.webp' },
];
