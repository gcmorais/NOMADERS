import React, { useContext } from "react";
import { ApiContext } from "../../contexts/ApiContext";

function ErrorMessage() {
  const { loadUser } = useContext(ApiContext);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <p className="dark:text-white">Ocorreu um erro ao obter os seus dados!</p>
      <button
        type="button"
        className="flex justify-center text-center items-center rounded-lg bg-primary-indigo text-white w-44 h-12 mt-5"
        onClick={() => loadUser()}
      >
        Tentar Novamente
      </button>
    </div>
  );
}

export default ErrorMessage;
