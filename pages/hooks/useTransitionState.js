import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useTransitionState = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const setTransitionStarted = () => {
    setIsTransitioning(true);

    // destroy all ad slots
    const { googletag } = window;
    googletag?.cmd?.push(function () {
      googletag?.destroySlots();
    });
  };

  const setTransitionComplete = () => {
    setIsTransitioning(false);
  };

  useEffect(() => {
    router.events.on("routeChangeStart", setTransitionStarted);
    router.events.on("routeChangeComplete", setTransitionComplete);

    return () => {
      router.events.off("routeChangeStart", setTransitionStarted);
      router.events.off("routeChangeComplete", setTransitionComplete);
    };
  }, []);

  return { isTransitioning };
};

export default useTransitionState;
