import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import HeaderApp from '../../components/headerApp';
import HeaderSection from '../../components/headerSection';
import ProductCards from '../../components/productsCards';
import NewProductModal from '../../components/modal/newProductModal';
import NewPlatformModal from '../../components/modal/newPlatformModal';

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
  const [openRegisterProduct, setOpenRegisterProduct] = useState(false);
  const [openPlatformProduct, setOpenPlatformProduct] = useState(false);

  return (
    <>
      <section className="mt-2 rounded-lg bg-secundary-white dark:bg-secundary-blue lg:mt-0 lg:w-[73%] xl:w-full">
        <HeaderApp />
        <main className="p-6">
          <HeaderSection title="Produtos" subtitle="Registrar produtos" />
          <main>
            <div className="mt-10 flex flex-col justify-between gap-2 md:grid md:grid-cols-2 2xl:flex 2xl:flex-row">
              <ProductCards platform="Plataforma 1" />
              <ProductCards platform="Plataforma 2" />
              <ProductCards platform="Plataforma 3" />
              <ProductCards platform="Plataforma 4" />
            </div>
            <div className="mt-2 rounded-lg bg-white pb-[18px] dark:bg-primary-blue">
              <header className="w-full items-center justify-between gap-5 border-b-[1px] border-secundary-purple/20 px-3 pb-2 pt-5 dark:border-secundary-purple/20 md:px-5 xl:flex">
                <div className="flex items-center gap-5">
                  <h3 className="font-medium dark:text-white/70">
                    Tabela de produtos
                  </h3>
                  <div className="rounded-full border-[1px] border-black/10 dark:border-white/10">
                    <form className="flex">
                      <input
                        className="w-[150px] rounded-l-full bg-white px-5 py-2 text-[12px] dark:bg-primary-blue dark:text-white/80 lg:w-[300px]"
                        placeholder="Pesquisar..."
                      />
                      <button
                        type="button"
                        className="rounded-r-full bg-white p-1 pr-3 dark:bg-primary-blue dark:text-white"
                        onClick={() => setOpenPlatformProduct(true)}
                      >
                        <AiOutlineSearch />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="mt-5 flex flex-col gap-1 md:flex-row lg:gap-5 xl:mt-0">
                  <form className="flex justify-between rounded-lg border-[1px] border-black/10 bg-white p-1 text-sm font-medium text-gray-500 dark:border-white/5 dark:bg-primary-blue dark:drop-shadow-lg">
                    <select className="w-full">
                      <option> Adicionar </option>
                      <option> w3schools </option>
                      <option> Javatpoint </option>
                      <option> tutorialspoint </option>
                      <option> geeksforgeeks </option>
                    </select>
                  </form>
                  <form className="flex justify-between rounded-lg border-[1px] border-black/10 bg-white p-1 text-sm font-medium text-gray-500 dark:border-white/5 dark:bg-primary-blue dark:drop-shadow-lg">
                    <select className="w-full">
                      <option> Editar </option>
                      <option> w3schools </option>
                      <option> Javatpoint </option>
                      <option> tutorialspoint </option>
                      <option> geeksforgeeks </option>
                    </select>
                  </form>
                  <form className="flex justify-between rounded-lg border-[1px] border-black/10 bg-white p-1 text-sm font-medium text-gray-500 dark:border-white/5 dark:bg-primary-blue dark:drop-shadow-lg">
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
              <div className="flex-1 overflow-auto px-4 pb-10 pt-3 dark:text-secundary-gray/80">
                <table className="w-full">
                  <thead className="text-[10px] opacity-60">
                    <tr>
                      <td className="pl-2">
                        <input
                          type="checkbox"
                          className="h-3 w-3 rounded border-gray-300 bg-gray-100 text-blue-600  focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        />
                      </td>
                      <td className="border-l-[1px] border-primary-white/20 pl-2">
                        Nome
                      </td>
                      <td className="border-l-[1px] border-primary-white/20 pl-2">
                        EAN
                      </td>
                      <td className="border-l-[1px] border-primary-white/20 pl-2">
                        Custo
                      </td>
                      <td className="border-l-[1px] border-primary-white/20 pl-2">
                        Preço Venda
                      </td>
                      <td className="border-l-[1px] border-primary-white/20 pl-2">
                        Lucro
                      </td>
                      <td className="border-l-[1px] border-primary-white/20 pl-2">
                        Plataforma
                      </td>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[12px] dark:divide-primary-white/5">
                    {TableData.map((item) => (
                      <tr key={item.id}>
                        <td className="whitespace-nowrap px-2 py-4 pr-3 pt-4 text-[9px] lg:text-[11px]">
                          <input
                            id="checked-checkbox"
                            type="checkbox"
                            value=""
                            className="h-3 w-3 rounded border-gray-300 bg-gray-100 text-blue-600  opacity-80 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                          />
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 pr-3 pt-4 text-[9px] lg:text-[11px]">
                          {item.name}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 pr-3 pt-4 text-[9px] lg:text-[11px]">
                          {item.ean}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2  pr-3 pt-4 text-[9px] text-red-500 lg:text-[11px]">
                          {item.cost}
                        </td>
                        <td className="ml-3 flex whitespace-nowrap px-2 py-2 pr-3 pt-4 text-[9px] lg:text-[11px]">
                          {item.priceSale}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 pr-3 pt-4 text-[9px] text-green-500 lg:text-[11px]">
                          {item.profit}
                        </td>
                        <td className="flex justify-center whitespace-nowrap rounded-2xl text-primary-indigo lg:bg-[#e3e2e3] lg:dark:bg-[#151929]">
                          {item.platform}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </main>
      </section>
      <NewProductModal
        isOpen={openRegisterProduct}
        closed={setOpenRegisterProduct}
        setModalOpen={() => setOpenRegisterProduct(!openRegisterProduct)}
      />
      <NewPlatformModal
        isOpen={openPlatformProduct}
        closed={setOpenPlatformProduct}
        setModalOpen={() => setOpenPlatformProduct(!openPlatformProduct)}
      />
    </>
  );
}

export default Products;
