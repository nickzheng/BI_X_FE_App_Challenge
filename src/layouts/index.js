import React from 'react';
import { ServerInfoProvider } from '@/hooks/context';

export default function Layout({ children }) {
  return (
    <div>
      <ServerInfoProvider>{children}</ServerInfoProvider>
    </div>
  );
}
