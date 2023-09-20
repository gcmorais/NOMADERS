import React from 'react';

const TableData = [
  {
    id: '1',
    name: 'Liquidificador Brastemp CVMA',
    ean: '#043430434343463341234',
    cost: 'R$ 120,00',
    priceSale: 'R$ 220,00',
    profit: 'R$ 100,00',
    platform: 'Mercado Livre',
  },
  {
    id: '2',
    name: 'Liquidificador Brastemp CVMA',
    ean: '#043430434343463341234',
    cost: 'R$ 120,00',
    priceSale: 'R$ 220,00',
    profit: 'R$ 100,00',
    platform: 'Mercado Livre',
  },
  {
    id: '3',
    name: 'Liquidificador Brastemp CVMA',
    ean: '#043430434343463341234',
    cost: 'R$ 120,00',
    priceSale: 'R$ 220,00',
    profit: 'R$ 100,00',
    platform: 'Mercado Livre',
  },
  {
    id: '4',
    name: 'Liquidificador Brastemp CVMA',
    ean: '#043430434343463341234',
    cost: 'R$ 120,00',
    priceSale: 'R$ 220,00',
    profit: 'R$ 100,00',
    platform: 'Mercado Livre',
  },
  {
    id: '5',
    name: 'Liquidificador Brastemp CVMA',
    ean: '#043430434343463341234',
    cost: 'R$ 120,00',
    priceSale: 'R$ 220,00',
    profit: 'R$ 100,00',
    platform: 'Mercado Livre',
  },
  {
    id: '6',
    name: 'Liquidificador Brastemp CVMA',
    ean: '#043430434343463341234',
    cost: 'R$ 120,00',
    priceSale: 'R$ 220,00',
    profit: 'R$ 100,00',
    platform: 'Mercado Livre',
  },
  {
    id: '7',
    name: 'Liquidificador Brastemp CVMA',
    ean: '#043430434343463341234',
    cost: 'R$ 120,00',
    priceSale: 'R$ 220,00',
    profit: 'R$ 100,00',
    platform: 'Mercado Livre',
  },
  {
    id: '8',
    name: 'Liquidificador Brastemp CVMA',
    ean: '#043430434343463341234',
    cost: 'R$ 120,00',
    priceSale: 'R$ 220,00',
    profit: 'R$ 100,00',
    platform: 'Mercado Livre',
  },
];

function Table() {
  return (
    <div className="px-4 pt-3 flex-1 dark:text-secundary-gray/80 overflow-auto">
      <table className="w-full">
        <thead className="text-[10px] opacity-60">
          <tr>
            <td className="border-l-[1px] border-primary-white/20 pl-2">Nome</td>
            <td className="border-l-[1px] border-primary-white/20 pl-2">EAN</td>
            <td className="border-l-[1px] border-primary-white/20 pl-2">Custo</td>
            <td className="border-l-[1px] border-primary-white/20 pl-2">Preço Venda</td>
            <td className="border-l-[1px] border-primary-white/20 pl-2">Lucro</td>
            <td className="border-l-[1px] border-primary-white/20 pl-2 flex items-center justify-center">Plataforma</td>
          </tr>
        </thead>
        <tbody className="text-[12px] divide-y divide-gray-100 dark:divide-primary-white/5">
          {TableData.map((item) => (
            <tr key={item.id}>
              <td className="pt-4 pr-3 text-[9px] lg:text-[11px] whitespace-nowrap">{item.name}</td>
              <td className="pt-4 pr-3 text-[9px] lg:text-[11px] whitespace-nowrap">{item.ean}</td>
              <td className="pt-4 pr-3 text-red-500  text-[9px] lg:text-[11px] whitespace-nowrap">{item.cost}</td>
              <td className="pt-4 pr-3 text-[9px] lg:text-[11px] flex ml-3 whitespace-nowrap">{item.priceSale}</td>
              <td className="pt-4 pr-3 text-green-500 text-[9px] lg:text-[11px] whitespace-nowrap">{item.profit}</td>
              <td className="lg:bg-[#e3e2e3] lg:dark:bg-[#151929] flex justify-center rounded-2xl text-primary-indigo mt-4 whitespace-nowrap">{item.platform}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
