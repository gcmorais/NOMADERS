import React, { useRef } from 'react';
import Portal from './Portal';
import { useReactToPrint } from 'react-to-print';
import ReportsButton from '../button/reportsButton';
import DashInfo from '../dashInfo';
import moment from 'moment';
import AreaChart from '../chart/areaChart';

function Reports({isOpen, setOpen, totalSales, totalProfit, January, February, March, April, May, June, July, August, September, October,November, December}) {
  const contentDocument = useRef();

  const handlePrint = useReactToPrint({
    content: () => contentDocument.current,
  });
  
  const onClose = () => {
    setOpen(false)
  };

  const dataAtual = moment().format('DD-MM-YYYY');

  if(isOpen){
    return (
      <Portal navLink={onClose} width="w-[900px]" boxStyle={"overflow-scroll overflow-x-hidden h-[600px]"}>
        <header className='flex items-center justify-between pb-6'>
          <p className='opacity-25'>
            Para baixar clique no botão:
          </p>
          <ReportsButton click={handlePrint} icon={true} text={"Baixar"} aditionalStyles={'p-3 w-[120px]'}/>
        </header>
        <main ref={contentDocument} className='p-10'>
          <header className='flex items-center justify-between pb-6'>
            <h1>Reports financeiros</h1>
            <h1>
              <span className='opacity-30 mr-2'>
                emitido em:
              </span> 
              {dataAtual}
            </h1>
          </header>
          <main>
            <section>
              <hr />
              <h3 className='mt-4'>Relação de lucro totais: </h3>
              <br />
              <DashInfo
                headerText="Vendas Totais"
                mainValue={`R$ ${totalSales}`}
                footerText="totais em todas as plataformas"
                icon={false}
              />
              <br />
              <DashInfo
                headerText="Lucro Total"
                mainValue={`R$ ${totalProfit}`}
                footerText="totais de todas as plataformas"
                icon={false}
              />
              <br />
            </section>

            <section>
              <hr />
              <h3 className='mt-4'>Relação de lucro por mês: </h3>
              <br />
              <AreaChart 
                January={January}
                February={February}
                March={March}
                April={April}
                May={May}
                June={June}
                July={July}
                August={August}
                September={September}
                October={October}
                November={November}
                December={December}
              />
            </section>
          </main>
          <footer>
            <p className='opacity-30 text-center mt-52'>
              para mais informações acesse: www.nomaders.com
            </p>
          </footer>
        </main>
      </Portal>
    )
  }

  return null;
}

export default Reports