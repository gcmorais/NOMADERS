import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProductForm from "../../components/productForm";
import ProductsServices from "../../services/ProductsService";
import { ApiContext } from "../../contexts/ApiContext";

function NewProduct() {
  const { loadProducts } = React.useContext(ApiContext);

  async function handleSubmit(formData) {
    try {
      const data = {
        name: formData.name,
        ean: formData.ean,
        platform: formData.platform,
        cost: formData.cost,
        salePrice: formData.salePrice,
        dateValue: formData.dateValue,
      };
      const response = await ProductsServices.createProduct(data);
      loadProducts();
      console.log(response);
    } catch (error) {
      console.log("Ocorreu um erro :(", error);
    }
  }
  return (
    <div className="w-full rounded-lg bg-white dark:bg-primary-blue">
      <div className="ml-20 pt-10">
        <p className="flex items-center gap-3 text-black dark:text-white">
          <BsArrowLeft />
          <Link to="/app/products">Ir para tabela</Link>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center p-[173px]">
        <ProductForm
          title="Novo Produto"
          btnLabel="Registrar Produto"
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default NewProduct;
