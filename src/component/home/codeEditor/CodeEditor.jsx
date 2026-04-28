"use client";

import { useState } from "react";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { shadesOfPurple } from "react-syntax-highlighter/dist/esm/styles/hljs";

import copyIcon from "@/../public/copy_icon.svg";
import copiedIcon from "@/../public/copied_icon.svg";

import "./CodeEditor.css";

const CodeEditor = () => {
  const [copied, setCopied] = useState(false);

  const codeString = `import { FC } from "react";

type WelcomeProps = {
  uses:
    | "explore new tech"
    | "display my skills"
    | "find freelancing opportunities"
    | "find a fulltime job";
};

const Welcome: FC<WelcomeProps> = ({ uses }) => {
  return (
    <>
      <h1>This is my little slice of the internet.</h1>
      <p>
        I use this site to <em>{uses}</em>.
      </p>
    </>
  );
};

export default Welcome;
`;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <figure className="relative flex w-full flex-col overflow-hidden rounded-md border border-gray-200/40 bg-[#0f172a] p-2.5 shadow-2xl dark:border-gray-600/40 h-115">
      {/* Header */}
      <header className="mb-2 grid items-center border-b border-gray-800 pb-2 grid-cols-[50px_1fr_50px]">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-gray-700 hover:bg-[#EC6A5F]" />
          <span className="h-3 w-3 rounded-full bg-gray-700 hover:bg-[#F4BF50]" />
          <span className="h-3 w-3 rounded-full bg-gray-700 hover:bg-[#61C454]" />
        </div>

        <div className="text-center text-[13px] tracking-wide text-gray-500 select-none">
          /index.tsx
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleCopyCode}
            className="transition hover:opacity-80"
          >
            <Image
              src={copied ? copiedIcon : copyIcon}
              alt="copy icon"
              className="cursor-pointer"
              width={20}
              height={20}
            />
          </button>
        </div>
      </header>

      {/* Code */}
      <main className="relative h-full overflow-hidden">
        <div className="h-full overflow-auto">
          <SyntaxHighlighter
            language="typescript"
            style={shadesOfPurple}
            wrapLongLines={true}
            customStyle={{
              background: "#0f172a",
              margin: 0,
              padding: "1rem",
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </main>
    </figure>
  );
};

export default CodeEditor;
