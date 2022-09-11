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

  return (
    <Head>
      <title>{`${name} ${title ? `: ${title}` : ""}`}</title>
      <meta
        name="description"
        content={
          "르잭 " + (description || Object.values(route.query).join(", "))
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        property="og:title"
        content={`${name} ${title ? `: ${title}` : ""}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jhlee0409.github.io" />
      <meta
        property="og:image"
        content={image || "/assets/default-image.png"}
      />
      <meta property="og:article:author" content="Jack" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  );
};

export default HeadMeta;
