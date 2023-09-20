import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import ApexChart from "react-apexcharts";

export default function DonutChart() {
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
    labels: ["Mercado Livre", "Shopify", "Americanas", "Magalu"],
  };

  return (
    <ApexChart
      options={chartOptions}
      series={[44, 55, 41, 17]}
      height={290}
      type="donut"
    />
  );
}
