export type TLoginResponse = {
  code: number;
  success: boolean;
  message: string;
  data: {
    token: string;
    user: TLoginUser;
  };
};

export type TLoginUser = {
  id: string;
  username: string;
  email: string;
  full_name: string;
  role: string;
  created_at: string;
  updated_at: string;
};

export type TLoginPayload = {
  email?: string;
  password?: string;
};
