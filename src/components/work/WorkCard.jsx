import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function WorkCard({ title, subtitle, link, image, video }) {
  const [startVideo, setStartVideo] = useState(false);
  const [isVideoVisible, setIsVideovisible] = useState(false);
  const { t } = useTranslation();

  const handleVideo = () => {
    if (video && !isVideoVisible && !startVideo) {
      setStartVideo(true);
      setTimeout(() => {
        setIsVideovisible(true);
      }, 0);
    } else if (video && !isVideoVisible && startVideo) {
      setIsVideovisible(true);
    } else if (video) {
      setIsVideovisible(false);
      setStartVideo(false)
    } else {
      return;
    }
  };

  return (
    <Link
      to={link}
      className="flex flex-col md:flex-row gap-5 h-full items-start md:items-center justify-between"
    >
      <div className="flex-1">
        <p className="font-grotesk tracking-tight uppercase font-light text-4xl mb-4 max-w-[500px]">
          {title}
        </p>
        <p className="text-zinc-400 font-open font-light text-lg">{subtitle}</p>
      </div>
      <div className="flex-1 flex flex-col gap-4 lg:flex-row items-center justify-center lg:justify-between m-auto">
        <div
          onMouseEnter={handleVideo}
          onMouseLeave={handleVideo}
          className="w-[325px] h-[183px] md:w-[350px] md:h-[197px] relative"
        >
          {isVideoVisible && (
            <iframe
              key={title}
              className={`absolute top-0 left-0 rounded-md aspect-video pointer-events-none :w-[350px] h-[200px];
            ${isVideoVisible ? "opacity-100" : "opacity-0"} ${
                startVideo ? "block" : "hidden"
              }`}
              title="vimeo-player"
              src={video}
              width="100%"
              height="100%"
              allowFullScreen
              autoPlay
              encrypted-media="true"
              loading="lazy"
              loop
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          )}

          <img
            src={`/img/${image}`}
            className={`object-cover object-top w-full h-full rounded-md ${
              isVideoVisible ? "block" : "block"
            }`}
            alt="Preview"
          />
        </div>

        <Link
          to={link}
          className="font-open text-lg font-light text-zinc-50/Users/lisaeriksen/Desktop/DiffuZe./Logos/arrow-up-right.png transition duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1"
        >
          {t("main.button3")}
          <img
            src="/img/icon/arrow-up-right.png"
            className="h-auto w-5"
            alt=""
          />
        </Link>
      </div>
    </Link>
  );
}
