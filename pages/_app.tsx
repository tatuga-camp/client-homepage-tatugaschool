import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PagesProgressBar } from "next-nprogress-bar";
import App, { AppContext, AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ErrorMessages } from "../interfaces";
import { detectLanguage, type Lang } from "../lib/seo/detectLanguage";
import { detectInitialLanguage } from "../react-query/language";

type MyAppProps = AppProps & { ssrLang: Lang };

export default function MyApp({ Component, pageProps, ssrLang }: MyAppProps) {
  const [queryClient] = useState(() => {
    const qc = new QueryClient({
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
    });
    qc.setQueryData(["language"], ssrLang);
    return qc;
  });

  // The page was rendered with the server's language: the `lang` cookie, or a
  // default for statically built pages. Once in the browser, switch to the
  // visitor's stored choice if it differs (and migrate an old localStorage
  // choice into the cookie, so the next load renders it server-side).
  useEffect(() => {
    const language = detectInitialLanguage();
    if (queryClient.getQueryData(["language"]) !== language) {
      queryClient.setQueryData(["language"], language);
    }
  }, [queryClient]);

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

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const ctx = appContext.ctx;
  let ssrLang: Lang = "en";
  if (typeof window === "undefined" && ctx.req && ctx.res) {
    const cookieHeader = ctx.req.headers.cookie ?? "";
    const cookieMatch = cookieHeader.match(/(?:^|;\s*)lang=([^;]+)/);
    ssrLang = detectLanguage({
      cookie: cookieMatch ? decodeURIComponent(cookieMatch[1]) : null,
      acceptLanguage: (ctx.req.headers["accept-language"] as string) ?? null,
      country: (ctx.req.headers["x-country"] as string) ?? null,
    });
    ctx.res.setHeader(
      "Set-Cookie",
      `lang=${ssrLang}; Path=/; Max-Age=31536000; SameSite=Lax`,
    );
  }
  return { ...appProps, ssrLang };
};
