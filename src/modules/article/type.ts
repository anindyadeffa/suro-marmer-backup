import { TMetaResponseSingle } from '@/types';

export interface TArticleItem {
  id: number;
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
  views: number;
  likes: number;
  is_liked: boolean;
  created_at: string;
  updated_at: string;
}

export type TMetaResponseArticles<T> = {
  data: {
    articles: Array<T>;
  };
  meta: TArticleMeta;
};

export interface TArticleMeta {
  item_count: number;
  per_page: number;
  current_page: number;
  page_count: number;
  page_counter: number;
  has_prev: boolean;
  has_next: boolean;
  prev: boolean;
  next: boolean;
}

export type TArticleData = {
  article: TArticleItem;
  relateds: TArticleItem[];
};

export type TAllArticleResponse = TMetaResponseArticles<TArticleItem>;
export type TSingleArticleResponse = TMetaResponseSingle<TArticleData>;
