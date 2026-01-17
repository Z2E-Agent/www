"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function TerminalDemo() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const script = [
    { text: "z2e_terminal auto", type: "command", prompt: "leon@arch:~$ " },
    { text: "[Z2E Agent] Have you ever thought about automating your bug bounty hunting?", type: "info"},
    { text: "Hey Z2E Solve this web challenges, ctf2025.hitcon.org", type: "command", prompt: "> " },
    { text: "[*] Analyzing target: hitcon.org [Web Exploitation]", type: "info", delay: 800 },
    { text: "[*] Scanning for vulnerabilities...", type: "info", delay: 400 },
    { text: "[+] Found potential PHP LFI in /login parameter.", type: "success", delay: 600 },
    { text: "[+] Attempting RCE via PHP wrappers (allow_url_include)...", type: "info", delay: 400 },
    { text: "[+] Payload: /login?+allow_url_include%3d1+-d+auto_prepend_file%3dphp://input", type: "success", delay: 800 },
    { text: "id", type: "command", prompt: "# " },
    { text: "uid=0(root) gid=0(root) groups=0(root)", type: "output", delay: 200 },
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const processScript = () => {
      if (currentLineIndex >= script.length) return;

      const currentItem = script[currentLineIndex];

      if (currentItem.type === "command") {
        if (charIndex < currentItem.text.length) {
          timeout = setTimeout(() => {
            setLines((prev) => {
              const newLines = [...prev];
              if (newLines[currentLineIndex] === undefined) {
                newLines[currentLineIndex] = currentItem.prompt || "";
              }
              newLines[currentLineIndex] = (currentItem.prompt || "") + currentItem.text.substring(0, charIndex + 1);
              return newLines;
            });
            setCharIndex((prev) => prev + 1);
          }, 50 + Math.random() * 50);
        } else {
          timeout = setTimeout(() => {
            setCurrentLineIndex((prev) => prev + 1);
            setCharIndex(0);
          }, 600);
        }
      } else {
        timeout = setTimeout(() => {
          setLines((prev) => {
            const newLines = [...prev];
            newLines[currentLineIndex] = currentItem.text;
            return newLines;
          });
          setCurrentLineIndex((prev) => prev + 1);
        }, currentItem.delay || 100);
      }
    };

    processScript();

    return () => clearTimeout(timeout);
  }, [currentLineIndex, charIndex]);

  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden bg-[#1e1e1e] shadow-2xl border border-[#333] font-mono text-sm md:text-base text-left">
      <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-[#333]">
        <div className="flex gap-2">
        </div>
        <div className="flex-1 text-center text-gray-400 text-xs uppercase tracking-widest">leon — Kitty</div>
      </div>

      <div className="p-4 min-h-[360px] text-gray-300 font-medium leading-relaxed">
        {lines.map((line, i) => {
          const item = script[i];
          const isCommand = item?.type === "command";
          
          let promptColor = "text-green-400";
          if (item?.prompt === "> ") promptColor = "text-blue-400";
          if (item?.prompt === "# ") promptColor = "text-red-500";
          
          return (
            <div key={i} className="break-words">
              {isCommand ? (
                <span>
                  <span className={`${promptColor} font-bold`}>
                    {item.prompt}
                  </span>
                  <span className="text-white">{line.replace(item.prompt || "", "")}</span>
                </span>
              ) : (
                <span className={
                  item?.type === "success" ? "text-green-400" :
                  item?.type === "info" ? "text-blue-300" : 
                  "text-gray-300"
                }>
                  {line}
                </span>
              )}
            </div>
          );
        })}
        {currentLineIndex < script.length && script[currentLineIndex].type === "command" && (
          <span className="inline-block w-2.5 h-5 bg-gray-500 animate-pulse align-middle ml-1" />
        )}
      </div>
    </div>
  );
}
