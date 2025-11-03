"use client";

import Image from "next/image";

export default function AbilityToPay() {
  return (
    <main
      className="relative  px-6 py-8 bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/AbilityPayBg.png')",
      }}
    >
      <div className="relative flex-1  overflow-hidden rounded-[36px] hidden md:block 2xl:max-w-[1450px]">
        <Image
          src="/AbilityToPay.png"
          alt="banner"
          width={1920} 
          height={1080}
          className="object-cover w-full h-full"
          priority 
        />
      </div>
      <main className="flex flex-col items-center justify-start min-h-screen px-5 py-8 bg-[#F4FBFF] font-[Sarabun] md:hidden">
        <section className="w-full mt-4 text-center">
          <h1 className="text-[35px] font-extrabold leading-tight text-[#0F1720]">
            Ability to Pay -
            <br />
            Approve the{" "}
            <span
              className="
              inline-block text-white font-extrabold rounded-[60px]
              bg-[url('https://acufi.com/wp-content/uploads/2025/09/new-bg.webp')]
              bg-cover bg-center bg-no-repeat
              px-4 py-2 ml-1 text-[35px]
            "
            >
              RIGHT
            </span>
          </h1>
          <h1 className="text-[35px] font-extrabold text-[#0F1720] leading-tight">
            Loan Amount
          </h1>
        </section>

        {/* Quote */}
        <div className="relative mt-4 max-w-[350px] p-4 text-[#0F1720]/80">
          <span className="absolute top-1 left-2 text-2xl font-serif opacity-80">
            “
          </span>
          <p className="text-[18px] leading-relaxed">
            Too many lenders find out a borrower can&apos;t afford the payment…
            after the loan is issued.{" "}
            <span className="font-semibold text-[#0F1720]">AcuCheck</span>{" "}
            solves that by calculating affordability using real-time bank data.
          </p>
          <span className="absolute bottom-0 right-2 text-[#073698] text-2xl font-serif">
            ”
          </span>
        </div>

        {/* Example Calculation Box */}
        <div className="mt-4 w-full max-w-[380px] rounded-[16px] border border-[#BBD3F3] bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
          <div className="bg-white border border-[#BBD3F3] rounded-[12px] py-2 px-4 text-center mb-4">
            <span className="text-[16px] font-semibold text-[#1F76D5]">
              Example Calculation
            </span>
          </div>

          {/* Card 1 */}
          <div className="bg-[url('/MobileFrame1.png')] bg-cover bg-center bg-no-repeat rounded-[16px] py-6 mb-4 text-center shadow">
            <h2 className="text-[28px] font-extrabold text-[#00b871]">
              $2,500
            </h2>
            <p className="text-[28px] mt-2 text-[#0F1720]">“</p>
            <p className="text-[16px] font-semibold text-[#0F1720] mt-2">
              Monthly Net Income
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[url('/MobileFrame2.png')] bg-cover bg-center bg-no-repeat rounded-[16px] py-6 mb-4 text-center shadow">
            <h2 className="text-[28px] font-extrabold text-white">$2,200</h2>
            <p className="text-[28px] mt-2 text-[rgba(228,228,228,0.7)]">“</p>
            <p className="text-[16px] font-semibold text-[#E4E4E4] mt-2">
              Fixed Expenses
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[url('/MobileFrame1.png')] bg-cover bg-center bg-no-repeat rounded-[16px] py-6 mb-4 text-center shadow">
            <h2 className="text-[28px] font-extrabold text-[#fa504b]">$400</h2>
            <p className="text-[28px] mt-2 text-[#0F1720]">“</p>
            <p className="text-[16px] font-semibold text-[#0F1720] mt-2">
              Proposed Payment
            </p>
          </div>

          {/* Result Box */}
          <div className="bg-[#FA504B1A] text-[#FA504B] text-[15px] font-medium rounded-[12px] py-3 px-4 text-center">
            Result: Negative cash flow – High risk of default
          </div>
        </div>
      </main>
      {/* <div className="max-w-[1500px] mx-auto relative h-[907px] hidden">
        <div className="absolute inset-x-3 top-10 z-10 font-extrabold">
          <div className="mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-7 w-full max-w-[1400px]">
            <div className="relative flex-1 max-w-[1147px] h-[300px] overflow-hidden rounded-[36px]">
              <img
                src="/CombinedBg.png"
                alt="banner"
                className="hidden md:block absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>

          <section className="relative w-full md:max-w-[512px] mt-2 ml-[30px] font-[Sarabun] text-[#0f1720] z-20 md:top-[-200px] md:left-[30px]">
            <div className="flex flex-col w-[320px] md:w-full">
              <h1 className="text-[30px] leading-[1.167] font-extrabold">
                Ability to Pay -
              </h1>

              <div className="flex items-center gap-3 mt-1">
                <h1 className="text-[30px] leading-[1.167] font-extrabold">
                  Approve the
                </h1>

                <span
                  className="
              inline-block text-white font-extrabold rounded-[60px]
              bg-[url('https://acufi.com/wp-content/uploads/2025/09/new-bg.webp')]
              bg-cover bg-no-repeat bg-center
              align-middle
              text-[24px] sm:text-[26px] md:text-[28px] lg:text-[25px]
              px-8 py-3
            "
                >
                  RIGHT
                </span>
              </div>

              <h1 className="text-[30px] leading-[1.167] font-extrabold mt-[-6px]">
                Loan Amount
              </h1>
            </div>

            <div className="max-w-[350px]  text-[#0F1720] font-[Sarabun] rounded-[12px] p-4 leading-relaxed ml-[-10px]">
              <p className="text-[16px] text-[#0F1720]/80  font-normal">
                <span className="text-[#0F1720] text-[20px] font-bold  mr-[2px]">
                  “
                </span>
                Too many lenders find out a borrower can&apos;t afford the
                payment… after the loan is issued.{" "}
                <span className="font-semibold text-[16px] text-[#0F1720]">
                  AcuCheck
                </span>{" "}
                solves that by calculating affordability using real-time bank
                data.
                <span className="text-[#0F1720] text-[20px] font-bold  ml-[2px]">
                  ”
                </span>
              </p>
            </div>
          </section>
        </div>

        <section className="absolute left-20 right-10 top-[410px] z-20 h-[50%] max-w-[1352px] max-h-[399px]">
          <Image
            src="/Frame.png"
            alt="Decorative frame"
            fill
            className="absolute -left-10 -top-2 object-cover opacity-95 hidden md:block"
            priority
          />

          <div
            className="
    absolute top-[238px] left-[70px]
    max-w-[280px] w-[calc(100%-156px)]
    rounded-[24px] p-[20px]
    shadow-[0px_8px_10px_-8.79px_#0000001A]
    backdrop-blur-[11.15915298461914px] hidden md:block
  "
            style={{
              background:
                "linear-gradient(116.3deg, rgba(208, 232, 255, 0.6) 30.52%, rgba(245, 250, 255, 0.6) 88.02%)",
              border: "1.65px solid",
              borderImageSource:
                "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 99.41%)",
            }}
          >
            <div className="bg-white rounded-[20px] p-5  max-h-[70px] hidden md:block">
              <div className="text-[32px] font-semibold relative bottom-[12px]">
                <span className="bg-clip-text text-transparent text-[20px] bg-gradient-to-r from-[#1F76D5] via-[#3699E7] to-[#377ADF] ">
                  Example Calculation
                </span>
              </div>
            </div>
          </div>

          <div
            className="absolute top-[-50px] lg:left-[224px] xl:left-[318px] w-[990px]  bg-no-repeat bg-cover flex justify-between px-[28px] hidden lg:block"
            style={{
              backgroundImage: "url('/combinedCardsAbility.png')",
            }}
          >
            <div className="w-[300px] h-[315px] flex flex-col items-center justify-center relative top-[40px] left-[25px]">
              <h1 className="text-[36px] font-extrabold text-[#00b871] uppercase leading-none">
                $2,500
              </h1>
              <h2 className="text-[40px] mt-3 text-[#0f1720]">“</h2>
              <h3 className="text-lg mt-4 text-[#0f1720] font-semibold text-center">
                Monthly Net Income
              </h3>
            </div>

            <div className="w-[322px] h-[315px] flex flex-col items-center justify-center relative top-[40px] left-[-2px] ">
              <h1 className="text-[36px] font-extrabold text-white uppercase leading-none">
                $2,200
              </h1>
              <h2 className="text-[40px] mt-3 text-[rgba(228,228,228,0.7)]">
                “
              </h2>
              <h3 className="text-lg mt-4 text-[#e4e4e4] font-semibold text-center">
                Fixed Expenses
              </h3>
            </div>

            <div className="w-[322px] h-[315px] flex flex-col items-center justify-center relative top-[40px] left-[-30px]">
              <h1 className="text-[36px] font-extrabold text-[#fa504b] uppercase leading-none">
                $400
              </h1>
              <h2 className="text-[40px] mt-3 text-[#0f1720]">“</h2>
              <h3 className="text-lg mt-4 text-[#0f1720] font-semibold text-center">
                Proposed Payment
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 lg:hidden mt-10 w-[320px]">

            <div
              className="w-[90%] max-w-[350px] h-[300px] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center rounded-[24px] shadow-md"
              style={{
                backgroundImage: "url('/MobileFrame1.png')",
              }}
            >
              <h1 className="text-[32px] font-extrabold text-[#00b871] uppercase leading-none">
                $2,500
              </h1>
              <h2 className="text-[36px] mt-3 text-[#0f1720]">“</h2>
              <h3 className="text-[16px] mt-4 text-[#0f1720] font-semibold text-center">
                Monthly Net Income
              </h3>
            </div>

            <div
              className="w-[90%] max-w-[350px] h-[300px] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center rounded-[24px] shadow-md"
              style={{
                backgroundImage: "url('/MobileFrame2.png')",
              }}
            >
              <h1 className="text-[32px] font-extrabold text-white uppercase leading-none">
                $2,200
              </h1>
              <h2 className="text-[36px] mt-3 text-[rgba(228,228,228,0.7)]">
                “
              </h2>
              <h3 className="text-[16px] mt-4 text-[#e4e4e4] font-semibold text-center">
                Fixed Expenses
              </h3>
            </div>

            <div
              className="w-[90%] max-w-[350px] h-[300px] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center rounded-[24px] shadow-md"
              style={{
                backgroundImage: "url('/MobileFrame3.png')",
              }}
            >
              <h1 className="text-[32px] font-extrabold text-[#fa504b] uppercase leading-none">
                $400
              </h1>
              <h2 className="text-[36px] mt-3 text-[#0f1720]">“</h2>
              <h3 className="text-[16px] mt-4 text-[#0f1720] font-semibold text-center">
                Proposed Payment
              </h3>
            </div>
          </div>

          <div className="absolute top-[280px] left-[514px] right-[30px] bg-white/50 p-4 rounded-[18px] border border-white text-[#fa504b] text-center hidden md:block">
            <div className="bg-[#FA504B1A] p-4 rounded-[18px] text-[#FA504B]">
              Result: Negative cash flow - High risk of default
            </div>
          </div>
        </section>
      </div> */}
    </main>
  );
}
