import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/pageLayout';
import ProductForm from '../../components/productForm';
import ProductsServices from '../../services/ProductsService';

function NewProduct() {
  async function handleSubmit(formData) {
    try {
      const data = {
        name: formData.name,
        ean: formData.ean,
        cost: formData.cost,
        salePrice: formData.salePrice,
      };
      const response = await ProductsServices.createProduct(data);
      console.log(response);
    } catch (error) {
      console.log('Ocorreu um erro :(', error);
    }
  }
  return (
    <PageLayout>
      <div className="w-full bg-white dark:bg-primary-blue rounded-lg">
        <div className="ml-20 pt-10">
          <p className="flex items-center gap-3 text-black dark:text-white">
            <BsArrowLeft />
            <Link to="/app/nomaders/products">
              Ir para tabela
            </Link>
          </p>
        </div>
        <div className="p-20 flex items-center justify-center flex-col">
          <ProductForm
            title="Novo Produto"
            btnLabel="Registrar Produto"
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </PageLayout>
  );
}

export default NewProduct;
