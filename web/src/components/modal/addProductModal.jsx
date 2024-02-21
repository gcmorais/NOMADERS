import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Login from "./Portal";
import Input from "../input/input";
import List from "../list";
import Select from "../input/select";
import useErrors from "../../hooks/useErrors";
import FormGroup from "../input/formgroup";
import { ApiContext } from "../../contexts/ApiContext";
import ProductsServices from "../../services/ProductsService";
import { DateMask } from "../../utils/DateMask";

function AddProductModal({ isOpen, setModalOpen }) {
  const [checked, setChecked] = React.useState([]);
  const [test, setTest] = React.useState([]);
  const [date, setDate] = useState("");
  const [distance, setDistance] = useState({});

  const { loadProducts } = useContext(ApiContext);
  const { products } = useContext(ApiContext);

  async function handleSubmit(formData) {
    formData.preventDefault();
    try {
      const data = {
        name: checked[0].name,
        ean: checked[0].ean,
        platform: distance.selecionado,
        cost: checked[0].cost,
        salePrice: checked[0].saleprice,
        dateValue: date,
      };
      const response = await ProductsServices.createProduct(data);
      loadProducts();
      console.log(response);
    } catch (error) {
      console.log("Ocorreu um erro, tente novamente mais tarde.", error);
    }
  }

  let plataforma = products.map((item) => {
    return item.platform;
  });

  const novaArr = plataforma.filter((este, i) => {
    return plataforma.indexOf(este) === i;
  });

  const { setError, removeError, getErrorMessageByFieldName, errors } =
    useErrors();

  const isFormValid = date && errors.length === 0;

  function handleDateChange(event) {
    setDate(DateMask(event.target.value));

    if (!event.target.value) {
      setError({ field: "data", message: "Data é obrigatória." });
    } else {
      removeError("data");
    }
  }

  if (isOpen) {
    return (
      <Login
        navLink={setModalOpen}
        width="lg:w-[969px] lg:h-[601px]"
        theme="dark:bg-primary-blue dark:fill-white"
      >
        <header className="mb-9 flex flex-col gap-8">
          <h1 className="m-auto font-inter text-2xl font-semibold dark:text-white">
            Adicionar Produto
          </h1>
        </header>
        <main className="flex flex-col justify-between gap-10 p-10 md:flex-row">
          <div>
            <List checked={checked} setChecked={setChecked} />
          </div>
          <div className="flex flex-col gap-5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                {checked.map((item) => {
                  return (
                    <div key={item.id}>
                      <header className="mb-5 text-xl dark:text-primary-white">
                        <h1>{item.name}</h1>
                      </header>
                      <main className="flex flex-col gap-2 ">
                        <div>
                          <p className="text-primary-gray dark:text-primary-white/60">
                            EAN
                          </p>
                          <span className="text-black/80 dark:text-primary-white">
                            {item.ean}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <p className="text-primary-gray dark:text-primary-white/60">
                              Custo
                            </p>
                            <span className="text-black/80 dark:text-primary-white">
                              R$ {item.cost}
                            </span>
                          </div>
                          <div>
                            <p className="text-primary-gray dark:text-primary-white/60">
                              Preço de venda
                            </p>
                            <span className="text-black/80 dark:text-primary-white">
                              R$ {item.saleprice}
                            </span>
                          </div>
                          <div>
                            <p className="text-primary-gray dark:text-primary-white/60">
                              Lucro
                            </p>
                            <span className="text-green-600">
                              R$ {item.saleprice - item.cost}
                            </span>
                          </div>
                        </div>
                      </main>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-5">
                <FormGroup error={getErrorMessageByFieldName("date-value")}>
                  <Input
                    text="Data de venda"
                    styles="dark:text-white"
                    value={date.substr(0, 20)}
                    change={handleDateChange}
                    date={true}
                    valueMask={10}
                  />
                </FormGroup>
                <FormGroup styles="w-full">
                  <p className="font-inter text-sm font-semibold opacity-70 dark:text-white">
                    Plataforma
                  </p>
                  <select
                    className="w-full rounded-lg border-2 border-primary-gray/30 p-2 text-sm opacity-70 dark:bg-primary-blue dark:text-white/50 "
                    onChange={(e) =>
                      setDistance({ selecionado: e.target.value })
                    }
                  >
                    {novaArr.map((item) => (
                      <option
                        key={item}
                        value={item}
                        className="text-black dark:text-white/50 "
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                </FormGroup>
              </div>
              <div className="flex flex-row-reverse">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={
                    isFormValid
                      ? "mb-10 mt-2 flex w-[30%] items-center justify-center rounded-md bg-primary-indigo p-2 text-primary-white"
                      : "mb-10 mt-2 flex w-[30%] items-center justify-center rounded-md bg-primary-indigo/70 p-2 text-primary-white"
                  }
                >
                  Adicionar
                </button>
              </div>
            </form>
          </div>
        </main>
      </Login>
    );
  }

  return null;
}

export default AddProductModal;

AddProductModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};
