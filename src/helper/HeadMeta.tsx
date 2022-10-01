import defaultImage from "@/assets/default-image.png";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface HeadMetaType {
  title: string;
  description?: string;
  url?: string;
  image?: string;
}
const name = "Le Jack";

const HeadMeta = ({ title = "", description, url, image }: HeadMetaType) => {
  const route = useRouter();

  const _title = `${name}${title ? ` : ${title}` : ""}`;
  const _description = description || Object.values(route.query).join(", ");
  const _image = image || "/assets/default-image.png";
  return (
    <Head>
      <title>{_title}</title>
      <meta charSet="utf-8" />
      <meta name="robots" content="index,nofollow" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="google-site-verification"
        content="iKa8TjmBLZGa1uOHFPoaAQZJ-aO4ftpY7zhcqo9cwkA"
      />
      <meta name="description" content={_description} />
      <meta property="og:title" content="르잭" />
      <meta name="og:description" content={_description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jhlee0409.github.io" />
      <meta property="og:image" content={_image} />
      <meta property="og:article:author" content="Jack" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="르잭" />
      <meta property="twitter:description" content={_description} />
      <meta property="twitter:image" content={_image} />
    </Head>
  );
};

export default HeadMeta;
