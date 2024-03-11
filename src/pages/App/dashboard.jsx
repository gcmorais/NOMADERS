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
  const { isLoading, hasError, produtos, loadUser } = useContext(ApiContext);

  useEffect(() => {
    loadUser();
  }, []);

  const [openModal, setOpenModal] = useState(false);

  let totalSales = 0;
  let totalProfit = 0;

  // per month

  let valueDefault = 0;
  let valueComp = 0;

  let vendasMensais = {
    janeiro: 0,
    fevereiro: 0,
    março: 0,
    abril: 0,
    maio: 0,
    junho: 0,
    julho: 0,
    agosto: 0,
    setembro: 0,
    outubro: 0,
    novembro: 0,
    dezembro: 0,
  };

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

  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "01") {
      vendasMensais.janeiro += Number(produtos[i].salePrice);
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "02") {
      vendasMensais.fevereiro += Number(produtos[i].salePrice);
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "03") {
      vendasMensais.março += Number(produtos[i].salePrice);
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "04") {
      vendasMensais.abril += Number(produtos[i].salePrice);
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "05") {
      vendasMensais.maio += Number(produtos[i].salePrice);
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "06") {
      vendasMensais.junho += Number(produtos[i].salePrice);
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "07") {
      vendasMensais.julho += Number(produtos[i].salePrice);
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "08") {
      vendasMensais.agosto += Number(produtos[i].salePrice);
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "09") {
      vendasMensais.setembro += Number(produtos[i].salePrice);
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "10") {
      vendasMensais.outubro += Number(produtos[i].salePrice);
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "11") {
      vendasMensais.novembro += Number(produtos[i].salePrice);
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "12") {
      vendasMensais.dezembro += Number(produtos[i].salePrice);
    }
  }

  switch (monthName) {
    case "January":
      if (monthYear === 2024) {
        valueDefault = vendasMensais.janeiro;
        if (vendasMensais.dezembro > 0) {
          valueComp =
            [vendasMensais.janeiro / vendasMensais.dezembro - 1] * 100;
        } else {
          valueComp = 0;
        }
      }
      break;
    case "February":
      if (monthYear === 2024) {
        valueDefault = vendasMensais.fevereiro;
        if (vendasMensais.janeiro > 0) {
          valueComp =
            [vendasMensais.fevereiro / vendasMensais.janeiro - 1] * 100;
        } else {
          valueComp = 0;
        }
      }
      break;
    case "March":
      if (monthYear === 2024) {
        valueDefault = vendasMensais.março;
        if (vendasMensais.fevereiro > 0) {
          valueComp = [vendasMensais.março / vendasMensais.fevereiro - 1] * 100;
        } else {
          valueComp = 0;
        }
      }
      break;
    case "April":
      if (monthYear === 2024) {
        valueDefault = vendasMensais.abril;
        if (vendasMensais.março > 0) {
          valueComp = [vendasMensais.abril / vendasMensais.março - 1] * 100;
        } else {
          valueComp = 0;
        }
      }
      break;
    case "May":
      if (monthYear === 2024) {
        valueDefault = vendasMensais.maio;
        if (vendasMensais.abril > 0) {
          valueComp = [vendasMensais.maio / vendasMensais.abril - 1] * 100;
        } else {
          valueComp = 0;
        }
      }
      break;
    case "June":
      if (monthYear === 2024) {
        valueDefault = vendasMensais.junho;
        if (vendasMensais.maio > 0) {
          valueComp = [vendasMensais.junho / vendasMensais.maio - 1] * 100;
        } else {
          valueComp = 0;
        }
      }
      break;
    case "July":
      if (monthYear === 2024) {
        valueDefault = vendasMensais.julho;
        if (vendasMensais.junho > 0) {
          valueComp = [vendasMensais.julho / vendasMensais.junho - 1] * 100;
        } else {
          valueComp = 0;
        }
      }
      break;
    case "August":
      if (monthYear === 2024) {
        valueDefault = vendasMensais.agosto;
        if (vendasMensais.julho > 0) {
          valueComp = [vendasMensais.agosto / vendasMensais.julho - 1] * 100;
        } else {
          valueComp = 0;
        }
      }
      break;
    case "September":
      if (monthYear === 2024) {
        valueDefault = vendasMensais.setembro;
        if (vendasMensais.agosto > 0) {
          valueComp = [vendasMensais.setembro / vendasMensais.agosto - 1] * 100;
        } else {
          valueComp = 0;
        }
      }
      break;
    case "October":
      if (monthYear === 2024) {
        valueDefault = vendasMensais.outubro;
        if (vendasMensais.setembro > 0) {
          valueComp =
            [vendasMensais.outubro / vendasMensais.setembro - 1] * 100;
        } else {
          valueComp = 0;
        }
      }
      break;
    case "November":
      if (monthYear === 2024) {
        valueDefault = vendasMensais.novembro;
        if (vendasMensais.outubro > 0) {
          valueComp =
            [vendasMensais.novembro / vendasMensais.outubro - 1] * 100;
        } else {
          valueComp = 0;
        }
      }
      break;
    case "December":
      if (monthYear === 2024) {
        valueDefault = vendasMensais.dezembro;
        if (vendasMensais.novembro > 0) {
          valueComp =
            [vendasMensais.dezembro / vendasMensais.novembro - 1] * 100;
        } else {
          valueComp = 0;
        }
      }
      break;
  }

  let profitDefault = 0;
  let profitComp = 0;

  let lucrosMensais = {
    janeiro: 0,
    fevereiro: 0,
    março: 0,
    abril: 0,
    maio: 0,
    junho: 0,
    julho: 0,
    agosto: 0,
    setembro: 0,
    outubro: 0,
    novembro: 0,
    dezembro: 0,
  };

  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "01") {
      lucrosMensais.janeiro += Number(produtos[i].salePrice - produtos[i].cost);
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "02") {
      lucrosMensais.fevereiro += Number(
        produtos[i].salePrice - produtos[i].cost
      );
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "03") {
      lucrosMensais.março += Number(produtos[i].salePrice - produtos[i].cost);
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "04") {
      lucrosMensais.abril += Number(produtos[i].salePrice - produtos[i].cost);
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "05") {
      lucrosMensais.maio += Number(produtos[i].salePrice - produtos[i].cost);
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "06") {
      lucrosMensais.junho += Number(produtos[i].salePrice - produtos[i].cost);
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "07") {
      lucrosMensais.julho += Number(produtos[i].salePrice - produtos[i].cost);
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "08") {
      lucrosMensais.agosto += Number(produtos[i].salePrice - produtos[i].cost);
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "09") {
      lucrosMensais.setembro += Number(
        produtos[i].salePrice - produtos[i].cost
      );
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "10") {
      lucrosMensais.outubro += Number(produtos[i].salePrice - produtos[i].cost);
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "11") {
      lucrosMensais.novembro += Number(
        produtos[i].salePrice - produtos[i].cost
      );
    }
  }
  for (let i = 0; i < produtos.length; i++) {
    const productDate = produtos[i].createdAt;
    if (productDate.substring(5, 7) === "12") {
      lucrosMensais.dezembro += Number(
        produtos[i].salePrice - produtos[i].cost
      );
    }
  }

  switch (monthName) {
    case "January":
      if (monthYear === 2024) {
        profitDefault = lucrosMensais.janeiro;
        if (lucrosMensais.dezembro > 0) {
          profitComp =
            [lucrosMensais.janeiro / lucrosMensais.dezembro - 1] * 100;
        } else {
          profitComp = 0;
        }
      }
      break;
    case "February":
      if (monthYear === 2024) {
        profitDefault = lucrosMensais.fevereiro;
        if (lucrosMensais.janeiro > 0) {
          profitComp =
            [lucrosMensais.fevereiro / lucrosMensais.janeiro - 1] * 100;
        } else {
          profitComp = 0;
        }
      }
      break;
    case "March":
      if (monthYear === 2024) {
        profitDefault = lucrosMensais.março;
        if (lucrosMensais.fevereiro > 0) {
          profitComp =
            [lucrosMensais.março / lucrosMensais.fevereiro - 1] * 100;
        } else {
          profitComp = 0;
        }
      }
      break;
    case "April":
      if (monthYear === 2024) {
        profitDefault = lucrosMensais.abril;
        if (lucrosMensais.março > 0) {
          profitComp = [lucrosMensais.abril / lucrosMensais.março - 1] * 100;
        } else {
          profitComp = 0;
        }
      }
      break;
    case "May":
      if (monthYear === 2024) {
        profitDefault = lucrosMensais.maio;
        if (lucrosMensais.abril > 0) {
          profitComp = [lucrosMensais.maio / lucrosMensais.abril - 1] * 100;
        } else {
          profitComp = 0;
        }
      }
      break;
    case "June":
      if (monthYear === 2024) {
        profitDefault = lucrosMensais.junho;
        if (lucrosMensais.maio > 0) {
          profitComp = [lucrosMensais.junho / lucrosMensais.maio - 1] * 100;
        } else {
          profitComp = 0;
        }
      }
      break;
    case "July":
      if (monthYear === 2024) {
        profitDefault = lucrosMensais.julho;
        if (lucrosMensais.junho > 0) {
          profitComp = [lucrosMensais.julho / lucrosMensais.junho - 1] * 100;
        } else {
          profitComp = 0;
        }
      }
      break;
    case "August":
      if (monthYear === 2024) {
        profitDefault = lucrosMensais.agosto;
        if (lucrosMensais.julho > 0) {
          profitComp = [lucrosMensais.agosto / lucrosMensais.julho - 1] * 100;
        } else {
          profitComp = 0;
        }
      }
      break;
    case "September":
      if (monthYear === 2024) {
        profitDefault = lucrosMensais.setembro;
        if (lucrosMensais.agosto > 0) {
          profitComp =
            [lucrosMensais.setembro / lucrosMensais.agosto - 1] * 100;
        } else {
          profitComp = 0;
        }
      }
      break;
    case "October":
      if (monthYear === 2024) {
        profitDefault = lucrosMensais.outubro;
        if (lucrosMensais.setembro > 0) {
          profitComp =
            [lucrosMensais.outubro / lucrosMensais.setembro - 1] * 100;
        } else {
          profitComp = 0;
        }
      }
      break;
    case "November":
      if (monthYear === 2024) {
        profitDefault = lucrosMensais.novembro;
        if (lucrosMensais.outubro > 0) {
          profitComp =
            [lucrosMensais.novembro / lucrosMensais.outubro - 1] * 100;
        } else {
          profitComp = 0;
        }
      }
      break;
    case "December":
      if (monthYear === 2024) {
        profitDefault = lucrosMensais.dezembro;
        if (lucrosMensais.novembro > 0) {
          profitComp =
            [lucrosMensais.dezembro / lucrosMensais.novembro - 1] * 100;
        } else {
          profitComp = 0;
        }
      }
      break;
  }

  // per year

  for (let i = 0; i < produtos.length; i++) {
    totalSales += Number(produtos[i].salePrice);
  }

  for (let i = 0; i < produtos.length; i++) {
    totalProfit += Number(produtos[i].salePrice - produtos[i].cost);
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
                      January={lucrosMensais.janeiro}
                      February={lucrosMensais.fevereiro}
                      March={lucrosMensais.março}
                      April={lucrosMensais.abril}
                      May={lucrosMensais.maio}
                      June={lucrosMensais.junho}
                      July={lucrosMensais.julho}
                      August={lucrosMensais.agosto}
                      September={lucrosMensais.setembro}
                      October={lucrosMensais.outubro}
                      November={lucrosMensais.novembro}
                      December={lucrosMensais.dezembro}
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
        January={lucrosMensais.janeiro}
        February={lucrosMensais.fevereiro}
        March={lucrosMensais.março}
        April={lucrosMensais.abril}
        May={lucrosMensais.maio}
        June={lucrosMensais.junho}
        July={lucrosMensais.julho}
        August={lucrosMensais.agosto}
        September={lucrosMensais.setembro}
        October={lucrosMensais.outubro}
        November={lucrosMensais.novembro}
        December={lucrosMensais.dezembro}
      />
    </>
  );
}

export default Dashboard;
