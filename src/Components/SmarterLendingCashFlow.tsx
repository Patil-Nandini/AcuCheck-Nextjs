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
        {
          label: "Income pattern identification",
          style: "relative bottom-[1px] left-[5px]",
        },
        {
          label: "Spending behavior analysis",
          style: "relative bottom-[-8px] left-[78px]",
        },
        {
          label: "Affordability metrics",
          style: "relative bottom-[-15px] left-[5px]",
        },
      ],
      video: "/cardBg1.webm",
    },
    {
      title: "DTI Scoring That Works In Real Time",
      description:
        "Calculate borrower’s ability to take on new debt using live income and expense data for accurate real-time assessment.",
      tags: [
        {
          label: "Live income calculation",
          style: "relative bottom-[15px] left-[25px]",
        },
        {
          label: "Real-time expense tracking",
          style: "relative bottom-[5px] left-[80px]",
        },
        {
          label: "Debt capacity analysis",
          style: "relative bottom-[-2px] left-[5px]",
        },
      ],
      video: "/cardBg1.webm",
    },
  ];

  const rightFeaturesTop = [
    {
      title: "NSF Alerts",
      description:
        "Identify when customers’ bank accounts are most likely to become negative.",
      tags: [
        {
          label: "Real-time NSF detection",
          style: "relative bottom-[5px] left-[20px]",
        },
        {
          label: "Risk pattern analysis",
          style: "relative bottom-[-7px] left-[95px]",
        },
        {
          label: "Early warning system",
          style: " relative bottom-[-20px] left-[10px]",
        },
      ],
      video: "/SmarterRightSideCard.webm",
    },
    {
      title: "Customer Bank Connection",
      description:
        "Connect to 12,000+ / 15,000+ banks and credit unions securely, with accounts linked in just seconds via authorized access.",
      tags: [
        {
          label: "15,000+ Institutions",
          style: "bottom-[20px] left-[25px] relative",
        },
        {
          label: "Secure connection",
          style: "bottom-[-20px] left-[-40px] relative ",
        },
        {
          label: "Instant access",
          style: "bottom-[-32px] left-[25px] relative",
        },
      ],
      // video: "/SmarterRightSideCard.webm",
    },
  ];

  const bottomFeatures = [
    {
      title: "Verify Income In Seconds",

      description:
        "Instantly confirm income sources and stability with real-time data. No pay stubs required.",

      tags: ["Instant verification", "Assessment", "Multiple income sources"],

      video: "/SmarterMobileCard1.webm",
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

      video: "/SmarterMobileCard2.webm",
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

      <div className="relative z-10 flex flex-col xl:flex-row justify-center items-stretch gap-0 px-6 py-20 text-white xl:max-w-[1400px] mx-auto xl:max-h-[1099px]">
        <div className="flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:w-[23%] justify-center items-center mr-[10px]">
          {leftFeatures.map((feature, i) => (
            <ReusableLendingCard key={i} {...feature} />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center w-full xl:w-[44%] text-center mt-10 xl:mt-35">
          <div className="relative w-[310px] sm:w-[400px] md:w-[580px] xl:w-[530px]">
            <Image
              src="/SmarterCenterTop.png"
              alt="Smarter Lending Background"
              width={700}
              height={700}
              className="w-full h-auto object-cover"
              priority
            />

            <h2 className="absolute top-[110px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25px] sm:text-[26px] md:text-[40px] font-bold text-white leading-snug w-[300px] xl:w-[390px]">
              Smarter lending with Cash Flow Analysis
            </h2>
          </div>

          <div className="relative flex justify-center items-center mt-[-90px] md:mt-[-155px] xl:mt-[-146px]">
            <Image
              src="/TextGlobe1.png"
              alt="Smarter Center Globe"
              width={240}
              height={240}
              className="w-[151px] md:w-[242px] xl:w-[220px] h-auto object-cover mt-6 xl:mt-8"
            />
          </div>
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-0 xl:gap-5 w-full mx-auto px-4  md:px-17 xl:px-6 md:max-w-[720px] md:max-h-[422px] md:bottom-[175px] lg:bottom-[185px]">
            {bottomFeatures.map((feature, i) => (
              <div
                key={i}
                className="relative rounded-[24px] overflow-hidden shadow-lg md:max-w-[284px] md:max-h-[422px] max-w-[272px] max-h-[380px]  w-[272px] h-[380px]
        w-[80vw] h-[120vw] sm:w-[37vw] sm:h-[55vw] xl:w-[17vw] xl:h-[29vw] xl:max-w-[18vw] xl:max-h-[30vw] max-w-none xl:mt-15 xl:ml-[10px] md:top-[70px] xl:top-0"
              >
                {/* ✅ Mobile videos */}
                <video
                  src={
                    i === 0
                      ? "/SmarterMobileCard1_Mobile.webm"
                      : "/SmarterMobileCard2_Mobile.webm"
                  }
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain block md:hidden"
                />

                {/* ✅ Desktop videos */}
                <video
                  src={
                    i === 0
                      ? "/SmarterMobileCard1_Desktop.webm"
                      : "/SmarterMobileCard2_Desktop.webm"
                  }
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain hidden md:block"
                />

                <div
                  className={`relative z-10 p-6 sm:p-8 flex flex-col text-white h-full top-[80px]  max-w-[272px] max-h-[380px]
          ${i === 0 ? "text-start md:text-start" : "text-start md:text-end"}`}
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-[#45EEFA] to-[#3598DB] bg-clip-text text-transparent mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[15px] text-white/80 leading-relaxed">
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

        <div className="flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:w-[23%] justify-center items-center ml-[10px]">
          {rightFeaturesTop.map((feature, i) => (
            <ReusableLendingCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmarterLendingCashFlow;
