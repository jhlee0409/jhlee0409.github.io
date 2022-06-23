import Head from "next/head";

export default function ArticleLayout({ title, children }: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>{children}</div>
    </>
  );
}
