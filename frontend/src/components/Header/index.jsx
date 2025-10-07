import { useContext } from "react";
import * as S from "./styles";
import { UsuarioContext } from "../../contextos/Usuario/UsuarioContext";
import { FaRegEdit } from "react-icons/fa";

export const Header = () => {
  const { nome } = useContext(UsuarioContext);

  return (
    <S.Container>
      <h1>Connexa</h1>
      <div>
        <p>{nome}</p>
        <FaRegEdit className="img" />
      </div>
    </S.Container>
  );
};
