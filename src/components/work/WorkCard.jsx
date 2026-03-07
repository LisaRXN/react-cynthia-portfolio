import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function WorkCard({ title, subtitle, link, image, video, index, variant }) {
  const [iframeMounted, setIframeMounted] = useState(false);
  const [iframeReady, setIframeReady] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { t } = useTranslation();

  const indexStr = index ? String(index).padStart(2, "0") : null;

  // background=1 → Vimeo transparent player mode
  const videoSrc =
    video && video.includes("vimeo.com") && !video.includes("background=1")
      ? `${video}&background=1`
      : video;

  // Show video only when iframe is fully ready AND user is hovering
  const showVideo = iframeReady && isHovering;

  const handleMouseEnter = () => {
    if (video) {
      setIframeMounted(true);
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => setIsHovering(false);

  // onLoad fires when iframe HTML loads, but Vimeo player initialises async.
  // Wait 700ms so the video is actually rendering before we reveal it.
  const handleIframeLoad = () => {
    setTimeout(() => setIframeReady(true), 700);
  };

  // ── Shared media block ─────────────────────────────────────────────────────
  // Z-order: iframe (z-0) loads underneath → image (z-10) sits on top and hides
  // any white flash → image fades out only once the video is truly ready.
  const mediaInner = (
    <>
      {/* iframe underneath — loads silently behind the image */}
      {iframeMounted && (
        <iframe
          className={`absolute inset-0 z-0 w-full h-full pointer-events-none transition-opacity duration-700 ${
            showVideo ? "opacity-100" : "opacity-0"
          }`}
          src={videoSrc}
          title={title}
          onLoad={handleIframeLoad}
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}

      {/* Image on top — hides iframe until video is ready, then fades out */}
      <img
        src={`/img/${image}`}
        className={`z-50 absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ${
          isHovering ? "scale-105" : "scale-100"
        } ${showVideo ? "opacity-0" : "opacity-100"}`}
        alt={title}
      />
    </>
  );

  // ── Featured variant ───────────────────────────────────────────────────────
  if (variant === "featured") {
    return (
      <Link
        to={link}
        className="group flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center w-full relative"
      >
        {/* Top/Left: text */}
        <div className="lg:w-2/5 flex flex-col justify-between py-4 relative">
          {indexStr && (
            <span className="absolute -top-6 -left-2 font-tusker font-bold leading-none select-none pointer-events-none text-[8rem] lg:text-[11rem] text-white/[0.04] group-hover:text-white/[0.07] transition-colors duration-700">
              {indexStr}
            </span>
          )}
          <div className="relative z-10">
            <span className="font-open text-xs uppercase tracking-[0.25em] text-zinc-500 mb-4 block">
              {subtitle}
            </span>
            <h3 className="font-tusker text-5xl md:text-6xl lg:text-8xl uppercase leading-none text-white group-hover:text-mygreen transition-colors duration-500">
              {title}
            </h3>
          </div>
          <span className="relative z-10 font-open text-sm text-zinc-400 flex items-center gap-2 mt-8 group-hover:text-mygreen transition-colors duration-300">
            {t("main.button3")}
            <img src="/img/icon/arrow-up-right.png" className="w-4" alt="" />
          </span>
        </div>

        {/* Bottom/Right: media */}
        <div
          className="w-full lg:w-3/5 aspect-video relative overflow-hidden rounded-xl bg-zinc-900 isolate"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {mediaInner}
        </div>
      </Link>
    );
  }

  // ── Default variant ────────────────────────────────────────────────────────
  return (
    <Link
      to={link}
      className="group flex flex-col md:flex-row gap-5 h-full items-start md:items-center justify-between"
    >
      {/* Left: title */}
      <div className="flex-1">
        <p className="font-open text-xs uppercase tracking-[0.25em] text-zinc-500 mb-2">
          {subtitle}
        </p>
        <h3 className="font-tusker uppercase text-3xl md:text-4xl leading-tight text-white group-hover:text-mygreen transition-colors duration-300 max-w-[500px]">
          {title}
        </h3>
      </div>

      {/* Right: thumbnail + cta */}
      <div className="flex-1 flex flex-col gap-4 lg:flex-row items-center justify-center lg:justify-between m-auto">
        <div
          className="w-[325px] h-[183px] md:w-[350px] md:h-[197px] relative overflow-hidden flex-shrink-0 rounded-md bg-zinc-900 isolate"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {mediaInner}
        </div>

        <span className="font-open text-lg font-light text-zinc-50 flex items-center justify-center gap-2 group-hover:text-mygreen transition-colors duration-300 transform hover:-translate-y-1">
          {t("main.button3")}
          <img src="/img/icon/arrow-up-right.png" className="h-auto w-5" alt="" />
        </span>
      </div>
    </Link>
  );
}
