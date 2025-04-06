import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Loader = ({ setIsLoading }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsLoading(false),
    });

    tl.from(".loader h1", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })
      .to(".loader h1", {
        opacity: 1,
        y: -30,
        duration: 2,
      })
      .to(".loader h1", {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power3.inOut",
      })
      .to(".loader", {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power3.inOut",
        onComplete: () => setIsLoading(false), // Ensure loader is removed
      });
  }, [setIsLoading]);

  return (
    <div className="loader">
      <h1>Spencer Gabor</h1>
    </div>
  );
};

export default Loader;
