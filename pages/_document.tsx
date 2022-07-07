import Document, { Html, Head, Main, NextScript } from "next/document";
import { bodyLayout } from "@/components/Layout/layout.css";
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="http://fonts.cdnfonts.com/css/tipo-press"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown-dark.min.css"
            rel="stylesheet"
          ></link>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-GSXS4W26FH"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GSXS4W26FH', { page_path: window.location.pathname });
            `,
            }}
          />
        </Head>
        <body className={bodyLayout}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
