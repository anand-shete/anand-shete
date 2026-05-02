import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import { useLocation } from "react-router";

const SmoothScroll = () => {
  const lenis = useLenis();
  const { pathname } = useLocation();

  // Scrolls to top on route change
  // prevent it to scroll to top on intial render by setting immediate: true
  //  fixme add full screen loader
  
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return <ReactLenis root />;
};

export default SmoothScroll;
