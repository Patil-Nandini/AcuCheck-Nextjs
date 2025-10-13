"use client";

import Image from "next/image";
import Link from "next/link";

export default function FoundingMember() {
  return (
    <div
      className="bg-gray-50 font-sarabun text-gray-800 overflow-x-hidden w-full flex justify-center items-center bg-no-repeat bg-cover bg-center w-[100%]"
      style={{
        backgroundImage: "url('/bg-founding-members.webp')",
      }}
    >
      <div className="relative container mx-auto px-4 py-16 sm:py-24 w-[80%] lg:w-[90%]  ">
        <section className="relative grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-4xl font-bold text-[#0F1720]-900">
              Founding Member <br /> Benefits
            </h1>
            <p className="mt-6 text-[18px] text-[#0F1720]-600 max-w-[90%]">
              Join the future of digital lending with exclusive advantages for
              early adopters. 
            </p>
            <div className="mt-10 space-y-8 ml-5">
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <object
                      type="image/svg+xml"
                      data="/Flexible-Integration-Options.svg"
                      className="w-22 h-22"
                      aria-label="Flexible Integration Options icon"
                    >
                      <Image
                        src="/Flexible-Integration-Options.svg"
                        alt="Flexible Integration Options icon"
                        width={88}
                        height={88}
                        className="w-22 h-22"
                        loading="lazy"
                      />
                    </object>
                  </div>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Flexible Integration Options
                  </h3>
                  <p className="mt-1 text-gray-600 text-[18px]">
                    Multiple integration methods including API, SDK, and
                    white-label solutions to fit your existing infrastructure
                    seamlessly.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <object
                      type="image/svg+xml"
                      data="/Easy-3-Step-Setup .svg"
                      className="w-22 h-22"
                      aria-label="Easy 3-Step Setup icon"
                    >
                      <Image
                        src="/Easy-3-Step-Setup.svg"
                        alt="Easy 3-Step Setup icon"
                        width={88}
                        height={88}
                        className="w-22 h-22"
                        loading="lazy"
                      />
                    </object>
                  </div>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Easy 3-Step Setup
                  </h3>
                  <p className="mt-1 text-gray-600 text-[18px]">
                    Get up and run in minutes, not months. Our streamlined
                    onboarding process ensures you're making smarter lending
                    decisions today. 
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-16 flex justify-start gap-4">
              <Link href="/under-renovation">
                <button
                  type="button"
                  className="flex items-center justify-center h-[95px] text-white font-semibold cursor-pointer w-[270px] sm:w-[330px] px-7"
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
                    src="/User.svg"
                    alt="User"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                  <span className="ml-2 whitespace-nowrap">
                    Claim Your Founding Member Status 
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center xl:justify-end items-center w-full">
            <Image
              src="/Mask-group.png"
              alt="Cash flow is the new credit score illustration"
              width={1200}
              height={800}
              className="w-[85%] h-auto lg:w-[60%] xl:w-[85%]"
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
