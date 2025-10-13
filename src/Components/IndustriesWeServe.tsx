"use client";
import React from "react";

const industries = [
  {
    title: "Short-Term Lenders",
    description: "Reduce risk in high-velocity lending environments",
    icon: "/Industry1.svg",
    cardBg: "from-[#F9EBE7] to-[#F2F8FF]",
    iconBg: "bg-[#FFD9D1]",
  },
  {
    title: "BNPL Providers",
    description: "Instant approval decisions with real-time affordability checks",
    icon: "/Industry2.svg",
    cardBg: "from-[#FFF6E0] to-[#F2F8FF]",
    iconBg: "bg-[#FFE9AA]",
  },
  {
    title: "Medical Finance",
    description: "Assess patient payment capacity without credit checks",
    icon: "/Industry3.svg",
    cardBg: "from-[#F0F5FF] to-[#F2F8FF]",
    iconBg: "bg-[#D8E2FF]",
  },
  {
    title: "Auto Loans",
    description: "Verify borrower affordability instantly with live data",
    icon: "/Industry1.svg",
    cardBg: "from-[#F9EBE7] to-[#F2F8FF]",
    iconBg: "bg-[#FFD9D1]",
  },
  {
    title: "Mortgage Lenders",
    description:
      "Accelerate loan processing with fast, accurate financial verification",
    icon: "/Industry2.svg",
    cardBg: "from-[#FFF6E0] to-[#F2F8FF]",
    iconBg: "bg-[#FFE9AA]",
  },
  {
    title: "Credit Unions",
    description: "Empower members with fair, data-driven lending assessments",
    icon: "/Industry3.svg",
    cardBg: "from-[#F0F5FF] to-[#F2F8FF]",
    iconBg: "bg-[#D8E2FF]",
  },
];

const IndustriesWeServe = () => {
  return (
    <section
      className="
        relative
        w-full
        max-w-6xl
        mx-auto
        rounded-3xl
        px-7
        py-12
        bg-gradient-to-br
        from-[#E3EEFF] to-[#D4E2FA]
        shadow-lg
        min-h-[640px]
        md:mt-8
        my-4
        "
      style={{
        backgroundImage: "url('/Industies-bg.png'), linear-gradient(135deg, #E3EEFF 0%, #D4E2FA 100%)",
        backgroundSize: "cover, 100% 100%",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "center center, center center",
      }}
    >
      {/* Heading */}
      <div className="mb-8 w-full max-w-3xl text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">
          Industries We Serve
        </h2>
        <p className="mt-2 text-gray-700 text-base md:text-lg max-w-2xl">
          Trusted by innovative lenders across financial services for modern fintech solutions.
        </p>
      </div>

      <div className="w-full">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-x-6 gap-y-6
          "
        >
          {industries.map((industry, i) => (
            <article
              key={i}
              className={`
                bg-white
                rounded-2xl
                p-6
                flex flex-col
                gap-3
                items-start
                justify-start
                h-200px
                w-full
                shadow-md
                transition-transform
                duration-200
                hover:scale-[1.03]
                border border-transparent
                hover:border-blue-200
              `}
              style={{
                background:
                  "linear-gradient(135deg, #fff 65%, #f2f8ff 100%)",
              }}
            >
              <div className={`w-20 h-20 rounded-xl flex items-center justify-center ${industry.iconBg} mb-2`}>
                <img
                  src={industry.icon}
                  alt={industry.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900">
                {industry.title}
              </h3>
              <p className="text-gray-600 text-sm leading-snug">
                {industry.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;