import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'
import '../CSS/TryItOut/IntersectionObserverCSS.css'

function IntersectionObserverTest() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
          },
          { rootMargin: "-300px" }
        );
        console.log(isIntersecting);
        observer.observe(ref.current);
    
        return () => observer.disconnect();
      }, [isIntersecting]);

      useEffect(() => {
        if (isIntersecting) {
            ref.current.querySelectorAll("div").forEach(el => {
                el.classList.add("slide-in")
            })
        } else {
            ref.current.querySelectorAll("div").forEach(el => {
                el.classList.remove("slide-in")
            })
        }
      })


  return (
    <div className="App">  
        <header>This is the Header</header>
        <main ref={ref}>
            <div className="child-one">Child One</div>
            <div className="child-two">Child Two</div>
        </main>      
        <footer>This is the Footer</footer>
    </div>
  )
}

export default IntersectionObserverTest