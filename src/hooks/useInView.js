import { useEffect, useRef, useState } from "react";

/**
 * Like a `useEffect` that only fires when the element scrolls into view.
 * Think of it as a "lazy useEffect" — same idea as lazy-loading images,
 * but for triggering animations.
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element); // fire once, like a Promise.resolve
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px", ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}
