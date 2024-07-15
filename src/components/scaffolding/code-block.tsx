import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeBlockProps {
  value: string;
  language: string;
}

const CodeBlock = (props: CodeBlockProps) => {
  return (
    <SyntaxHighlighter language={props.language} style={docco}>
      {props.value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
