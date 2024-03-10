import React, { useEffect, useRef } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import ProductForm from "../../components/productForm";
import { ApiContext } from "../../contexts/ApiContext";
import { api } from "../../services/api";

function EditProduct() {
  const productFormRef = useRef(null);
  const { id } = useParams();
  const { loadUser } = React.useContext(ApiContext);

  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await api.get(`/product/${id}`);

        productFormRef.current.setFieldsValues(response.data);
      } catch {
        console.log("Ocorreu um erro, tente novamente.");
      }
    }
    loadProduct();
  }, [id]);
  async function handleSubmit(formData) {
    try {
      const data = {
        name: formData.name,
        ean: formData.ean,
        platform: formData.platform,
        cost: formData.cost,
        salePrice: formData.salePrice,
        createdAt: formData.createdAt,
      };
      await api.put(`/product/${id}`, data);
      loadUser();
    } catch (error) {
      console.log("Ocorreu um erro, tente novamente.", error);
    }
  }
  return (
    <div className="w-full bg-white dark:bg-primary-blue rounded-lg">
      <div className="ml-20 pt-10">
        <p className="flex items-center gap-3 text-black dark:text-white">
          <BsArrowLeft />
          <Link to="/app/products">Ir para tabela</Link>
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
