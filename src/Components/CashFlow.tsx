import React from "react";

const CashFlow = () => {
  return (
    <section
      className="w-full flex flex-col items-center bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/AcuCheck-bg.png')" }}
    >
      <div className="w-full flex justify-center py-10">
        <img
          src="/CashFlow.webp"
          alt="Cash Flow"
          className="w-full max-w-[100%] md:max-w-[20%] object-contain"
        />
      </div>

      <div
        className="relative w-[100vw] flex justify-center py-10 hidden md:block"
        style={{
          backgroundImage: "url('/Grapgbg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "35vw",
          width: "74%",
        }}
      >
        <object
          data="/2-Cash-flow.svg"
          type="image/svg+xml"
          className="absolute top-35 left-[110] w-32 sm:w-40 md:w-[40%]"
          aria-label="Box 1"
        />
        <object
          data="/3-Cash-flow.svg"
          type="image/svg+xml"
          className="absolute top-35 right-[110] w-32 sm:w-40 md:w-[40%]"
          aria-label="Box 2"
        />
      </div>
      <div
        className="relative w-[100%] flex justify-center py-10 flex flex-col md:hidden gap-[20] items-center"
      >
        <object
          data="/2-Cash-flow.svg"
          type="image/svg+xml"
          className=" w-70 sm:w-40 md:w-[40%]"
          aria-label="Box 1"
        />
        <object
          data="/3-Cash-flow.svg"
          type="image/svg+xml"
          className=" w-70 sm:w-40 md:w-[40%]"
          aria-label="Box 2"
        />
      </div>
    </section>
  );
};

export default CashFlow;
