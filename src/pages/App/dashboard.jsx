/* eslint-disable no-plusplus */
import React, { useContext, useEffect, useState } from "react";
import AreaChart from "../../components/chart/areaChart";
import DonutChart from "../../components/chart/donutChart";
import Table from "../../components/table";
import HeaderApp from "../../components/headerApp";
import HeaderSection from "../../components/headerSection";
import DashInfo from "../../components/dashInfo";
import { ApiContext } from "../../contexts/ApiContext";
import Spinner from "../../components/spinner";
import ErrorMessage from "../../components/errorMessage";
import Reports from "../../components/modal/reports";

function Dashboard() {
  const { products, isLoading, hasError, getUser } = useContext(ApiContext);

  const [openModal, setOpenModal] = useState(false);

  let totalSales = 0;
  let totalProfit = 0;

  // per month

  let valueDefault = 0;
  let valueComp = 0;

  let valueJanuary = 0;
  let valueFebruary = 0;
  let valueMarch = 0;
  let valueApril = 0;
  let valueMay = 0;
  let valueJune = 0;
  let valueJuly = 0;
  let valueAugust = 0;
  let valueSeptember = 0;
  let valueOctober = 0;
  let valueNovember = 0;
  let valueDecember = 0;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateObj = new Date();
  let monthIndex = dateObj.getMonth();
  let monthName = monthNames[monthIndex];
  let monthYear = dateObj.getFullYear();

  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "01") {
      valueJanuary += Number(products[i].saleprice);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "02") {
      valueFebruary += Number(products[i].saleprice);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "03") {
      valueMarch += Number(products[i].saleprice);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "04") {
      valueApril += Number(products[i].saleprice);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "05") {
      valueMay += Number(products[i].saleprice);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "06") {
      valueJune += Number(products[i].saleprice);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "07") {
      valueJuly += Number(products[i].saleprice);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "08") {
      valueAugust += Number(products[i].saleprice);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "09") {
      valueSeptember += Number(products[i].saleprice);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "10") {
      valueOctober += Number(products[i].saleprice);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "11") {
      valueNovember += Number(products[i].saleprice);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "12") {
      valueDecember += Number(products[i].saleprice);
    }
  }

  switch (monthName) {
    case "January":
      if (monthYear === 2024) {
        valueDefault = valueJanuary;
        valueComp = 0;
      }
      break;
    case "February":
      if (monthYear === 2024) {
        valueDefault = valueFebruary;
        if (valueJanuary > 0) {
          valueComp = [valueFebruary / valueJanuary - 1] * 100;
        } else {
          valueComp = 0;
        }
      }
      break;
    case "March":
      if (monthYear === 2024) {
        valueDefault = valueMarch;
        valueComp = [valueMarch / valueFebruary - 1] * 100;
      }
      break;
    case "April":
      if (monthYear === 2024) {
        valueDefault = valueApril;
        valueComp = [valueApril / valueMarch - 1] * 100;
      }
      break;
    case "May":
      if (monthYear === 2024) {
        valueDefault = valueMay;
        valueComp = [valueMay / valueApril - 1] * 100;
      }
      break;
    case "June":
      if (monthYear === 2024) {
        valueDefault = valueJune;
        valueComp = [valueJune / valueMay - 1] * 100;
      }
      break;
    case "July":
      if (monthYear === 2024) {
        valueDefault = valueJuly;
        valueComp = [valueJuly / valueJune - 1] * 100;
      }
      break;
    case "August":
      if (monthYear === 2024) {
        valueDefault = valueAugust;
        valueComp = [valueAugust / valueJuly - 1] * 100;
      }
      break;
    case "September":
      if (monthYear === 2024) {
        valueDefault = valueSeptember;
        valueComp = [valueSeptember / valueAugust - 1] * 100;
      }
      break;
    case "October":
      if (monthYear === 2024) {
        valueDefault = valueOctober;
        valueComp = [valueOctober / valueSeptember - 1] * 100;
      }
      break;
    case "November":
      if (monthYear === 2024) {
        valueDefault = valueNovember;
        valueComp = [valueNovember / valueOctober - 1] * 100;
      }
      break;
    case "December":
      if (monthYear === 2024) {
        valueDefault = valueDecember;
        valueComp = [valueDecember / valueNovember - 1] * 100;
      }
      break;
  }

  let profitDefault = 0;
  let profitComp = 0;

  let profitJanuary = 0;
  let profitFebruary = 0;
  let profitMarch = 0;
  let profitApril = 0;
  let profitMay = 0;
  let profitJune = 0;
  let profitJuly = 0;
  let profitAugust = 0;
  let profitSeptember = 0;
  let profitOctober = 0;
  let profitNovember = 0;
  let profitDecember = 0;

  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "01") {
      profitJanuary += Number(products[i].saleprice - products[i].cost);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "02") {
      profitFebruary += Number(products[i].saleprice - products[i].cost);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "03") {
      profitMarch += Number(products[i].saleprice - products[i].cost);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "04") {
      profitApril += Number(products[i].saleprice - products[i].cost);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "05") {
      profitMay += Number(products[i].saleprice - products[i].cost);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "06") {
      profitJune += Number(products[i].saleprice - products[i].cost);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "07") {
      profitJuly += Number(products[i].saleprice - products[i].cost);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "08") {
      profitAugust += Number(products[i].saleprice - products[i].cost);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "09") {
      profitSeptember += Number(products[i].saleprice - products[i].cost);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "10") {
      profitOctober += Number(products[i].saleprice - products[i].cost);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "11") {
      profitNovember += Number(products[i].saleprice - products[i].cost);
    }
  }
  for (let i = 0; i < products.length; i++) {
    const dateValue = products[i].datevalue;
    if (dateValue.substring(3, 5) === "12") {
      profitDecember += Number(products[i].saleprice - products[i].cost);
    }
  }

  switch (monthName) {
    case "January":
      if (monthYear === 2024) {
        profitDefault = profitJanuary;
        profitComp = 0;
      }
      break;
    case "February":
      if (monthYear === 2024) {
        profitDefault = profitFebruary;
        if (profitJanuary > 0) {
          profitComp = [profitFebruary / profitJanuary - 1] * 100;
        } else {
          profitComp = 0;
        }
      }
      break;
    case "March":
      if (monthYear === 2024) {
        profitDefault = profitMarch;
        profitComp = [profitMarch / profitFebruary - 1] * 100;
      }
      break;
    case "April":
      if (monthYear === 2024) {
        profitDefault = profitApril;
        profitComp = [profitApril / profitMarch - 1] * 100;
      }
      break;
    case "May":
      if (monthYear === 2024) {
        profitDefault = profitMay;
        profitComp = [profitMay / profitApril - 1] * 100;
      }
      break;
    case "June":
      if (monthYear === 2024) {
        profitDefault = profitJune;
        profitComp = [profitJune / profitMay - 1] * 100;
      }
      break;
    case "July":
      if (monthYear === 2024) {
        profitDefault = profitJuly;
        profitComp = [profitJuly / profitJune - 1] * 100;
      }
      break;
    case "August":
      if (monthYear === 2024) {
        profitDefault = profitAugust;
        profitComp = [profitAugust / profitJuly - 1] * 100;
      }
      break;
    case "September":
      if (monthYear === 2024) {
        profitDefault = profitSeptember;
        profitComp = [profitSeptember / profitAugust - 1] * 100;
      }
      break;
    case "October":
      if (monthYear === 2024) {
        profitDefault = profitOctober;
        profitComp = [profitOctober / profitSeptember - 1] * 100;
      }
      break;
    case "November":
      if (monthYear === 2024) {
        profitDefault = profitNovember;
        profitComp = [profitNovember / profitOctober - 1] * 100;
      }
      break;
    case "December":
      if (monthYear === 2024) {
        profitDefault = profitDecember;
        profitComp = [profitDecember / profitNovember - 1] * 100;
      }
      break;
  }

  // per year

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
      {hasError && !isLoading && <ErrorMessage />}
      {!isLoading && !hasError && (
        <section
          data-testid="dashboard-background"
          className="mt-2 w-full rounded-lg bg-secundary-white dark:bg-secundary-blue lg:mt-0"
        >
          <HeaderApp />
          <main className="p-6 lg:2xl:p-6">
            <HeaderSection
              title="Dashboard"
              subtitle="Bem vindo ao seu dashboard"
              click={() => setOpenModal(true)}
              visible={true}
            />
            <main>
              <div className="mt-10 flex flex-col justify-between gap-2 2xl:flex-row">
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 2xl:w-[55%]">
                  <DashInfo
                    headerText="Vendas Totais"
                    mainValue={`R$ ${totalSales}`}
                    footerText="totais em todas as plataformas"
                    icon={false}
                  />
                  <DashInfo
                    headerText="Vendas Mensais"
                    mainValue={`R$ ${valueDefault}`}
                    footerValue={valueComp.toFixed(0)}
                    footerText="% em relação ao mês anterior"
                  />
                  <DashInfo
                    headerText="Lucro Total"
                    mainValue={`R$ ${totalProfit}`}
                    footerText="totais de todas as plataformas"
                    icon={false}
                  />
                  <DashInfo
                    headerText="Lucro Mensal"
                    mainValue={`R$ ${profitDefault}`}
                    footerValue={profitComp.toFixed(0)}
                    footerText="% em relação ao mês anterior"
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
                    <AreaChart
                      January={profitJanuary}
                      February={profitFebruary}
                      March={profitMarch}
                      April={profitApril}
                      May={profitMay}
                      June={profitJune}
                      July={profitJuly}
                      August={profitAugust}
                      September={profitSeptember}
                      October={profitOctober}
                      November={profitNovember}
                      December={profitDecember}
                    />
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
      <Reports
        isOpen={openModal}
        setOpen={setOpenModal}
        totalSales={totalSales}
        totalProfit={totalProfit}
        January={profitJanuary}
        February={profitFebruary}
        March={profitMarch}
        April={profitApril}
        May={profitMay}
        June={profitJune}
        July={profitJuly}
        August={profitAugust}
        September={profitSeptember}
        October={profitOctober}
        November={profitNovember}
        December={profitDecember}
      />
    </>
  );
}

export default Dashboard;
