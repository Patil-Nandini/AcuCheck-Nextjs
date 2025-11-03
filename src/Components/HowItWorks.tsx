"use client";
import React, { useEffect, useState } from "react";

const HowItWorks = () => {
  const steps = [
    {
      title: "CONNECT BANK ACCOUNT",
      description:
        "Borrowers securely connect their bank account through our trusted platform with bank-level encryption.",
    },
    {
      title: "ANALYZE CASH FLOW",
      description:
        "Analyze real-time banking data, transactions, income patterns, and spending behavior in seconds.",
    },
    {
      title: "MAKE SMART DECISIONS",
      description:
        "Get decision-ready insights including DTI, ability to pay, NSF alerts, and risk scoring.",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
        setFade(true);
      }, 350);
    }, 6000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center pb-16 lg:py-16 px-4 sm:px-8 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg-how-it-works.svg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/60 pointer-events-none" />

      <div className="relative z-10 mb-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          How It Works
        </h2>
        <p className="mt-4 text-gray-700 text-base sm:text-lg max-w-xl mx-auto">
          Transform your lending process in 3 simple steps with our easy <br />
          <span className="font-semibold text-gray-900">
            API integration
          </span>{" "}
          or <span className="font-semibold text-gray-900">Lender Portal.</span>
        </p>
      </div>

      {/* Globe */}
      <div className="relative z-10 w-full flex justify-center items-center mt-12 mb-8">
        <div className="relative w-full max-w-3xl flex items-center justify-center">
          <video
            src="/5-How-it-works.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] hidden lg:block"
          />
          <object
            type="image/svg+xml"
            data="/How-it-works-mobile.svg"
            className="w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] lg:hidden"
          ></object>

          {/* Desktop text positions */}
          <div className="hidden lg:block absolute w-full h-full pointer-events-none">
            {/* Step 01 */}
            <div className="absolute right-[-110px] top-[2px] w-72 text-right">
              <h3 className="font-bold text-lg text-[#000000] mb-1 text-start">
                CONNECT BANK ACCOUNT
              </h3>
              <p className="text-[#0F1720] text-[16px] text-start">
                Borrowers securely connect their bank account through our
                trusted platform with bank-level encryption.
              </p>
            </div>
            {/* Step 02 */}
            <div className="absolute left-[-80px] bottom-[26%] w-72 text-left">
              <h3 className="font-bold text-lg text-[#000000] mb-1 text-start">
                ANALYZE CASH FLOW
              </h3>
              <p className="text-[#0F1720] text-[16px] text-start">
                Analyze real-time banking data, transactions, income patterns,
                and spending behavior in seconds.
              </p>
            </div>
            {/* Step 03 */}
            <div className="absolute right-[-120px] bottom-[10%] w-72 text-right">
              <h3 className="font-bold text-lg text-[#000000] mb-1 text-start">
                MAKE SMART DECISIONS
              </h3>
              <p className="text-[#0F1720] text-[16px] text-start">
                Get decision-ready insights including DTI, ability to pay, NSF
                alerts, and risk scoring.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile fade text */}
      <div
        key={currentStep}
        className={`block lg:hidden text-center relative z-10 px-4 transition-opacity duration-500 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="font-bold text-lg text-[#000000] mb-2">
          {steps[currentStep].title}
        </h3>
        <p className="text-[#0F1720] text-sm sm:text-base max-w-xs mx-auto">
          {steps[currentStep].description}
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
