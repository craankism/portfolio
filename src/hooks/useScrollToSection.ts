import { useEffect } from "react";
import type { RefObject } from "react";

/**
 * Scrolls to the ref matching `selected` once refs/layout have settled, then
 * clears the selection so revisiting the page later doesn't re-trigger it.
 */
export function useScrollToSection(
  selected: string | null,
  clearSelected: () => void,
  refs: Record<string, RefObject<HTMLDivElement | null>>,
  delay: number,
): void {
  useEffect(() => {
    if (!selected) return;

    const timeoutId = setTimeout(() => {
      refs[selected]?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      clearSelected();
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [selected, clearSelected, refs, delay]);
}
