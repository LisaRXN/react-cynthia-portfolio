import { useState, useEffect, useRef } from "react";

const useCarouselScroll = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);
  const itemRef = useRef(null);

  
  const prevSlide = () => {
    if (carouselRef.current && itemRef.current) {
      carouselRef.current.scrollBy({
        left: -itemRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    if (carouselRef.current && itemRef.current) {
      carouselRef.current.scrollBy({
        left: itemRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
  
    const checkScrollPosition = () => {
      // Calcul de la slide active
      const index = Math.round(carousel.scrollLeft / carousel.clientWidth);
      setActiveSlide(index);
    };
  
    carousel.addEventListener("scroll", checkScrollPosition);
    
    return () => {
      carousel.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const goToSlide = (slide) => {
    if (carouselRef.current) {
      const items = carouselRef.current.children;
      if (items[slide]) {
        items[slide].scrollIntoView({ 
          behavior: "smooth", 
          block: "nearest", 
          inline: "start" });
      }
    }
  };


  return { activeSlide, carouselRef, itemRef, prevSlide, nextSlide, goToSlide };
};

export default useCarouselScroll;
