import { api } from '@/lib/api';

import {
  TAllArticleResponse,
  TArticleItem,
  TSingleArticleResponse,
} from '@/modules/article/type';

export const articlesGetRequest = async ({
  pageParam,
  search = '',
}: {
  pageParam: number;
  search: string;
}): Promise<TAllArticleResponse> => {
  const { data } = await api.get(
    `articles?page=${pageParam}&limit=9&search=${search}`
  );

  return data;
};

export const articleGetBySlugRequest = async (
  slug: string
): Promise<TSingleArticleResponse> => {
  const { data } = await api.get(`articles/slug/${slug}`);

  return data;
};

export const likeArticleRequest = async (
  id: string | string[]
): Promise<TArticleItem> => {
  const { data } = await api.post(`articles/${id}/like`);

  return data;
};

export const deleteArticleRequest = async (
  id: string | string[]
): Promise<TSingleArticleResponse> => {
  const { data } = await api.delete(`articles/${id}`);

  return data;
};
