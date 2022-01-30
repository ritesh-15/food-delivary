import { useCallback, useEffect, useState } from "react";

export default function useWindowScroll(height: number): boolean {
  const [isScrolling, setIsScrolling] = useState(false);

  const translateInfoContainer = useCallback(() => {
    if (window.scrollY >= height) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  }, [height]);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      translateInfoContainer();
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return isScrolling;
}
