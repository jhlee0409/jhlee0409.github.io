import defaultImage from "@/assets/default-image.png";
import Head from "next/head";

interface HeadMetaType {
  title: string;
  description?: string;
  url?: string;
  image?: string;
}

const HeadMeta = ({ title, description, url, image }: HeadMetaType) => {
  return (
    <Head>
      <title>{`JACK : ${title}` || "JACK"}</title>
      <meta name="description" content={description || "Jack's World"} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={`JACK : ${title}` || "JACK"} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={
          `https://jhlee0409.github.io${url}` || "https://jhlee0409.github.io"
        }
      />
      <meta
        property="og:image"
        content={image || "/assets/default-image.png"}
      />
      <meta property="og:article:author" content="Jack" />
    </Head>
  );
};

export default HeadMeta;
