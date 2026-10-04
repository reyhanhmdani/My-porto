import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Copies text to clipboard and exposes an honest status ("idle" | "copied" | "error").
 * Status auto-resets after `resetMs`.
 */
export function useCopyToClipboard(resetMs = 2500) {
  const [status, setStatus] = useState("idle");
  const timerRef = useRef(null);

  // Prevent setState on an unmounted component when the reset timer fires late.
  useEffect(() => () => clearTimeout(timerRef.current), []);

  const copy = useCallback(
    async (text) => {
      clearTimeout(timerRef.current);
      try {
        // Clipboard API only exists in secure contexts (HTTPS/localhost); fail loudly instead of faking success.
        if (!navigator.clipboard?.writeText) {
          throw new Error("Clipboard API unavailable");
        }
        await navigator.clipboard.writeText(text);
        setStatus("copied");
      } catch {
        setStatus("error");
      }
      timerRef.current = setTimeout(() => setStatus("idle"), resetMs);
    },
    [resetMs]
  );

  return { status, copy };
}
