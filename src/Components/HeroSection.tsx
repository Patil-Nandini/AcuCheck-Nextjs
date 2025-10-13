"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section
      className="relative w-full bg-cover bg-center px-6 md:px-12 lg:px-20 mt-30"
      style={{ backgroundImage: "url('/AcuCheck-bg.png')" }} 
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1
            className="
              font-extrabold 
              leading-tight 
              text-black 
              text-[32px] 
              sm:text-[36px] 
              md:text-[40px] 
              lg:text-[45px]
            "
          >
            Cash Flow Is the <br/>
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
                lg:text-[40px] 
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

          {/* Subtext */}
          <p className="text-gray-800 text-base md:text-lg max-w-md">
            A smarter way to determine the{" "}
            <span className="font-semibold">ability-to-pay</span> through cash
            flow analysis.
          </p>

          {/* CTA Button */}
          <div className="flex gap-4 w-full bg-transparent justify-start items-start lg:mt-5">
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
              style={{ backgroundImage: "url('/primary.png')" }} // ✅ use /public path
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
              <p className="text-[18px] lg:text-[16px] xl:text-[18px] text-start mb-7 pt-5">
                Request AcuCheck Demo
              </p>
            </div>
          </div>

          {/* Feature boxes */}
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <div className="bg-gradient-to-r from-[#022b6a] to-[#014d9a] text-white rounded-2xl p-4 flex-1 text-center shadow-md">
              <h3 className="text-xl font-bold">12,000 +</h3>
              <p className="text-sm">CONNECTED BANKS</p>
            </div>
            <div className="bg-gradient-to-r from-[#022b6a] to-[#014d9a] text-white rounded-2xl p-4 flex-1 text-center shadow-md">
              <h3 className="text-xl font-bold">Real-Time</h3>
              <p className="text-sm">CASH FLOW ANALYSIS</p>
            </div>
            <div className="bg-gradient-to-r from-[#022b6a] to-[#014d9a] text-white rounded-2xl p-4 flex-1 text-center shadow-md">
              <h3 className="text-xl font-bold">Instant</h3>
              <p className="text-sm">DECISION MAKING</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full h-[100%] flex flex-col items-center justify-center overflow-hidden">
            <object
              type="image/svg+xml"
              data="/Acucheck-Logo-Animation.svg"
              className="absolute top-[-40] left-4 w-12 h-12 md:w-36 md:h-36 z-10"
              aria-label="AcuCheck Logo Animation"
            ></object>

            <video
              src="/HeroSectionVideo.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
