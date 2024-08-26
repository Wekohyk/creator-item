export interface WeekList {
  avatar?: string;
  name?: string;
  hot?: number;
  rank?: string;
  isUpDown?: 'up' | 'down';
}

export type Leave = '小' | '中' | '大';

export interface WidgetCardList {
  leave: Leave[];
  img: string;
  widgetName: string;
  authorName: string;
  authorImg: string;
  usePeople: string;
}

export interface SortValueList {
  name: string;
  id: number;
}
