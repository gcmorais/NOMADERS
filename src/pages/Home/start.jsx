import React from "react";
import Button from "../../components/button";

function Start() {
  return (
    <section className="mt-20 lg:pt-52 pb-20">
      <div className="flex justify-center flex-col items-center gap-4">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-primary-black font-black text-2xl text-center">
            Vamos começar sua jornada?
          </h1>
        </div>
        <Button link="/app/signup">Registrar</Button>
      </div>
    </section>
  );
}

export default Start;
