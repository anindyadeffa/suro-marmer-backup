import { api } from '@/lib/api';

import {
  TServicesResponse,
  TServicesSlugResponse,
} from '@/modules/layanan/type';

export const allServiceGetRequest = async (): Promise<TServicesResponse> => {
  const { data } = await api.get(`galleries`);

  return data;
};

export const servicesGetBySlugRequest = async (
  slug: string
): Promise<TServicesSlugResponse> => {
  const { data } = await api.get(`galleries/type/${slug}`);

  return data;
};
