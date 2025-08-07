import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { loginRequest } from '@/hook/auth/request';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/login',
  },
  session: {
    maxAge: 2 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      id: 'login',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const data = await loginRequest({
            email: credentials?.email,
            password: credentials?.password,
          });

          return {
            id: data.data.user.id,
            role: data.data.user.role,
            token: data.data.token,
            name: data.data.user.full_name,
            email: data.data.user.email,
          };
        } catch (error: any) {
          if (error.response?.status === 422) {
            throw new Error(error.response.data.message);
          }

          throw new Error(
            typeof error.response.data === 'string'
              ? error.response.data
              : error.response.data?.message
          );
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user) return true;

      return false;
    },

    async jwt({ token, user, account }) {
      if (account?.provider === 'login' && user) {
        token.access_token = user.token;
        token.id = user.id;
        token.role = user.role;
        token.name = user.name;
        token.email = user.email;
      }

      return token;
    },

    async session({ session, token }) {
      session.expires = token?.expires as string;
      session.user = {
        ...session.user,
        id: token?.id as string,
        token: token?.access_token as string,
        role: token?.role as string,
        name: token?.name as string,
        email: token?.email as string,
      };

      return session;
    },
  },
};
