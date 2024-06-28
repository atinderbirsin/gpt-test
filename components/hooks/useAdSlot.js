import { useEffect } from "react";

const useAdSlot = ({ sizes, id, adSlot, isTransitioning }) => {
  useEffect(() => {
    if (!isTransitioning && typeof window !== undefined) {
      const { googletag } = window;
      googletag?.cmd?.push(function () {
        googletag
          ?.defineSlot(adSlot, sizes, id)
          ?.addService(googletag.pubads());
        googletag?.pubads()?.addEventListener("slotRequested", (event) => {
          Toastify({
            text: `${event?.slot?.getSlotId()?.getId()} has been requested`,
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
        });

        googletag?.pubads()?.addEventListener("slotRenderEnded", (event) => {
          if (event?.isEmpty) {
            Toastify({
              text: `${event?.slot?.getSlotId()?.getId()} has failed to load`,
              className: "info",
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
            }).showToast();
          } else {
            Toastify({
              text: `${event?.slot?.getSlotId()?.getId()} has been loaded`,
              className: "success",
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
            }).showToast();
          }
        });

        googletag?.pubads()?.addEventListener("slotRenderEnded", (event) => {
          Toastify({
            text: `${event?.slot?.getSlotId()?.getId()} has been viewed`,
            className: "success",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
        });
        googletag?.enableServices();
      });

      googletag?.cmd?.push(function () {
        googletag?.display(id);
      });
    }
  }, [sizes, id, isTransitioning]);
};

export default useAdSlot;
