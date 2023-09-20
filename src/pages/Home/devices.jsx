import React from "react";
import Framer from "../../components/framer";
import GooglePlay from "../../assets/googleplay.svg";
import AppStore from "../../assets/appstore.svg";
import Demo from "../../assets/disponivel.svg";

function Devices() {
  return (
    <section className="flex justify-center">
      <Framer>
        <div className="w-[100%] bg-primary-white pt-10 pb-5 font-inter rounded-lg lg:px-28">
          <div className="flex justify-center flex-col items-center">
            <h1 className="w-80 text-primary-black font-black text-3xl text-center">
              Web ou mobile, estamos disponíveis
            </h1>
          </div>
          <div className="w-[90%] lg:w-[100%] m-auto flex justify-center">
            <img src={Demo} alt="Demo-Imgs" />
          </div>
          <div className="flex justify-center">
            <button type="button">
              <img src={GooglePlay} alt="googleplay" />
            </button>
            <button type="button">
              <img src={AppStore} alt="appstore" />
            </button>
          </div>
        </div>
      </Framer>
    </section>
  );
}

export default Devices;
