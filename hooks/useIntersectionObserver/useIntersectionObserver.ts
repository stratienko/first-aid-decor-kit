import { useEffect, useRef } from "react";

export const useIntersectionObserver = <
  Element extends HTMLElement = HTMLElement
>(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  const intersectionObserver = useRef<IntersectionObserver>();
  const observationTarget = useRef<Element | null>(null);

  useEffect(() => {
    if (!intersectionObserver.current) {
      intersectionObserver.current = new IntersectionObserver(
        callback,
        options
      );
    }

    const { current: observer } = intersectionObserver;
    const { current: target } = observationTarget;

    if (observer && target) {
      observer.observe(target);
    }

    return () => {
      if (observer) {
        if (target) {
          observer.unobserve(target);
        }

        observer.disconnect();
      }
    };
  }, [callback, options]);

  return observationTarget;
};
