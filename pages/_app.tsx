import React from "react";
import "@/styles/globals.css";
import "@/styles/reset.css";
import { themeClass } from "@/styles/theme.css";
import Layout from "@/components/Layout";
import { NextPage } from "next";
import { getPostCategory } from "@/helper/getPosts";

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
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
