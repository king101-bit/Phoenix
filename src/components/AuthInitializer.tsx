// components/AuthInitializer.tsx
'use client';
import { useEffect } from 'react';
import useUserStore from '@/stores/UserStore';

export function AuthInitializer({ children }: { children: React.ReactNode }) {
  const initialize = useUserStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return <>{children}</>;
}
