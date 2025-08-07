'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import React, { Suspense } from 'react';

import { Loading } from '@/components/Loading';
import { Toaster } from '@/components/ui/toaster';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Suspense fallback={<Loading />}>
          {children}
          <Toaster />
        </Suspense>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default Provider;
