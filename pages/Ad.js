import React from "react";

import { useAdSlot } from "./hooks/useAdSlot";
import useTransitionState from "./hooks/useTransitionState";
import { ads } from "./hooks/constant";
import useLoader from "./hooks/useLoader";
import styles from "../styles/Ad.module.css";

function Ad({ adId }) {
  const { isTransitioning } = useTransitionState();
  const ad = ads[adId];

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
