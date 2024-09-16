import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PagesProgressBar } from "next-nprogress-bar";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 60, // 1 hour in ms
            refetchOnMount: false, // Disables automatic refetching when component is mounted.removed
            refetchOnWindowFocus: false, // Disables automatic refetching when browser window is focused.
          },
        },
      })
  );
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <PagesProgressBar
          height="4px"
          color="#6149CD"
          options={{ showSpinner: false }}
          shallowRouting
        />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
