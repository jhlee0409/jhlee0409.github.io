import "../src/styles/globals.css.ts";
import "../src/styles/reset.css.ts";
import "../src/styles/styles.css";
import { themeClass } from "../src/styles/theme.css.ts";
import Layout from "../src/components/Layout";
import { MDXProvider } from "@mdx-js/react";
const mdComponents = {
  h1: (props) => <h1 style={{ color: "tomato" }} {...props} />,
};
const MyApp = ({ Component, pageProps }) => {
  return (
    <MDXProvider components={mdComponents}>
      <Layout categories={pageProps.categories || []}>
        <Component {...pageProps} className={themeClass} />
      </Layout>
    </MDXProvider>
  );
};

export default MyApp;
