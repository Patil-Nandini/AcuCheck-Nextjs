"use client";
import React from "react";

const AcuCheckBenefits = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat text-white py-18 md:py-24 px-6 md:px-12"
      style={{ backgroundImage: "url('/Acucheck-benifit-bg.png')" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-5 mt-8">AcuCheck Benefits</h2>
        <p className="text-[18px] md:text-[20px] text-gray-200 mb-12 w-[100%] ">
          <span className="font-semibold text-[18px] md:text-[20px]text-white">AcuCheck</span> provides lenders with
          data-driven insights that  <br/> improve decisions and reduce risk.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Card 1 */}
          <div className="relative w-full max-w-[340px] bg-transparent rounded-2xl text-center p-6 flex flex-col items-center justify-end h-[360px]">
            <object
              data="/BetterLoanDecisions.svg"
              type="image/svg+xml"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
            <div className="relative z-10">
              <h3 className="text-lg md:text-[22px] font-semibold mb-2 text-[#FFFFFFCC]">
                Better Loan Decisions
              </h3>
              <p className="text-[18px] leading-relaxed text-[#FFFFFF99]">
                Reduce defaults with real-time banking data that reveals true
                borrower ability to pay.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-full max-w-[340px] bg-transparent rounded-2xl text-center p-6 flex flex-col items-center justify-end h-[360px]">
            <object
              data="/IncreaseApprovalRates.svg"
              type="image/svg+xml"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
            <div className="relative z-10">
              <h3 className="text-lg md:text-[22px] text-[#FFFFFFCC] font-semibold mb-2">
                Increase Approval Rates
              </h3>
              <p className="text-[18px] leading-relaxed text-[#FFFFFF99]">
                Approve more qualified borrowers by seeing their cash flow.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-full max-w-[340px] bg-transparent rounded-2xl text-center p-6 flex flex-col items-center justify-end h-[360px]">
            <object
              data="/ReducedFraudExposure.svg"
              type="image/svg+xml"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
            <div className="relative z-10">
              <h3 className="text-lg md:text-[22px] font-semibold mb-2 text-[#FFFFFFCC] ">
                Reduced Fraud Exposure
              </h3>
              <p className="text-[18px] leading-relaxed text-[#FFFFFF99] w-[95%]">
                Detect loan stacking and fraudulent applications before loan approval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcuCheckBenefits;
