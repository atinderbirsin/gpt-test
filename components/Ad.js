import React from "react";

import useTransitionState from "./hooks/useTransitionState";
import useLoader from "./hooks/useLoader";
import styles from "../styles/Ad.module.css";
import useAdSlot from "./hooks/useAdSlot";
import ADS from "./hooks/constant";

function Ad({ adId }) {
  const { isTransitioning } = useTransitionState();
  const ad = ADS[adId];

  const { hasRendered, ref } = useLoader();
  useAdSlot({
    sizes: ad.sizes,
    id: adId,
    adSlot: ad.adSlot,
    isTransitioning,
  });

  return (
    <div
      id={adId}
      ref={ref}
      className={hasRendered ? styles.loader : styles.loader}
    />
  );
}

export default Ad;
