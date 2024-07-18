import { clsx } from "clsx";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import "./ScrollToTop.scss";

export interface ScrollToTopProps {
  ariaLabel?: string;
}

export const ScrollToTop = ({
  ariaLabel = "Scroll to top",
}: ScrollToTopProps) => {
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
      aria-label={ariaLabel}
      className={clsx("fluidus-scroll-to-top", { "is-active": isVisible })}
      onClick={handleScrollToTop}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleScrollToTop();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <ChevronUp size={36} />
    </div>
  );
};

export default ScrollToTop;

ScrollToTop.displayName = "ScrollToTop";
