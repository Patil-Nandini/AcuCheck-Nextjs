import React from "react";

const CashFlow = () => {
  return (
    <section
      className="w-full flex flex-col items-center bg-cover bg-center md:min-h-screen lg:gap-[20px] "
      style={{ backgroundImage: "url('/AcuCheck-bg.png')" }}
    >
      <div className="w-full flex justify-center xl:py-10 xl:max-w-[1065px] xl:max-h-[505px]">
        <img
          src="/CashFlow.webp"
          alt="Cash Flow"
          className="w-full max-w-[100%]  md:max-w-[50%] lg:max-w-[30%]  object-contain "
        />
      </div>

      <div
        className="relative flex justify-center py-10  md:max-w-[752px] md:max-h-[360px]  hidden md:block w-[98%] md:h-[47vw] xl:max-w-[74%] xl:max-h-[35vw]"
        style={{
          backgroundImage: "url('/Grapgbg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // height: "35vw",
          // width: "74%",
        }}
      >
        <object
          data="/2-Cash-flow.svg"
          type="image/svg+xml"
          className="absolute md:left-[35px] md:top-[70px] xl:top-25 xl:left-[80] w-32 sm:w-40 md:w-[45%] lg:w-[40%] xl:max-w-[40%]"
          aria-label="Box 1"
        />
        <object
          data="/3-Cash-flow.svg"
          type="image/svg+xml"
          className="absolute md:left-[380px] md:top-[70px] xl:top-25 xl:left-[585] w-32 sm:w-40  md:w-[45%] lg:w-[40%] xl:max-w-[40%]"
          aria-label="Box 2"
        />
      </div>
      <div className="relative w-[100%] flex justify-center py-10 flex flex-col md:hidden gap-[20] items-center sm:flex-row ">
        <object
          data="/2-Cash-flow.svg"
          type="image/svg+xml"
          className=" w-70 sm:w-80 md:w-[40%]"
          aria-label="Box 1"
        />
        <object
          data="/3-Cash-flow.svg"
          type="image/svg+xml"
          className=" w-70 sm:w-80 md:w-[40%]"
          aria-label="Box 2"
        />
      </div>
    </section>
  );
};

export default CashFlow;
