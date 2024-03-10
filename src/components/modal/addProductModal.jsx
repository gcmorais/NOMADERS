import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Login from "./Portal";
import Input from "../input/input";
import List from "../list";
import Select from "../input/select";
import useErrors from "../../hooks/useErrors";
import FormGroup from "../input/formgroup";
import { ApiContext } from "../../contexts/ApiContext";
import { DateMask } from "../../utils/DateMask";
import { api } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";

function AddProductModal({ isOpen, setModalOpen }) {
  const [checked, setChecked] = React.useState([]);
  const [distance, setDistance] = useState({ selecionado: "" });
  const { user } = useContext(AuthContext);
  const { produtos, loadUser } = useContext(ApiContext);

  async function handleSubmit(formData) {
    formData.preventDefault();
    try {
      const data = {
        name: checked[0].name,
        ean: checked[0].ean,
        platform: distance.selecionado,
        cost: checked[0].cost,
        salePrice: checked[0].salePrice,
        userId: user,
      };
      await api.post("/product", data);
      loadUser();
    } catch (error) {
      console.log("Ocorreu um erro, tente novamente mais tarde.", error);
    }
  }

  let plataforma = produtos.map((item) => {
    return item.platform;
  });

  const novaArr = plataforma.filter((este, i) => {
    return plataforma.indexOf(este) === i;
  });

  const { errors } = useErrors();

  const isFormValid = errors.length === 0 && distance.selecionado !== "";

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
        <main className="flex flex-col justify-center gap-10 p-10 md:flex-row">
          <div>
            <List checked={checked} setChecked={setChecked} />
          </div>
          <div className="flex flex-col gap-5 w-[100%]">
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
                              R$ {item.salePrice}
                            </span>
                          </div>
                          <div>
                            <p className="text-primary-gray dark:text-primary-white/60">
                              Lucro
                            </p>
                            <span className="text-green-600">
                              R$ {item.salePrice - item.cost}
                            </span>
                          </div>
                        </div>
                      </main>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-5">
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
                    <option />
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
