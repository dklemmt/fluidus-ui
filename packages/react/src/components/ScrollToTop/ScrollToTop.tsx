import { clsx } from "clsx";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import "./ScrollToTop.scss";

// eslint-disable-next-line import/prefer-default-export
export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={clsx("fluidus-scroll-to-top", { "is-active": isVisible })}
      onClick={handleScrollToTop}
    >
      <ChevronUp size={48} />
    </div>
  );
};

ScrollToTop.displayName = "ScrollToTop";
