import { useEffect, useState } from "react";

export default function useWindowScroll(height: number): boolean {
  const [isScrolling, setIsScrolling] = useState(false);

  const translateInfoContainer = () => {
    if (window.scrollY >= height) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

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
