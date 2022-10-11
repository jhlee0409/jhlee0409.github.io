import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import loadingSVG from "@/assets/loading.svg";
import Image from "next/image";
import styles from "./layout.module.scss";
const LoadingPage = ({ children }: any) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => setLoading(true);
    const handleComplete = (url: string) => setLoading(false);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <>
      {loading ? (
        <div className={styles.loadingLogoBox}>
          <div>
            <Image src={loadingSVG} alt="is loading ..." />
          </div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default LoadingPage;
