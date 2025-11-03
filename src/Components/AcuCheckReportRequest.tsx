import React from "react";

const AcuCheckReportRequest = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center flex flex-col items-center justify-start px-4 sm:px-10 py-20"
      style={{
        backgroundImage: "url('SendCustomer-bg.png')",
      }}
    >
      <h2 className="mt-8 text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Send Your Customer A Text Or Email
      </h2>
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left side: Text message */}
        <div className="relative w-[340px] h-[420px] md:w-[385px] md:h-[400px] flex items-center justify-center rounded-3xl shadow-xl overflow-hidden bg-gradient-to-br from-blue-500/60 to-blue-300/80">
          <video
            src="/textvideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
          {/* AcuCheck Report Request Link bubble */}
          <object
            data="/AimatedBlue.svg"
            type="image/svg+xml"
            className="absolute left-1/2 -translate-x-1/2 bottom-[-9px] z-10 w-[400px] pointer-events-none"
            aria-label="AcuCheck Report Request Link"
          />
        </div>
        <div className="relative w-[340px] h-[420px] md:w-[385px] md:h-[390px] flex items-center justify-center rounded-3xl shadow-xl overflow-hidden bg-gradient-to-br from-blue-500/60 to-blue-300/80">
          <video
            src="/emailvideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
          <object
            data="/AimatedSecond.svg"
            type="image/svg+xml"
            className="absolute left-1/2 -translate-x-1/2 bottom-[-9] z-10 w-[400px] pointer-events-none"
            aria-label="Searching"
          />
        </div>
      </div>
    </section>
  );
};

export default AcuCheckReportRequest;