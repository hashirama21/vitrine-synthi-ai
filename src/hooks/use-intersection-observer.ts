import { useCallback, useRef, useState } from 'react';

export function useIntersectionObserver(
  options?: IntersectionObserverInit
): [ref: (node: Element | null) => void, isInView: boolean] {
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const optionsRef = useRef(options);
  optionsRef.current = options;

  const ref = useCallback(
    (node: Element | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      if (!node) return;

      observerRef.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      }, optionsRef.current);

      observerRef.current.observe(node);
    },
    []
  );

  return [ref, isInView];
}
