import React from "react";
import "@/styles/globals.css";
import "@/styles/reset.css";
import Layout from "@/components/Layout";
import { NextPage } from "next";
import { getPostCategory } from "@/helper/getPosts";
import LoadingPage from "@/components/Layout/Loading";

export const getServerSideProps = () => {
  const categories = getPostCategory();
  return {
    props: {
      categories,
    },
  };
};

const MyApp: NextPage = ({ Component, pageProps }: any) => {
  return (
    <Layout categories={pageProps.categories || []}>
      <LoadingPage>
        <Component {...pageProps} />
      </LoadingPage>
    </Layout>
  );
};

export default MyApp;
