import { api } from '@/lib/api';

import { TLoginPayload, TLoginResponse } from '@/modules/signIn/type';

export const loginRequest = async (
  payload?: TLoginPayload
): Promise<TLoginResponse> => {
  const { data } = await api.post<TLoginResponse>('auth/login', payload);

  return data;
};
