import { useEffect } from "react";

export function useAdEvents() {
  useEffect(() => {
    googletag?.pubads()?.addEventListener("slotRequested", (event) => {
      console.log("slotRequested", event);
    });

    googletag?.pubads()?.addEventListener("slotRenderEnded", (event) => {
      console.log("slotRenderEnded", event);
    });

    googletag?.pubads()?.addEventListener("slotRenderEnded", (event) => {
      console.log("slotRenderEnded", event);
    });
  }, []);
}
