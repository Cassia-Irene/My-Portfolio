import LightRays from "./components/LightRays";
import { useEffect, useState } from "react";

import centralImg from "/svg_central.svg";
import img1 from "/svg_figma.svg";
import img2 from "/svg_html.svg";
import img3 from "/svg_js.svg";
import img4 from "/svg_css.svg";
import ArrowRight from "/svg_seta_hero_sobre-mim.svg";
import lateralImg from "/svg_lateral-1.svg";

const Hero = () => {
  const [originOffset, setOriginOffset] = useState(0.2);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 480) setOriginOffset(0.04);
      else if (w < 768) setOriginOffset(0.1);
      else if (w < 1024) setOriginOffset(0.06);
      else setOriginOffset(0.2);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return (
    <section
      id="section-00"
      className="
        relative h-screen 
        flex justify-between items-center 
        2xl:px-[10%] 2xl:space-x-10
        xl:px-[8%] xl:space-x-8
        max-[1024px]:px-[8%]
        max-[768px]:flex-col max-[768px]:px-[40px] max-[768px]:pt-[60px]
        max-[480px]:px-[20px]
      "
    >
      {/* ----- LightRays como fundo ----- */}
      <div className="absolute inset-0 -z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#25A9D6"
          raysSpeed={1}
          lightSpread={1}
          rayLength={4}
          originOffset={originOffset}
          pulsating={true}
          fadeDistance={1.0}
          saturation={1.0}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.1}
          distortion={0.2}
        />
      </div>

      {/* ===== LADO ESQUERDO ===== */}
      <div className="flex flex-col">
        <p
          className="
            relative
            text-[#FFBB1B] font-inter font-medium
            text-[25px]
            lg:left-0
            2xl:text-[23px] xl:
            max-[1024px]:left-0 max-[1024px]:text-[23px]
            max-[768px]:text-[22px]
            max-[480px]:text-[20px]
          "
        >
          Olá, meu nome é
        </p>

        <h1
          className="
            relative mt-[-23px]
            text-white font-racing tracking-[8px]
            text-[120px]
            max-[1024px]:left-0 max-[1024px]:text-[100px] max-[1024px]:tracking-[6px]
            max-[768px]:text-[80px] max-[768px]:tracking-[4px]
            max-[480px]:text-[60px] max-[480px]:tracking-[2px]
          "
        >
          Cássia
        </h1>

        {/* Irene + barra */}
        <div
          className="
            flex items-center gap-[11px]
            relative mt-[-51px]
            max-[1024px]:left-0 max-[1024px]:mt-[-40px]
            max-[768px]:justify-center max-[768px]:mt-[-20px]
          "
        >
          <div className="w-[132px] h-[4px] bg-[#FFBB1B]" />
          <h2
            className="
              text-white font-['Racing_Sans_One']
              text-[90px] tracking-[4px]
              max-[1024px]:text-[70px] max-[1024px]:tracking-[3px]
              max-[768px]:text-[60px] max-[768px]:tracking-[2px]
              max-[480px]:text-[40px]
            "
          >
            Irene
          </h2>
        </div>

        {/* Botão Sobre mim */}
        <button
          onClick={() => {
            const section = document.getElementById("section-01");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          className="
            relative px-20
            flex items-center
            w-auto
            bg-transparent border-none cursor-pointer
            text-[#FFBB1B] font-inter font-medium text-[25px]
            hover:opacity-90 transition
            max-[1024px]:left-[20%] max-[1024px]:text-[23px]
            max-[768px]:left-0 max-[768px]:mx-auto max-[768px]:mt-[20px] max-[768px]:text-[22px]
            max-[480px]:w-[150px] max-[480px]:text-[18px]
          "
        >
          Sobre mim
          <img
            src={ArrowRight}
            alt="Seta"
            className="relative top-[2px] transition-transform duration-300 hover:rotate-90"
          />
        </button>

        {/* Imagem lateral (desktop only) */}
        <img
          src={lateralImg}
          alt=""
          className="
            absolute top-[87%] left-[-1.2%] -z-10
            w-[334px] h-[278px] blur-[8px]
            max-[768px]:hidden
          "
        />
      </div>

      {/* ===== LADO DIREITO ===== */}
      <div
        className="
          relative
          w-[520px] h-[400px]
          max-[1024px]:w-[400px] max-[1024px]:h-[350px]
          max-[768px]:w-full max-[768px]:h-auto
        "
      >
        {/* Imagem central */}
        <img
          src={centralImg}
          alt=""
          className="
            relative top-[-10%] right-[55%] 
            translate-x-[-50%] translate-y-[-50%] 
            w-[550px] h-[535px] float-slow
            -z-10
            max-[1024px]:w-[400px] max-[1024px]:h-[385px] max-[1024px]:right-[15%]
            max-[768px]:static max-[768px]:translate-x-0 max-[768px]:translate-y-0
            max-[768px]:mx-auto max-[768px]:w-[350px]
            max-[480px]:w-[250px]
          "
        />

        {/* Floating icons */}
        <img
          src={img1}
          className="absolute float top-[-22%] right-[150%]"
        />
        <img
          src={img2}
          className="absolute float top-[-35%] left-[30%]"
        />
        <img
          src={img3}
          className="absolute float bottom-[-60%] right-[130%]"
        />
        <img
          src={img4}
          className="absolute float bottom-[-40%] left-[35%]"
        />
      </div>
    </section>
  );
};

export default Hero;
