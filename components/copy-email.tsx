"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard not available; silently no-op
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy email address"
      className="group inline-flex items-center gap-2 rounded-md border border-transparent px-2 py-1 font-mono text-[12px] text-fg-muted transition-colors hover:border-border hover:text-fg"
    >
      {copied ? (
        <>
          <Check size={13} className="text-signal-green" />
          <span className="text-signal-green">copied</span>
        </>
      ) : (
        <>
          <Copy size={13} />
          <span>copy</span>
        </>
      )}
    </button>
  );
}
