import Document, { Html, Head, Main, NextScript } from "next/document";
import { bodyLayout } from "@/components/layouts/layout.css";
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.cdnfonts.com/css/tipo-press"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Lora:wght@600&family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown-dark.min.css"
            rel="stylesheet"></link>
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.2/katex.min.js"
            integrity="sha512-CLi3JK94v6TUcogbWv4WT4xnfp6B8AET4PuBjGxXo5MZJ9xfNgMHgXaXH8QJe6JwN+kGxqR4//z8/2BYVnxRVw=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"></script>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6927905151492991"
            crossOrigin="anonymous"></script>
        </Head>
        <body className={bodyLayout}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
