import React from 'react';
import { Accordion } from '@prismane/core';
import background from '../../assets/stars-background.svg';
import Framer from '../../components/framer';

function Faq() {
  return (
    <section id="faq" className="bg-primary-white lg:h-[600px] py-28 font-inter">
      <Framer>
        <div className="flex justify-center flex-col py-20 items-center gap-14 2xl:w-[50%] lg:w-[73%] lg:h-[600px] m-auto bg-primary-indigo lg:rounded-lg lg:mt-30">
          <img src={background} alt="bg-img" className="hidden absolute w-[45%] lg:block" />
          <div className="flex justify-center">
            <h1 className="text-white font-black text-3xl text-center">
              Perguntas frequentes
            </h1>
          </div>
          <Accordion className="lg:w-[70%] gap-3 z-0 p-4">
            <Accordion.Item value="first" className="rounded-md bg-white border-none">
              <Accordion.Control className="rounded-md px-6 font-medium">
                Posso gerar o histórico de vendas por meio do app ?
                <div className="bg-primary-white rounded-full p-1">
                  <Accordion.Icon />
                </div>
              </Accordion.Control>
              <Accordion.Panel className="m-auto lg:w-[95%]">
                <div className="border-t-[1px] pt-2">
                  Sim, nosso app gerencia as vendas mensais/anuais e
                  você pode no momento que desejar imprimir o histórico,
                  facilitando a organização dos documentos necessários
                  para pagamentos de impostos, ou para seu controle pessoal.
                </div>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="second" className="rounded-md bg-white border-none">
              <Accordion.Control className="rounded-md px-6 font-medium">
                Vendas nas plataformas são automaticamente inseridas no gerenciador ?
                <div className="bg-primary-white rounded-full p-1">
                  <Accordion.Icon />
                </div>
              </Accordion.Control>
              <Accordion.Panel className="m-auto lg:w-[95%]">
                <div className="border-t-[1px] pt-2">
                  Sim, nosso app gerencia as vendas mensais/anuais e
                  você pode no momento que desejar imprimir o histórico,
                  facilitando a organização dos documentos necessários
                  para pagamentos de impostos, ou para seu controle pessoal.
                </div>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="third" className="rounded-md bg-white border-none">
              <Accordion.Control className="rounded-md px-6 font-medium">
                Posso utilizar o mesmo gerenciador em outras contas ?
                <div className="bg-primary-white rounded-full p-1">
                  <Accordion.Icon />
                </div>
              </Accordion.Control>
              <Accordion.Panel className="m-auto lg:w-[95%]">
                <div className="border-t-[1px] pt-2">
                  Sim, nosso app gerencia as vendas mensais/anuais e
                  você pode no momento que desejar imprimir o histórico,
                  facilitando a organização dos documentos necessários para
                  pagamentos de impostos, ou para seu controle pessoal.
                </div>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="four" className="rounded-md bg-white border-none">
              <Accordion.Control className="rounded-md px-6 font-medium">
                O plano grátis me garante acesso para sempre ?
                <div className="bg-primary-white rounded-full p-1">
                  <Accordion.Icon />
                </div>
              </Accordion.Control>
              <Accordion.Panel className="m-auto lg:w-[95%]">
                <div className="border-t-[1px] pt-2">
                  Sim, nosso app gerencia as vendas mensais/anuais e
                  você pode no momento que desejar imprimir o histórico,
                  facilitando a organização dos documentos necessários para
                  pagamentos de impostos, ou para seu controle pessoal.
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </Framer>
    </section>
  );
}

export default Faq;
