"use client";

import React from "react";

import Image from "next/image";

import ReusableLendingCard from "./ReusableLendingCard";

const SmarterLendingCashFlow = () => {
  const leftFeatures = [
    {
      title: "Real Time Cash Flow Analysis",

      description:
        "Automatically analyzes transaction history, income streams, financial obligations, and recurring expenses using advanced risk models.",

      tags: [
        "Income pattern identification",

        "Spending behavior analysis",

        "Affordability metrics",
      ],
    },

    {
      title: "DTI Scoring That Works In Real Time",

      description:
        "Calculate borrower’s ability to take on new debt using live income and expense data for accurate real-time assessment.",

      tags: [
        "Live income calculation",

        "Real-time expense tracking",

        "Debt capacity analysis",
      ],
    },
  ];

  const rightFeaturesTop = [
    {
      title: "NSF Alerts",

      description:
        "Identify when customers’ bank accounts are most likely to become negative.",

      tags: [
        "Real-time NSF detection",

        "Risk pattern analysis",

        "Early warning system",
      ],

      video: "/SmarterRightSideCard.webm",
    },

    {
      title: "Customer Bank Connection",

      description:
        "Connect to 12,000+ / 15,000+ banks and credit unions securely, with accounts linked in just seconds via authorized access.",

      tags: ["15,000+ Institutions", "Secure connection", "Instant access"],

      video: "/SmarterRightSideCard.webm",
    },
  ];

  const bottomFeatures = [
    {
      title: "Verify Income In Seconds",

      description:
        "Instantly confirm income sources and stability with real-time data. No pay stubs required.",

      tags: ["Instant verification", "Assessment", "Multiple income sources"],

      video: "/BotttomLeftCard.webm",
    },

    {
      title: "Ability To Pay",

      description:
        "Go beyond credit scores. Understand whether a borrower can take on new debt without slipping into default.",

      tags: [
        "Budget impact assessment",

        "Payment capacity analysis",

        "Default risk prediction",
      ],

      video: "/BotttomRightCard.webm",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/SmarterLendingBgVideo.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-stretch gap-0 px-6 py-20 text-white xl:max-w-[1400px] mx-auto xl:max-h-[1099px]">
        <div className="flex flex-col md:flex-row lg:flex-col gap-5 w-full lg:w-[23%] justify-center items-center">
          {leftFeatures.map((feature, i) => (
            <ReusableLendingCard key={i} {...feature} />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center w-full lg:w-[44%] text-center mt-10 lg:mt-0">
          <div className="relative w-[320px] sm:w-[400px] md:w-[580px] xl:w-[530px]">
            <Image
              src="/SmarterCenterTop.png"
              alt="Smarter Lending Background"
              width={700}
              height={700}
              className="w-full h-auto object-cover"
              priority
            />

            <h2 className="absolute top-[110px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22px] sm:text-[26px] md:text-[40px] font-bold text-white leading-snug w-[390px]">
              Smarter lending with Cash Flow Analysis
            </h2>
          </div>

          <div className="relative flex justify-center items-center mt-[-90px] md:mt-[-155px] lg:mt-[-146px]">
            <Image
              src="/TextGlobe.png"
              alt="Smarter Center Globe"
              width={240}
              height={240}
              className="w-[191px] md:w-[342px] lg:w-[314px] h-auto object-cover"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-0 lg:gap-8 w-full mx-auto px-4  md:px-17 lg:px-6 md:max-w-[720px] md:max-h-[422px] md:bottom-[175px] lg:bottom-[185px]">
            {bottomFeatures.map((feature, i) => (
              <div
                key={i}
                className="relative rounded-[24px] overflow-hidden shadow-lg md:max-w-[284px] md:max-h-[422px]
    w-[80vw] h-[120vw] sm:w-[37vw] sm:h-[55vw] lg:w-[17vw] lg:h-[29vw] max-w-none"
              >
                {/* 👇 Mobile video */}
                <video
                  src={
                    i === 0
                      ? "/SmarterMobileCard1.webm"
                      : "/SmarterMobileCard2.webm"
                  }
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain block md:hidden"
                />

                {/* 👇 Desktop/Tablet video */}
                <video
                  src={feature.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain hidden md:block"
                />

              <div
  className={`relative z-10 p-6 sm:p-8 flex flex-col text-white h-full top-[80px]
    ${i === 0 ? "text-start md:text-start" : "text-start md:text-end"}`}
>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-[#45EEFA] to-[#3598DB] bg-clip-text text-transparent mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-x-14 gap-y-3 mt-4 place-items-center mx-auto">
                    {feature.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="text-xs px-2 py-1 text-white font-semibold rounded-[30px] text-center w-[120px] h-[45px]"
                        style={{
                          background:
                            "linear-gradient(116.85deg, #2D6CED 29.18%, #8380FF 87.96%)",
                          border: "5px solid rgba(255, 255, 255, 0.4)",
                          backdropFilter: "blur(6px)",
                          boxShadow: "0px 8px 12px -4px rgba(4, 163, 227, 0.1)",
                        }}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-col gap-5 w-full lg:w-[23%] justify-center items-center md:relative md:top-[-139px] lg:top-0">
          {rightFeaturesTop.map((feature, i) => (
            <ReusableLendingCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmarterLendingCashFlow;
