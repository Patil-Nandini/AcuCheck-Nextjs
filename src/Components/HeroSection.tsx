"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section
      className="relative w-full bg-cover bg-center px-6 md:px-12 lg:px-10 xl:px-20 pt-30"
      style={{ backgroundImage: "url('/AcuCheck-bg.png')" }}
    >
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between xl:justify-center xl:gap-10 pt-5 xl:max-w-[1280px] xl:max-w-[668px]">
        <div className="flex-1 text-center md:text-left space-y-2 mt-9">
          <h1
            className="
              font-extrabold 
              leading-tight 
              text-black 
              text-[32px] 
              sm:text-[36px] 
              md:text-[40px] 
                lg:text-[35px]
              xl:text-[45px]
            "
          >
            Cash Flow Is the <br />
            <span
              className="
                inline-block 
                text-white 
                font-extrabold 
                rounded-[60px] 
                bg-[url('https://acufi.com/wp-content/uploads/2025/09/new-bg.webp')] 
                bg-contain 
                bg-no-repeat 
                bg-center 
                align-middle
                text-[24px] 
                sm:text-[26px] 
                md:text-[28px] 
                lg:text-[30px]
                xl:text-[40px] 
                px-6 
                sm:px-7 
                md:px-8 
                lg:px-10 
                py-2 
                sm:py-3 
                md:py-4 
                lg:py-5
              "
            >
              NEW
            </span>{" "}
            Credit Score
          </h1>

          <p className="text-gray-800 text-base md:text-[20pxpx] max-w-xl lg:max-w-md">
            A smarter way to determine the{" "}
            <span className="font-semibold">ability-to-pay</span> through cash
            flow analysis.
          </p>

          <div className="flex gap-4 w-full bg-transparent justify-center md:justify-start items-start lg:mt-5">
            <div
              className="
                group relative bg-transparent z-10 
                w-[230px] h-[157px] 
                lg:w-[230px] lg:h-[157px] 
                xl:w-[250px] xl:h-[167px] 
                flex flex-col justify-start items-center 
                text-white p-4 
                transition-transform duration-300 ease-in-out 
                hover:scale-105 
                rounded-[20px] bg-cover bg-center cursor-pointer
              "
              style={{ backgroundImage: "url('/primary.png')" }}
              onClick={() => router.push("/under-renovation")}
            >
              <div className="flex justify-end w-full mr-4">
                <Image
                  src="https://acufi.com/images/Arrow1Icon.svg"
                  alt="Arrow Icon"
                  width={35}
                  height={35}
                  loading="lazy"
                  className="w-[35px] transition-transform duration-500 ease-in-out origin-center group-hover:rotate-45"
                />
              </div>
              <p className="text-[18px] lg:text-[16px] xl:text-[18px] text-start  pt-5">
                Request AcuCheck Demo
              </p>
            </div>
          </div>

          <section className="relative w-full flex justify-center items-center lg:py-4 xl:py-10 py-9 overflow-hidden ml-[-7px] hidden md:block xl:max-w-[620px] xl:max-h-[185px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-[32px] md:p-[20px] lg:p-[0px]"
              preload="auto"
              poster="/AcuCheck_homebg.png"
            >
              <source src="/AcuCheck_homebg.webm" type="video/webm" />
            </video>

            <div className="relative z-10 flex flex-col md:flex-row gap-5 text-white text-center px-10 py-5 w-full max-w-5xl">
              <div className="flex-1">
                <h3 className="text-[20px] font-bold">12,000 +</h3>
                <p className="text-[16px]">CONNECTED BANKS</p>
              </div>
              <div className="flex-1">
                <h3 className="text-[20px] font-bold">Real-Time</h3>
                <p className="text-[16px]">CASH FLOW ANALYSIS</p>
              </div>
              <div className="flex-1">
                <h3 className="text-[20px] font-bold">Instant</h3>
                <p className="text-[16px]">DECISION MAKING</p>
              </div>
            </div>
          </section>
          <div className="relative flex justify-center mx-auto items-center w-[272px] h-[405px] sm:w-full sm:h-[100%] md:hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/AcuCheck_homebg.png"
              className="absolute inset-0 w-full h-full object-cover rounded-[32px] sm:hidden"
            >
              <source src="/AcuCheck-Homepage-mobile.webm" type="video/webm" />
            </video>

            {/* Text Overlay */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-[46px] md:gap-5 text-white text-center px-10 py-5 w-full sm:max-w-5xl">
              <div className="flex-1">
                <h3 className="text-[20px] font-bold">12,000 +</h3>
                <p className="text-[14px] lg:text-[16px]">CONNECTED BANKS</p>
              </div>
              <div className="flex-1">
                <h3 className="text-[20px] font-bold">Real-Time</h3>
                <p className="text-[14px] lg:text-[16px]">CASH FLOW ANALYSIS</p>
              </div>
              <div className="flex-1">
                <h3 className="text-[20px] font-bold">Instant</h3>
                <p className="text-[14px] lg:text-[16px]">DECISION MAKING</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center h-[100%] xl:max-w-[620px] xl:max-h-[616px]">
          <div className="relative w-[100%] h-full flex flex-col items-center justify-center overflow-hidden">
            <div
              className="absolute top-[10px] left-[-3px] z-10 w-12 h-12 md:w-36 md:h-36 flex items-center justify-center rounded-xl"
              style={{
                background:
                  "linear-gradient(116.85deg, rgba(208, 232, 255, 0.15) 29.18%, rgba(245, 250, 255, 0.15) 87.96%)",
                backdropFilter: "blur(8.6px)",
                boxShadow: "0px 16.94px 13.55px -6.78px #04A3E314",
                border: "1.27px solid",
                borderImageSource:
                  "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 100%)",
                borderRadius: "96px",
              }}
            >
              <object
                type="image/svg+xml"
                data="/Acucheck-Logo-Animation.svg"
                className="w-12 h-12 md:w-36 md:h-36"
                aria-label="AcuCheck Logo Animation"
              ></object>
            </div>

            <video
              src="/HeroSectionVideo.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[100%] object-contain pt-10 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
