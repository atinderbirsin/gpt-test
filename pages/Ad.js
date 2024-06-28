import React from "react";

import { useAdSlot } from "./useAdSlot";
import useTransitionState from "./useTransitionState";
import { ads } from "./constant";
import useLoader from "./useLoader";
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
