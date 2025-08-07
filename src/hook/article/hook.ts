import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

import {
  articleGetBySlugRequest,
  articlesGetRequest,
  deleteArticleRequest,
  likeArticleRequest,
} from '@/hook/article/request';
import {
  TAllArticleResponse,
  TArticleItem,
  TSingleArticleResponse,
} from '@/modules/article/type';

import { TMetaErrorResponse } from '@/types';

export const useGetArticles = (
  pageParam: number,
  search: string
): UseQueryResult<TAllArticleResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['article-get', pageParam, search],
    queryFn: async () => await articlesGetRequest({ pageParam, search }),
  });

export const useGetArticleBySlug = (
  slug: string
): UseQueryResult<TSingleArticleResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['article-detailed', slug],
    queryFn: async () => await articleGetBySlugRequest(slug),
  });

export const useLikeArticle = (
  id: string | string[]
): UseMutationResult<TArticleItem, TMetaErrorResponse, string, unknown> => {
  return useMutation({
    mutationKey: ['like-article', id],
    mutationFn: async () => await likeArticleRequest(id),
  });
};

export const useDeleteArticle = (
  id: string | string[]
): UseMutationResult<
  TSingleArticleResponse,
  TMetaErrorResponse,
  string,
  unknown
> => {
  return useMutation({
    mutationKey: ['delete-article', id],
    mutationFn: async () => await deleteArticleRequest(id),
  });
};
