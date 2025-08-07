'use client';

import { NextPage } from 'next';
import { getServerSession } from 'next-auth';
import { useEffect } from 'react';

import { authOptions } from '@/app/api/auth/[...nextauth]/option';
import LoginModules from '@/modules/signIn';
import { useRouter } from 'next/navigation';

const SignInPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getServerSession(authOptions);

      if (session) {
        router.replace('/admin');
      }
    };

    checkSession();
  }, []);

  return <LoginModules />;
};

export default SignInPage;
