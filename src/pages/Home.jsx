import { useRef } from "react";
import { Link } from "react-router-dom";
import { WorkCard } from "../components/work/WorkCard";
import { Contact } from "../components/shared/Contact";
import { Carousel } from "../components/shared/Carousel";
import { useTranslation } from "react-i18next";

function Marquee() {
  const { t } = useTranslation();

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) =>
    t(`projects.project${i}.title`)
  );

  return (
    <div className="overflow-hidden border-y border-zinc-800 py-5 my-20">
      <div className="flex animate-marquee whitespace-nowrap">
        {[0, 1].map((pass) => (
          <span key={pass} className="flex items-center flex-shrink-0">
            {items.map((item, i) => (
              <span key={`${pass}-${i}`} className="flex items-center">
                <span className="font-tusker text-lg md:text-2xl uppercase tracking-widest text-zinc-500 mx-8 md:mx-12">
                  {item}
                </span>
                <span className="text-mygreen text-xl select-none">·</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Home() {
  const modalRef = useRef();
  const { t } = useTranslation();

  const openModal = () => modalRef.current.showModal();

  return (
    <div className="m-auto md:min-h-screen md:max-w-screen-2xl">

      {/* ============================
          HERO — Desktop
      ============================= */}
      <section id="hero-section" className="hidden md:block mb-20 h-auto">
        <div className="grid grid-cols-3 w-full gap-10 box-border px-10">

          {/* Col 1: Movistar video + name */}
          <div className="flex-1 flex flex-col max-h-[600px] justify-between h-full">
            <div className="flex-1 mb-8">
              <video
                src="/img/movistar-video.mp4?"
                type="video/mp4"
                autoPlay
                muted
                loop
                className="object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-tusker uppercase leading-none">
                <span
                  className="bg-gradient-to-r from-mygreen to-emerald-800 bg-clip-text text-transparent animate-gradientMove block md:text-3xl lg:text-5xl"
                  style={{
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  Cynthia
                </span>
                <p className="text-white md:text-4xl lg:text-6xl">Alarcón</p>
              </div>
              <p className="font-open text-xs uppercase tracking-[0.25em] text-zinc-400 mt-1">
                Creative Copywriter
              </p>
            </div>
          </div>

          {/* Col 2: Amunas image + contact button */}
          <div className="flex-1 flex flex-col gap-10 h-full max-h-[600px] justify-between">
            <img
              src="/img/amunas.png"
              alt=""
              className="object-cover h-full max-h-[700px]"
            />
            <button
              onClick={openModal}
              className="w-[160px] lg:w-[200px] py-2 md:py-3 rounded-full border border-gray-50 text-gray-50 hover:border-mygreen hover:bg-zinc-950 transition duration-300 flex items-center justify-center gap-2"
            >
              {t("main.button1")}
              <img
                src="/img/icon/arrow-up-right.png"
                className="h-auto w-5"
                alt=""
              />
            </button>
            <Contact modalRef={modalRef} />
          </div>

          {/* Col 3: Cusqueña video */}
          <div className="flex-1 lg:h-full max-h-[600px]">
            <video
              src="/img/cusquena-video-9:16.mp4"
              type="video/mp4"
              autoPlay
              muted
              loop
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* ============================
          HERO — Mobile
      ============================= */}
      <div className="md:hidden flex-1 flex flex-col gap-10 justify-between h-full">
        <div className="flex flex-col gap-2 px-10">
          <div className="font-tusker uppercase leading-none">
            <span
              className="bg-gradient-to-r from-mygreen to-emerald-800 bg-clip-text text-transparent animate-gradientMove block text-3xl"
              style={{
                backgroundSize: "150% 150%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Cynthia
            </span>
            <p className="text-white text-4xl">Alarcón</p>
          </div>
          <p className="font-open text-xs uppercase tracking-[0.25em] text-zinc-400 mt-1">
            Creative Copywriter Senior
          </p>
        </div>
        <div className="flex-1 px-5 items-center justify-center">
          <Carousel images={["amunas-home.png", "nayflex-home.png", "corazon-home.png"]} />
        </div>
      </div>

      {/* ============================
          MARQUEE
      ============================= */}
      <Marquee />

      {/* ============================
          WORK SECTION
      ============================= */}
      <section id="work-section">
        <div className="py-10 md:py-20 px-5 md:px-10">

          {/* Section header */}
          <div className="flex items-center justify-between mb-14">
            <div className="flex items-center font-rock tracking-tight text-2xl md:text-5xl font-semibold uppercase">
              <h2>work</h2>
              <span className="text-mygreen ml-6 md:ml-10">.</span>
            </div>
            <Link
              to="/work"
              className="w-[160px] md:w-[200px] py-2 md:py-3 rounded-full border border-gray-50 text-gray-50 hover:border-mygreen hover:bg-zinc-950 transition duration-300 flex items-center justify-center gap-2"
            >
              {t("main.button2")}
              <img src="/img/icon/arrow-up-right.png" className="h-auto w-5" alt="" />
            </Link>
          </div>

          {/* Amunas — featured */}
          <WorkCard
            index={1}
            variant="featured"
            title={t("projects.project1.title")}
            subtitle="Cusqueña · Publicis"
            link="/amunas-recovery"
            image="amunas-home.png"
            video="https://player.vimeo.com/video/937783428?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
          />
          <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none" />

          {/* Corazon en la Pansa */}
          <WorkCard
            title={t("projects.project4.title")}
            subtitle="Cusqueña · Publicis"
            link="/corazon-en-la-pansa"
            image="corazon-home.png"
            video="https://player.vimeo.com/video/1068592834?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
          />
          <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none" />

          {/* Conectados */}
          <WorkCard
            title={t("projects.project2.title")}
            subtitle="Movistar · VML"
            link="/conectados"
            image="conectados-home.png"
            video="https://player.vimeo.com/video/1068638578?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
          />
          <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none" />

          {/* Nos Pasa */}
          <WorkCard
            title={t("projects.project3.title")}
            subtitle="Nayflex · Juju Agency"
            link="/nos-pasa"
            image="nayflex-home.png"
            video="https://player.vimeo.com/video/1068498974?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
          />
          <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none" />

          {/* Intocables */}
          <WorkCard
            title={t("projects.project7.title")}
            subtitle="Iniciativa idea · Ojo 2021"
            link="/las-intocables"
            image="intocables-home.png"
            video="https://player.vimeo.com/video/704338668?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
          />
          <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none" />

          {/* Sabores */}
          <WorkCard
            title={t("projects.project5.title")}
            subtitle="Cusqueña · Publicis"
            link="/sabores-que-conquistan-el-mundo"
            image="sabores-home.png"
            video="https://www.youtube.com/embed/J_nmEMGxbZQ?autoplay=1&loop=1&mute=1&controls=0&modestbranding=1"
          />
          <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none" />

          {/* Bud Tunnels */}
          <WorkCard
            title={t("projects.project9.title")}
            subtitle="Budweiser · Publicis"
            link="/bud-tunnels"
            image="bud-tunnels-home.png"
            video="https://player.vimeo.com/video/1068500493?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
          />
          <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none" />

          {/* BudVar */}
          <WorkCard
            title={t("projects.project8.title")}
            subtitle="Budweiser · Publicis"
            link="/bud-var"
            image="budvar-home.png"
            video="https://player.vimeo.com/video/1068500225?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
          />
          <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none" />

          {/* Open Football */}
          <WorkCard
            title={t("projects.project10.title")}
            subtitle="Budweiser · Publicis"
            link="/open-football"
            image="open-home.jpg"
          />
          <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none" />

          {/* Mimaskot */}
          <WorkCard
            title={t("projects.project11.title")}
            subtitle="Mimaskot · Circus"
            link="/mimaskot"
            image="mimaskot-home.png"
            video="https://player.vimeo.com/video/1068501493?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
          />
          <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none" />

          {/* Gloria */}
          <WorkCard
            title={t("projects.project6.title")}
            subtitle="Gloria · Juju Agency"
            link="/navidad"
            image="navidad-home2.png"
            video="https://player.vimeo.com/video/1068499267?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
          />
          <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none" />

        </div>
      </section>

      {/* ============================
          ABOUT SECTION
      ============================= */}
      <section className="px-6 md:px-12 pb-40">
        <div className="border-t border-zinc-800 pt-16">
          <div className="grid gap-16 lg:grid-cols-3">

            {/* Col 1 — Bio */}
            <div className="flex flex-col justify-between gap-12">
              <div>
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-3">
                    <h2 className="font-rock text-2xl md:text-4xl uppercase tracking-tight">About</h2>
                    <span className="text-mygreen text-4xl leading-none">.</span>
                  </div>
                  <Link
                    to="/about"
                    className="lg:hidden px-5 py-2 rounded-full border border-zinc-700 text-zinc-400 hover:border-mygreen hover:text-mygreen transition-all duration-300 font-open text-sm flex items-center gap-2"
                  >
                    {t("main.button4")}
                    <img src="/img/icon/arrow-up-right.png" className="w-4" alt="" />
                  </Link>
                </div>

                <div className="pl-5 border-l-[3px] border-mygreen mb-2">
                  <p className="font-grotesk font-bold text-xl mb-4 text-white">
                    {t("about.title")}
                  </p>
                  <p className="text-zinc-400 leading-relaxed">{t("about.description")}</p>
                </div>
              </div>

              {/* Contact links */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] flex-1 bg-zinc-800" />
                  <p className="text-zinc-600 text-xs uppercase tracking-[0.2em]">
                    {t("about.contact")}
                  </p>
                  <div className="h-[1px] flex-1 bg-zinc-800" />
                </div>
                <div className="flex items-center justify-between">
                  {[
                    {
                      icon: "mail.png",
                      label: t("about.mail"),
                      href: "mailto:cynthia.alarcon.arroyo@gmail.com",
                    },
                    {
                      icon: "linkedin.png",
                      label: "linkedin",
                      href: "https://www.linkedin.com/in/cynthia-alarc%C3%B3n-918b66b1/",
                    },
                    {
                      icon: "behance.png",
                      label: "behance",
                      href: "https://www.behance.net/cynthiaalarcon27",
                    },
                  ].map(({ icon, label, href }) => (
                    <div key={label} className="group flex items-center gap-2">
                      <img src={`/img/icon/${icon}`} className="w-4" alt="" />
                      <a
                        href={href}
                        target="blank"
                        className="font-open text-sm text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-mygreen after:transition-all after:duration-300 group-hover:after:w-full"
                      >
                        {label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Col 2 — Photo crossfade */}
            <div className="flex justify-center lg:justify-center">
              <div className="relative w-[280px] md:w-[300px] aspect-[3/4] rounded-2xl overflow-hidden group cursor-default">
                <img
                  src="/img/cynthia.jpeg"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                  alt="Cynthia Alarcón"
                />
                <img
                  src="/img/cynthia2.jpeg"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  alt="Cynthia Alarcón"
                />
              </div>
            </div>

            {/* Col 3 — Experience timeline */}
            <div className="flex flex-col">
              <div className="hidden lg:flex justify-end mb-12">
                <Link
                  to="/about"
                  className="px-5 py-3 rounded-full border border-zinc-700 text-zinc-400 hover:border-mygreen hover:text-mygreen transition-all duration-300 font-open text-sm flex items-center gap-2"
                >
                  {t("about.button")}
                  <img src="/img/icon/arrow-up-right.png" className="w-4" alt="" />
                </Link>
              </div>

              <div className="mb-10 lg:text-right">
                <p className="font-open font-light text-white text-lg">Cynthia Alarcón</p>
                <p className="font-open font-light text-zinc-500 text-sm mt-1">
                  Senior Creative Copywriter
                </p>
              </div>

              {/* Timeline */}
              <div className="relative pl-6 border-l-2 border-zinc-800">
                {[
                  { years: "2024 – 2025", company: "VML Perú" },
                  { years: "2023 – 2024", company: "The Juju" },
                  { years: "2020 – 2023", company: "Publicis Perú" },
                  { years: "2018 – 2020", company: "Circus Grey" },
                ].map(({ years, company }, i) => (
                  <div
                    key={i}
                    className="relative flex items-center justify-between py-5 border-b border-zinc-800 last:border-none group"
                  >
                    <div className="absolute -left-[29px] w-3 h-3 rounded-full border-2 border-zinc-600 bg-zinc-950 group-hover:border-mygreen group-hover:bg-mygreen transition-all duration-300" />
                    <p className="text-zinc-500 font-open text-sm">{years}</p>
                    <p className="text-white font-open font-medium group-hover:text-mygreen transition-colors duration-300">
                      {company}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
