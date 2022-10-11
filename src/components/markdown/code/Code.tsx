import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import darcula from "react-syntax-highlighter/dist/cjs/styles/prism/darcula";
import styles from "@/components/markdown/pre/Pre.module.scss";
const Code = ({ node, inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || "");
  console.log(match && match[1]);
  return !inline && match ? (
    <div className={styles.codeBox}>
      <div>
        <div className={styles.circleBox}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span>{match[1]}</span>
      </div>
      <SyntaxHighlighter
        // eslint-disable-next-line react/no-children-prop
        children={String(children).replace(/\n$/, "")}
        language={match[1]}
        PreTag="pre"
        style={darcula}
        {...props}
        showLineNumbers={true}
      />
    </div>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};
export default Code;
