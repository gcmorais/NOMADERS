/* eslint-disable no-plusplus */
import React, { useContext } from 'react';
import AreaChart from '../../components/chart/areaChart';
import DonutChart from '../../components/chart/donutChart';
import Table from '../../components/table';
import HeaderApp from '../../components/headerApp';
import HeaderSection from '../../components/headerSection';
import DashInfo from '../../components/dashInfo';
import { ApiContext } from '../../contexts/ApiContext';
import Spinner from '../../components/spinner';

function Dashboard() {
  const { products, isLoading, hasError } = useContext(ApiContext);
  let totalSales = 0;
  let totalProfit = 0;

  for (let i = 0; i < products.length; i++) {
    totalSales += Number(products[i].saleprice);
  }

  for (let i = 0; i < products.length; i++) {
    totalProfit += Number(products[i].saleprice - products[i].cost);
  }

  return (
    <>
      {isLoading && (
        <div className="flex w-full flex-col items-center justify-center">
          <Spinner />
          <p className="dark:text-white">Carregando...</p>
        </div>
      )}
      {(hasError && !isLoading) && (
        <div className="flex w-full flex-col items-center justify-center">
          <p className="dark:text-white">Aconteceu um erro!!!</p>
        </div>
      )}
      {(!isLoading && !hasError) && (
        <section
          data-testid="dashboard-background"
          className="mt-2 w-full rounded-lg bg-secundary-white dark:bg-secundary-blue lg:mt-0"
        >
          <HeaderApp />
          <main className="p-6 lg:2xl:p-6">
            <HeaderSection
              title="Dashboard"
              subtitle="Bem vindo ao seu dashboard"
            />
            <main>
              <div className="mt-10 flex flex-col justify-between gap-2 2xl:flex-row">
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 2xl:w-[55%]">
                  <DashInfo
                    headerText="Vendas Totais"
                    mainValue={`R$ ${totalSales}`}
                    footerText="Vendas em todas as plataformas"
                  />
                  <DashInfo
                    headerText="Vendas Mensais"
                    mainValue="R$ 4,500"
                    footerValue="+7%"
                    footerText="ao mês anterior"
                    icon="green"
                  />
                  <DashInfo
                    headerText="Lucro Total"
                    mainValue={`R$ ${totalProfit}`}
                    footerText="Lucro de todas as plataformas"
                  />
                  <DashInfo
                    headerText="Lucro Mensal"
                    mainValue="R$ 7,500"
                    footerValue="-4%"
                    footerText="ao mês anterior"
                    icon="red"
                  />
                </div>
                <div className="mt-2 w-full rounded-lg bg-white dark:bg-primary-blue lg:mt-0 2xl:w-[70%]">
                  <header className="mb-10 flex justify-between">
                    <h3
                      className="w-full border-b-[1px] border-secundary-purple/20 px-10
                  pb-2 pt-5 dark:border-secundary-purple/20
                  dark:text-white/70"
                    >
                      Lucros Mensais
                    </h3>
                  </header>
                  <div className="px-6 text-black/80 dark:text-white">
                    <AreaChart />
                  </div>
                </div>
              </div>
              <div className="mt-2 flex flex-col justify-between gap-2 2xl:flex-row">
                <Table />
                <div className="mt-2 w-full rounded-lg bg-white dark:bg-primary-blue lg:mt-0 2xl:w-[50%]">
                  <header className="mb-5 flex justify-between">
                    <h3
                      className="w-full border-b-[1px] border-secundary-purple/20 px-10
                  pb-2 pt-5 dark:border-secundary-purple/20
                  dark:text-white/70"
                    >
                      Vendas por plataformas
                    </h3>
                  </header>
                  <div className="flex h-full items-center  justify-center pb-10 text-black/80 dark:text-white md:pb-20">
                    <DonutChart />
                  </div>
                </div>
              </div>
            </main>
          </main>
        </section>
      )}
    </>
  );
}

export default Dashboard;
