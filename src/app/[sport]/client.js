'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { ThemeProvider } from "@material-tailwind/react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.sessionStorage,
});


/* react query ??
export function generateStaticParams() {
  return [{ slug: [''] }]
}
*/

const Sport = dynamic(() => import('./Sport'), { ssr: false })
 
export function ClientOnly({params}) {
    return (<ThemeProvider>
        <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}>
            <Sport params={params}/>
            <ReactQueryDevtools initialIsOpen />
        </PersistQueryClientProvider>
    </ThemeProvider>);
}