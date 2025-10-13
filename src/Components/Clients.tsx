import React from "react";

const Clients = () => {
  return (
    <section
      className="w-[100%] py-15 bg-no-repeat bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/Clients-bg.png')"
      }}
    >
      <div className="flex justify-center items-center w-[100%]">
        <object
          data="/clients.svg"
          type="image/svg+xml"
          className="w-full  h-20 sm:h-24 md:h-28"
          aria-label="Clients animation"
        />
      </div>
    </section>
  );
};

export default Clients;