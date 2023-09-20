import React from "react";
import Framer from "../../components/framer";
import Pricing from "../../components/pricing";

function Pricings() {
  return (
    <section id="pacotes" className="py-32">
      <Framer>
        <div className="flex justify-center flex-col items-center gap-2 mb-16">
          <h1 className="text-primary-black font-black text-3xl text-center">
            Pacotes
          </h1>
          <span className="text-center text-secundary-gray">
            Todas essas funcionalidades por apenas
          </span>
        </div>
        <Pricing />
      </Framer>
    </section>
  );
}

export default Pricings;
