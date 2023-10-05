import React, { useState } from 'react';
import HeaderApp from '../../components/headerApp';
import HeaderSection from '../../components/headerSection';
import ProductCards from '../../components/productsCards';
import NewProductModal from '../../components/modal/newProductModal';
import NewPlatformModal from '../../components/modal/newPlatformModal';
import Table from '../../components/table';

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
            <div className="mt-5">
              <Table />
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
