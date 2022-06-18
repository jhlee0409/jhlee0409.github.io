import Head from "next/head";

export default function PostLayout({ title, children }: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
}
