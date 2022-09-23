import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import "@/styles/reset.css";
import Layout from "@/components/layouts";
import { NextPage } from "next";
import { getPostCategory } from "@/helper/getPosts";
import LoadingPage from "@/components/layouts/Loading";
import { useRouter } from "next/router";
import Script from "next/script";
import { storeWrapper } from "@/app/store";

export const getServerSideProps = () => {
  const categories = getPostCategory();
  return {
    props: {
      categories,
    },
  };
};

const MyApp: NextPage = ({ Component, pageProps }: any) => {
  const router = useRouter();

  const handleRouteChange = (url: string) => {
    if (typeof window === "undefined") return;
    window.gtag("config", "G-GSXS4W26FH", {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout categories={pageProps.categories || []}>
      <LoadingPage>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GSXS4W26FH"
        />
        <Script
          id="g-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GSXS4W26FH', { page_path: window.location.pathname });
            `,
          }}
        />
        <Component {...pageProps} />
      </LoadingPage>
    </Layout>
  );
};

export default storeWrapper.withRedux(MyApp);
