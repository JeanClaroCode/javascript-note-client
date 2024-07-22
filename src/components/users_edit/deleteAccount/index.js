import React, { useState } from "react";
import { Button } from "react-bulma-components";
import UsersService from "../../../services/users";
import { Navigate } from "react-router-dom";

function UsersDelete() {
  const [redirectToHome, setRedirectToHome] = useState(false);

  const deleteUser = async () => {
    if (window.confirm("Are you sure you wish to delete this account?")) {
      console.log("apertou");

      try {
        let teste = await UsersService.delete();
        if(teste){setRedirectToHome(true);}
      } catch (error) {
        alert('Erro ao excluir a conta. Tente novamente mais tarde.');
      }
    }
  };

  if (redirectToHome === true) return <Navigate to={{ pathname: "/" }} />;

  return (
    <Button color="danger" onClick={() => deleteUser()}>
      Excluir conta
    </Button>
  );
}

export default UsersDelete;