import React from 'react';
import Button from '../../components/button';
import Platform from '../../components/platform';
import Framer from '../../components/framer';

function Integration() {
  return (
    <section id="integração" className="py-28">
      <Framer>
        <div className="flex justify-center flex-col items-center gap-14">
          <div className="flex justify-center flex-col items-center gap-2">
            <h1 className="text-primary-black font-black text-3xl text-center">
              Integração
            </h1>
            <span className="text-center text-secundary-gray">
              Trabalhamos com as principais plataformas do mercado
            </span>
          </div>
          <div className="grid grid-cols-2 gap-7 lg:flex">
            <Platform img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/1442px-Shopee_logo.svg.png" />
            <Platform img="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" />
            <Platform img="https://www.svgrepo.com/show/303503/shopify-logo.svg" />
            <Platform img="https://companieslogo.com/img/orig/AMER3.SA-14d684ad.png?t=1644356258" />
            <Platform img="https://seeklogo.com/images/M/mercado-livre-logo-D1DC52B13E-seeklogo.com.png" />
            <Platform img="data:image/png;base64,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" />
          </div>
          <Button link="/login">Ver todas</Button>
        </div>
      </Framer>
    </section>
  );
}

export default Integration;
