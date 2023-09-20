import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import HeaderApp from '../../components/headerApp';
import HeaderSection from '../../components/headerSection';
import ProductCards from '../../components/productsCards';

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

function Products() {
  return (
    <section className="lg:w-[73%] xl:w-full mt-2 lg:mt-0 rounded-lg bg-secundary-white dark:bg-secundary-blue">
      <HeaderApp />
      <main className="p-6">
        <HeaderSection title="Produtos" subtitle="Registrar produtos" />
        <main>
          <div className="flex flex-col md:grid md:grid-cols-2 2xl:flex 2xl:flex-row justify-between gap-2 mt-10">
            <ProductCards platform="Plataforma 1" />
            <ProductCards platform="Plataforma 2" />
            <ProductCards platform="Plataforma 3" />
            <ProductCards platform="Plataforma 4" />
          </div>
          <div className="bg-white rounded-lg mt-2 dark:bg-primary-blue pb-[18px]">
            <header className="xl:flex justify-between gap-5 border-secundary-purple/20 dark:border-secundary-purple/20 w-full border-b-[1px] items-center pt-5 pb-2 px-3 md:px-5">
              <div className="flex gap-5 items-center">
                <h3 className="font-medium dark:text-white/70">
                  Tabela de produtos
                </h3>
                <div className="border-[1px] rounded-full border-black/10 dark:border-white/10">
                  <form className="flex">
                    <input className="w-[150px] lg:w-[300px] bg-white py-2 px-5 text-[12px] rounded-l-full dark:bg-primary-blue dark:text-white/80" placeholder="Pesquisar..." />
                    <button type="submit" className="bg-white p-1 pr-3 rounded-r-full dark:bg-primary-blue dark:text-white">
                      <AiOutlineSearch />
                    </button>
                  </form>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-1 mt-5 lg:gap-5 xl:mt-0">
                <form className="bg-white dark:bg-primary-blue border-black/10 dark:drop-shadow-lg border-[1px] dark:border-white/5 rounded-lg flex justify-between p-1 text-sm text-gray-500 font-medium">
                  <select className="w-full">
                    <option> Adicionar </option>
                    <option> w3schools </option>
                    <option> Javatpoint </option>
                    <option> tutorialspoint </option>
                    <option> geeksforgeeks </option>
                  </select>
                </form>
                <form className="bg-white dark:bg-primary-blue border-black/10 dark:drop-shadow-lg border-[1px] dark:border-white/5 rounded-lg flex justify-between p-1 text-sm text-gray-500 font-medium">
                  <select className="w-full">
                    <option> Editar </option>
                    <option> w3schools </option>
                    <option> Javatpoint </option>
                    <option> tutorialspoint </option>
                    <option> geeksforgeeks </option>
                  </select>
                </form>
                <form className="bg-white dark:bg-primary-blue border-black/10 dark:drop-shadow-lg border-[1px] dark:border-white/5 rounded-lg flex justify-between p-1 text-sm text-gray-500 font-medium">
                  <select className="w-full">
                    <option> Filtrar </option>
                    <option> w3schools </option>
                    <option> Javatpoint </option>
                    <option> tutorialspoint </option>
                    <option> geeksforgeeks </option>
                  </select>
                </form>
              </div>
            </header>
            <div className="px-4 pt-3 flex-1 dark:text-secundary-gray/80 overflow-auto pb-10">
              <table className="w-full">
                <thead className="text-[10px] opacity-60">
                  <tr>
                    <td className="pl-2">
                      <input type="checkbox" className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    </td>
                    <td className="border-l-[1px] border-primary-white/20 pl-2">Nome</td>
                    <td className="border-l-[1px] border-primary-white/20 pl-2">EAN</td>
                    <td className="border-l-[1px] border-primary-white/20 pl-2">Custo</td>
                    <td className="border-l-[1px] border-primary-white/20 pl-2">Preço Venda</td>
                    <td className="border-l-[1px] border-primary-white/20 pl-2">Lucro</td>
                    <td className="border-l-[1px] border-primary-white/20 pl-2">Plataforma</td>
                  </tr>
                </thead>
                <tbody className="text-[12px] divide-y divide-gray-100 dark:divide-primary-white/5">
                  {TableData.map((item) => (
                    <tr key={item.id}>
                      <td className="pt-4 pr-3 text-[9px] lg:text-[11px] whitespace-nowrap px-2 py-4">
                        <input id="checked-checkbox" type="checkbox" value="" className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 opacity-80" />
                      </td>
                      <td className="pt-4 pr-3 text-[9px] lg:text-[11px] whitespace-nowrap px-2 py-2">{item.name}</td>
                      <td className="pt-4 pr-3 text-[9px] lg:text-[11px] whitespace-nowrap px-2 py-2">{item.ean}</td>
                      <td className="pt-4 pr-3 text-red-500  text-[9px] lg:text-[11px] whitespace-nowrap px-2 py-2">{item.cost}</td>
                      <td className="pt-4 pr-3 text-[9px] lg:text-[11px] flex ml-3 whitespace-nowrap px-2 py-2">{item.priceSale}</td>
                      <td className="pt-4 pr-3 text-green-500 text-[9px] lg:text-[11px] whitespace-nowrap px-2 py-2">{item.profit}</td>
                      <td className="lg:bg-[#e3e2e3] lg:dark:bg-[#151929] flex justify-center rounded-2xl text-primary-indigo whitespace-nowrap">{item.platform}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </main>
    </section>
  );
}

export default Products;
