import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ApexChart from 'react-apexcharts';

export default function AreaChart() {
  const chartOptions = {
    chart: {
      type: 'area',
      height: 280,
      toolbar: {
        show: true,
        colors: ['#000'],
      },
      zoom: false,

    },
    tooltip: {
      custom({
        series, seriesIndex, dataPointIndex,
      }) {
        return '<div class="arrow_box">'
          + `
          <span style="color:green;">
            R$: ${series[seriesIndex][dataPointIndex]}
          </span>`
          + '</div>';
      },
    },
    dataLabels: {
      enabled: false,
    },
    events: {
      mouseMove(event, chartContext, config) {
        const tooltip = chartContext.el.querySelector('.apexcharts-tooltip');
        const { pointsArray } = config.globals;
        const { seriesIndex } = config;
        const dataPointIndex = config.dataPointIndex === -1 ? 0 : config.dataPointIndex;

        if (seriesIndex !== -1) {
          const position = pointsArray[seriesIndex][dataPointIndex];

          tooltip.style.top = `${position[1]}px`;
          tooltip.style.left = `${position[0]}px`;
        }
      },
    },
    colors: ['#6366F1'],
    stroke: { width: 3, curve: 'smooth' },
    xaxis: {
      categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      axisBorder: { show: false },
      tooltip: {
        enabled: false,
      },
      labels: {
        style: {
          colors: '#a7a7a7',
          fontFamily: 'Inter',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#a7a7a7',
          fontFamily: 'Inter',
        },
      },
    },
    grid: {
      borderColor: 'rgba(0,0,0,0)',
      padding: {
        top: -20, bottom: -8, left: 12, right: 12,
      },
      markers: {
        show: false,
      },
    },
  };
  const chartSeries = [{
    name: 'R$',
    data: [
      100, 200, 100, 400, 100, 600, 400, 100, 40, 100, 500, 200,
    ],
  }];

  return (
    <ApexChart options={chartOptions} series={chartSeries} height={230} type="area" />
  );
}
