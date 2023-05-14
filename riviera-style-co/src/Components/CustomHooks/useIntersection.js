import { useState, useEffect } from 'react';

export const useIntersection = (rootRef, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const currentRef = rootRef.current;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (rootRef.current) {
      observer.observe(rootRef.current);
    }

    return () => {
      if (rootRef.current) {
        observer.unobserve(rootRef.current);
      }
    };
  }, [currentRef, options]);
  console.log(isIntersecting);
  return isIntersecting;
};
