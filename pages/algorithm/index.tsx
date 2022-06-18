import Link from "next/link";
import { useRouter } from "next/router";
import {
  wrapper,
  card,
  cardImage,
  cardTextBox,
  dateBox,
  articlesBox,
} from "./index.css";

const Tech = () => {
  const router = useRouter();
  return (
    <div className={wrapper}>
      <div className={articlesBox}>
        {Array.from({ length: 5 }, (v) => v).map((item, i) => {
          // if (i === 0) return <div>뭐에 대한 설명을 넣을까 고민중</div>;
          return (
            <Link passHref href={`${router.route}/${i}`} key={i}>
              <div className={card}>
                <div className={dateBox}>20 January 2022</div>
                <div className={cardTextBox}>
                  이것은 제목이라고 말할 수 있는 부분이지 그렇지 암암
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;
