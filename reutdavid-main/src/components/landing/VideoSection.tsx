import { useState, useCallback, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./VideoSectionStack.css";

const VIDEO_IDS = ["irmKnFh-CiU", "DisZlUE52qc", "B-X6FDXTOvs"];
const LEN = VIDEO_IDS.length;

function useRtl() {
  const [rtl, setRtl] = useState(
    typeof document !== "undefined" ? document.documentElement.dir === "rtl" : false
  );
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setRtl(document.documentElement.dir === "rtl");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
    return () => observer.disconnect();
  }, []);
  return rtl;
}

const VideoSection = () => {
  const { t } = useTranslation();
  const rtl = useRtl();
  const [positions, setPositions] = useState<number[]>([0, 1, 2]);
  const touchStartX = useRef(0);

  const goPrev = useCallback(() => {
    setPositions((prev) => prev.map((p) => (p + 1) % 3));
  }, []);

  const goNext = useCallback(() => {
    setPositions((prev) => prev.map((p) => (p - 1 + 3) % 3));
  }, []);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) < 50) return;
      if (rtl) dx > 0 ? goNext() : goPrev();
      else dx < 0 ? goNext() : goPrev();
    },
    [rtl, goPrev, goNext]
  );

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
          {t("video.title")}
        </h2>
        <div
          className="video-stack-wrap"
          dir={rtl ? "rtl" : "ltr"}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="video-stack-viewport">
            {[0, 1, 2].map((cardIndex) => {
              const slot = positions[cardIndex];
              const isActive = slot === 1;
              return (
                <div
                  key={cardIndex}
                  className={`video-stack-card video-stack-card-slot-${slot}`}
                  style={{ zIndex: slot === 1 ? 10 : slot + 1 }}
                  onClick={() => {
                    if (slot === 0) (rtl ? goNext : goPrev)();
                    if (slot === 2) (rtl ? goPrev : goNext)();
                  }}
                  role="button"
                  tabIndex={slot === 1 ? -1 : 0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      if (slot === 0) (rtl ? goNext : goPrev)();
                      if (slot === 2) (rtl ? goPrev : goNext)();
                    }
                  }}
                  aria-label={t("video.title")}
                >
                  <div className="video-stack-card-inner">
                    {isActive ? (
                      <iframe
                        key={VIDEO_IDS[cardIndex]}
                        src={`https://www.youtube.com/embed/${VIDEO_IDS[cardIndex]}?rel=0`}
                        title={`${t("video.title")} ${cardIndex + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="video-stack-iframe"
                        loading="lazy"
                      />
                    ) : (
                      <div className="video-stack-placeholder">
                        <span>{cardIndex + 1}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <button
            type="button"
            className="video-stack-btn video-stack-prev"
            onClick={goPrev}
            aria-label={t("video.title")}
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={2} />
          </button>
          <button
            type="button"
            className="video-stack-btn video-stack-next"
            onClick={goNext}
            aria-label={t("video.title")}
          >
            <ChevronRight className="w-6 h-6" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
