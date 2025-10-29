import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PagesProgressBar } from "next-nprogress-bar";
import type { AppProps } from "next/app";
import { useState } from "react";
import { ErrorMessages } from "../interfaces";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 2 * 60 * 1000, // 2 minutes
            refetchInterval: 2 * 60 * 1000, // 2 minutes
            refetchOnWindowFocus: false, // Disables automatic refetching when browser window is focused.
            retry: (failureCount, error) => {
              let errorResponse = error as unknown as ErrorMessages;
              // Don't retry for certain error responses
              if (errorResponse?.statusCode === 401) {
                return false;
              }
              // Retry others just once
              return failureCount <= 1;
            },
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
