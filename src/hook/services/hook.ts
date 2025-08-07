import { useQuery, UseQueryResult } from '@tanstack/react-query';

import {
  allServiceGetRequest,
  servicesGetBySlugRequest,
} from '@/hook/services/request';
import {
  TServicesResponse,
  TServicesSlugResponse,
} from '@/modules/layanan/type';

export const useGetAllServices = (): UseQueryResult<
  TServicesResponse,
  undefined
> =>
  useQuery({
    queryKey: ['services-get'],
    queryFn: async () => await allServiceGetRequest(),
  });

export const useGetServicBySlug = (
  slug: string
): UseQueryResult<TServicesSlugResponse, undefined> =>
  useQuery({
    queryKey: ['services-get-slug', slug],
    queryFn: async () => await servicesGetBySlugRequest(slug),
  });
