import React from 'react';
import PropTypes from 'prop-types';
import ProductCards from '../productsCards';
import HeaderSection from '../headerSection';
import HeaderApp from '../headerApp';

function LayoutPage({ children }) {
  return (
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
            {children}
          </div>
        </main>
      </main>
    </section>
  );
}

export default LayoutPage;

LayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
};
