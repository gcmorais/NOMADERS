import React, { useContext } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import ApexChart from "react-apexcharts";
import { ApiContext } from "../../contexts/ApiContext";

export default function DonutChart() {
  const { produtos } = useContext(ApiContext);

  let plataforma = produtos.map((item) => {
    return item.platform;
  });

  const novaArr = plataforma.filter((este, i) => {
    return plataforma.indexOf(este) === i;
  });

  const quantidadeElementos = novaArr.map((item) => {
    return plataforma.filter((x) => x === item).length;
  });

  const chartOptions = {
    chart: {
      background: "0",
    },
    plotOptions: {
      pie: {
        expandOnClick: true,
        donut: {
          background: "transparent",
          size: "60px",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              fontSize: "17px",
              color: "#a7a7a7",
            },
            value: {
              show: true,
              fontSize: "16px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              color: "#6366F1",
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    stroke: {
      colors: ["transparent"],
    },
    colors: [
      "rgba(163, 160, 161, 0.3)",
      "#6366F1",
      "rgba(163, 160, 161, 0.3)",
      "#6366F1",
    ],
    tooltip: {
      fillSeriesColor: true,
    },
    labels: [...novaArr],
    legend: {
      position: "bottom",
    },
  };

  return (
    <ApexChart
      options={chartOptions}
      series={[...quantidadeElementos]}
      height={400}
      width={450}
      type="donut"
    />
  );
}
