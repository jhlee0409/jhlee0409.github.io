import Head from "next/head";

export default function PostLayout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
}
