import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Account from "./Portal";
import { AuthContext } from "../../contexts/AuthContext";
import Input from "../input/input";
import FormGroup from "../input/formgroup";
import useErrors from "../../hooks/useErrors";
import UsersService from "../../services/UsersService";

function AccountModal({ isOpen, setModalOpen }) {
  const { signOut, infoUserName, infoUserEmail, infoUserId } =
    useContext(AuthContext);
  const [name, setName] = useState(infoUserName);
  const [email, setEmail] = useState(infoUserEmail);
  const [password, setPassword] = useState();

  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: "name", message: "Nome é obrigatório." });
    } else {
      removeError("name");
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (!event.target.value) {
      setError({ field: "email", message: "Email é obrigatório." });
    } else {
      removeError("email");
    }
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);

    if (!event.target.value) {
      setError({ field: "password", message: "Senha é obrigatória." });
    } else {
      removeError("password");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const data = {
        name,
        email,
        password,
      };
      await UsersService.updateUser(infoUserId, data);
      signOut();
    } catch (error) {
      console.log("Ocorreu um erro, tente novamente.", error);
    }
  }

  if (isOpen) {
    return (
      <Account
        navLink={setModalOpen}
        width="lg:w-[800px] lg:h-[601px]"
        theme="dark:bg-primary-blue dark:fill-white"
      >
        <header className="flex items-center justify-center dark:text-white">
          <h1 className="text-xl">Minha conta</h1>
        </header>
        <main className="flex items-center justify-center gap-20 p-10 dark:text-white">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex gap-10">
              <FormGroup error={getErrorMessageByFieldName("name")}>
                <Input
                  text="Nome do usuário"
                  styles="dark:text-white"
                  value={name}
                  change={handleNameChange}
                />
              </FormGroup>
              <FormGroup error={getErrorMessageByFieldName("email")}>
                <Input
                  text="Email"
                  styles="dark:text-white"
                  value={email}
                  change={handleEmailChange}
                />
              </FormGroup>
              <FormGroup error={getErrorMessageByFieldName("password")}>
                <Input
                  text="Senha"
                  styles="dark:text-white"
                  value={password}
                  change={handlePasswordChange}
                />
              </FormGroup>
            </div>

            <button
              type="submit"
              className="mb-10 mt-2 flex items-center justify-center rounded-md bg-primary-indigo p-2 text-primary-white"
            >
              Atualizar informações
            </button>
          </form>
        </main>
      </Account>
    );
  }

  return null;
}

export default AccountModal;

AccountModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};
