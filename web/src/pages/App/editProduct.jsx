import React, { useEffect, useRef } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import ProductForm from '../../components/productForm';
import ProductsServices from '../../services/ProductsService';
import { ApiContext } from '../../contexts/ApiContext';

function EditProduct() {
  const productFormRef = useRef(null);
  const { id } = useParams();
  const { loadProducts } = React.useContext(ApiContext);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await ProductsServices.getProductById(id);

        productFormRef.current.setFieldsValues(data);
      } catch {
        console.log('deu erro');
      }
    }
    loadProduct();
  }, [id]);
  async function handleSubmit(formData) {
    try {
      const data = {
        name: formData.name,
        ean: formData.ean,
        cost: formData.cost,
        salePrice: formData.salePrice,
        dateValue: formData.dateValue,
      };
      const response = await ProductsServices.updateProduct(id, data);
      loadProducts();
      console.log(response);
    } catch (error) {
      console.log('Ocorreu um erro :(', error);
    }
  }
  return (
    <div className="w-full bg-white dark:bg-primary-blue rounded-lg">
      <div className="ml-20 pt-10">
        <p className="flex items-center gap-3 text-black dark:text-white">
          <BsArrowLeft />
          <Link to="/app/nomaders/products">
            Ir para tabela
          </Link>
        </p>
      </div>
      <div className="p-[173px] flex items-center justify-center flex-col">
        <ProductForm
          ref={productFormRef}
          title="Editar Produto"
          btnLabel="Confirmar alterações"
          onSubmit={handleSubmit}
          edit={true}
        />
      </div>
    </div>
  );
}

export default EditProduct;
