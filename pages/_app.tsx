import React, { useEffect } from "react";
import "@/styles/globals.css";
import "@/styles/reset.css";
import Layout from "@/components/Layout";
import { NextPage } from "next";
import { getPostCategory } from "@/helper/getPosts";
import LoadingPage from "@/components/Layout/Loading";
import { useRouter } from "next/router";

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
        <Component {...pageProps} />
      </LoadingPage>
    </Layout>
  );
};

export default MyApp;
