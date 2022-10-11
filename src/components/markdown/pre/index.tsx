import { useRef, useState } from "react";
import styles from "./Pre.module.scss";
const Pre = ({ children }: any) => {
  const textInput = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const onEnter = () => {
    setHovered(true);
  };
  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };

  const onCopy = () => {
    if (!textInput.current) return;
    setCopied(true);
    const splitArr = textInput?.current?.textContent.split(`\n`);
    const removeLineNumberCode = splitArr.map((item: string) => {
      return item.substring(1, item.length - 1);
    });
    navigator.clipboard.writeText(removeLineNumberCode.join("\n"));
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      ref={textInput}
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
      style={{ position: "relative" }}>
      {hovered && (
        <button type="button" className={styles.copyButton} onClick={onCopy}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className={copied ? "text-green-400" : "text-gray-300"}>
            {copied ? (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </>
            ) : (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </>
            )}
          </svg>
        </button>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Pre;
