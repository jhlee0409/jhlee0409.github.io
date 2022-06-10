import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* // 모든페이지에 아래 메타테크가 head에 들어감 // 루트파일이기에 가능한
          적은 코드만 넣어야함 전역 파일을 엉망으로 만들면 안된다 // 웹 타이틀,
          ga 같은것 넣음 */}
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
