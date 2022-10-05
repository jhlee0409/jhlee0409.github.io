import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import darcula from "react-syntax-highlighter/dist/cjs/styles/prism/darcula";
const Code = ({ node, inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      // eslint-disable-next-line react/no-children-prop
      children={String(children).replace(/\n$/, "")}
      language={match[1]}
      PreTag="pre"
      style={darcula}
      {...props}
      showLineNumbers={true}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};
export default Code;
