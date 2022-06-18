import React from "react";
import "@/styles/globals.css";
import "@/styles/reset.css";
// import "@/styles/index.css";
import { themeClass } from "@/styles/theme.css";
import Layout from "@/components/Layout";
import { NextPage } from "next";

const MyApp: NextPage = ({ Component, pageProps }: any) => {
  return (
    <Layout categories={pageProps.categories || []}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
