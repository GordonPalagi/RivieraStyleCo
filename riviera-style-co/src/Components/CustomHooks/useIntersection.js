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
  const currentRoot = rootRef.current
    return () => {
      if (currentRoot) {
        observer.unobserve(currentRoot);
      }
    };
  }, [currentRef, options, rootRef]);
  console.log(isIntersecting);
  return isIntersecting;
};
