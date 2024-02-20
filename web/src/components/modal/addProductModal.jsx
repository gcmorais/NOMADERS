import React, { useState } from "react";
import PropTypes from "prop-types";
import Login from "./Portal";
import Input from "../input/input";
import List from "../list";
import Select from "../input/select";
import useErrors from "../../hooks/useErrors";
import FormGroup from "../input/formgroup";

function AddProductModal({ isOpen, setModalOpen }) {
  const [checked, setChecked] = React.useState([]);
  const [date, setDate] = useState("");

  const { setError, removeError, getErrorMessageByFieldName, errors } =
    useErrors();

  const isFormValid = date && errors.length === 0;

  function handleDateChange(event) {
    setDate(event.target.value);

    if (!event.target.value) {
      setError({ field: "data", message: "Data é obrigatória." });
    } else {
      removeError("data");
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  if (isOpen) {
    return (
      <Login
        navLink={setModalOpen}
        width="lg:w-[969px]"
        theme="dark:bg-primary-blue dark:fill-white"
      >
        <header className="mb-9 flex flex-col gap-8">
          <h1 className="m-auto font-inter text-2xl font-semibold dark:text-white">
            Adicionar Produto
          </h1>
        </header>
        <main className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <List checked={checked} setChecked={setChecked} />
          </div>
          <div className="flex flex-col gap-5">
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex gap-5">
                <FormGroup error={getErrorMessageByFieldName("data")}>
                  <Input
                    text="Data de venda"
                    styles="dark:text-white"
                    value={date}
                    change={handleDateChange}
                  />
                </FormGroup>

                <FormGroup styles="w-full">
                  <Select title="Plataforma" value="Mercado livre" />
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
