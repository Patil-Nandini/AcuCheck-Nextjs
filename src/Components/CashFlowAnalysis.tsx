import Image from "next/image";

export default function CashFlowAnalysis() {
  return (
    <section className="w-[100%] pt-16 pb-16 lg:pb-0  bg-white h-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Why Lenders Are Switching <br className="hidden sm:block" />
          to Cash Flow Analysis
        </h2>
        <p className="text-gray-600 mt-3 text-[18px] w-[80%] sm:w-[60%] lg:w-[45%]">
          Traditional credit models weren&apos;t built for today&apos;s economy.
          Income volatility, loan stacking, and gig work confuse legacy scoring,
          but not
          <span className="font-semibold pr-[5px]">AcuCheck</span>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-10 relative w-[100%] w-full mb-10">
        <div
          className="flex flex-col w-[100%] max-w-[299px] min-h-[355px]
             p-6 relative bg-cover bg-center"
          style={{ backgroundImage: "url('/red.png')" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/Legacy.png"
              alt="Legacy"
              width={28}
              height={28}
              loading="lazy"
            />
            <h3 className="text-lg font-semibold text-[#17012C]">
              Legacy Credit Tools
            </h3>
          </div>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <Image
                src="/CancelIcon.svg"
                alt="Cancel"
                width={20}
                height={20}
                loading="lazy"
              />
              <span>Static credit reports miss the last 30+ days</span>
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/CancelIcon.svg"
                alt="Cancel"
                width={20}
                height={20}
                loading="lazy"
              />
              <span>IBV just dumps raw data with no insight</span>
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/CancelIcon.svg"
                alt="Cancel"
                width={20}
                height={20}
                loading="lazy"
              />
              <span>Blind to stacking, overdrafts, and payday loans </span>
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/CancelIcon.svg"
                alt="Cancel"
                width={20}
                height={20}
                loading="lazy"
              />
              <span>Complex, outdated tech stacks </span>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <Image
            src="/comparisonWomen.webp"
            alt="Man"
            width={300}
            height={560}
            loading="lazy"
            className="object-cover mt-[30px] lg:mt-[108px] xl:mt-[70px]"
          />
        </div>

        <div
          className="flex flex-col w-full max-w-[299px] min-h-[355px]
          p-6 relative bg-cover bg-center"
          style={{ backgroundImage: "url('/blue.png')" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/AcuCIcon.png"
              alt="AcuCheck"
              width={28}
              height={28}
              loading="lazy"
            />
            <h3 className="text-lg font-semibold text-[#17012C]">Acucheck</h3>
          </div>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <Image
                src="/GreenIcon.png"
                alt="Check"
                width={22}
                height={22}
                loading="lazy"
              />
              <span>
                Live cash flow shows the borrower&apos;s financial reality
                today 
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/GreenIcon.png"
                alt="Check"
                width={22}
                height={22}
                loading="lazy"
              />
              <span>
                Clean, enriched, and decision-ready financial intelligence 
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/GreenIcon.png"
                alt="Check"
                width={22}
                height={22}
                loading="lazy"
              />
              <span>
                Detect active liabilities and high-risk patterns in seconds 
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/GreenIcon.png"
                alt="Check"
                width={22}
                height={22}
                loading="lazy"
              />
              <span>Modern, no-code integration and instant usability </span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="
    relative
    w-full
    h-[85px]
    flex
    items-center
    justify-center
    lg:top-[-56px]
    shadow-md
  "
        style={{
          background:
            "linear-gradient(274.17deg, rgba(239,246,255,0.5) 0%, rgba(227,241,255,0.5) 100%)",
        }}
      >
        <div className="bg-white py-2 flex items-center justify-center w-full backdrop-blur-sm">
          <span className="text-[#054396] text-center text-xl md:text-2xl font-semibold w-full">
            It&apos;s not just bank data; it&apos;s intelligence you can
            underwrite with.
          </span>
        </div>
      </div>
    </section>
  );
}
