import "../styles/globals.css.ts";
import "../styles/reset.css.ts";
import { themeClass } from "../styles/theme.css.ts";
import Layout from "../src/components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} className={themeClass} />
    </Layout>
  );
};

export default MyApp;
