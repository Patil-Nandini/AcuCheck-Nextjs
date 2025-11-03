"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FutureUnderWritingHero() {
  return (
    <section
      className="relative flex flex-col items-center justify-start text-center px-6 md:px-12 bg-no-repeat bg-cover bg-center w-[100%] overflow-hidden pb-20"
      style={{
        backgroundColor: "#04091F",
      }}
    >
      <object
        data="/FutureUnderWritingBg.svg"
        type="image/svg+xml"
        className="absolute inset-0 w-full object-cover pointer-events-none"
        aria-label="Future Underwriting Background"
      ></object>

      <div className="relative z-10 max-w-5xl flex flex-col items-center text-white mt-25">
        <h1 className="text-3xl md:text-5xl font-semibold leading-snug mb-4">
          The Future of Underwriting Is{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] to-[#5271FF]">
            Real-Time,
          </span>{" "}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] to-[#5271FF]">
            Its Cash flow
          </span>
          <br />
          And It Starts Here...
        </h1>

        <p className="text-base md:text-lg text-[#D1D5DB] max-w-3xl mb-8">
          Join hundreds of financial institutions using{" "}
          <span className="font-semibold text-white">AcuCheck</span> to
          transform their lending processes with real-time cash flow
          intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Link href="/under-renovation">
            <button
              type="button"
              className="flex items-center justify-center h-[95px] text-white font-semibold cursor-pointer w-[270px] px-7"
              style={{
                backgroundImage: "url('/AcuViewButtonBg.webp')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                paddingBottom: "25px",
              }}
              aria-label="Start Your Free 90-Day Trial"
              onClick={() => (window.location.href = "/under-renovation")}
            >
              <Image
                src="/RocketIcon.png"
                alt="User"
                width={20}
                height={20}
                loading="lazy"
              />
              <span className="ml-2 whitespace-nowrap">
                Get Started with AcuCheck!
              </span>
            </button>
          </Link>
          <button className="flex items-center justify-center h-[65px] text-white font-semibold cursor-pointer w-[270px] px-7 border-2 border-white rounded-[46px]">
            <Image
              src="/playIcon.png"
              alt="User"
              width={20}
              height={20}
              loading="lazy"
            />
            <span className="ml-2 whitespace-nowrap">Schedule A Demo</span>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-0 lg:gap-8 ">
          {[
            { value: "< 2sec", label: "RESPONSE TIME" },
            { value: "12k+", label: "BANKS CONNECTED" },
            { value: "24/7", label: "SUPPORT" },
          ].map((stat, i) => (
            <div
              key={i}
              className="relative flex flex-col justify-center items-center w-[260px] h-[190px]"
            >
              <img
                src="/CurveCombineCard.png"
                alt="Card background"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none"
              />

              <div className="relative z-10 flex flex-col justify-center items-center text-white gap-5">
                <p className="text-[25px] font-bold relative bottom-[25px]">
                  {stat.value}
                </p>
                <p className="text-[18px] mt-2">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-end pointer-events-none">
        <Image
          src="/LeftCurve.png"
          alt="Left Curve"
          width={100}
          height={100}
          className="relative bottom-0 -left-100 w-[40%] md:w-[18%] h-auto object-contain"
          loading="lazy"
        />
        <Image
          src="/RightCurve.png"
          alt="Right Curve"
          width={100}
          height={100}
          className="relative bottom-0 -right-100 w-[40%] md:w-[18%] h-auto object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
}
