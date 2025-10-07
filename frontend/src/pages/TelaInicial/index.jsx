import { Button } from "../../components/Button";
import * as S from "./styles";
import { useContext } from "react";
import { UsuarioContext } from "../../contextos/Usuario/UsuarioContext";

export const TelaInicial = () => {
  const { nome } = useContext(UsuarioContext);

  return (
    <S.Container>
      <div>
        <h1>Seja bem vindo, {nome}</h1>
        <p>
          Aqui você pode se conectar com outros estudantes por meio de grupos de
          estudos!
        </p>
      </div>
      <div className="botoes">
        <Button>Meus Grupos</Button>
        <Button>Criar grupo</Button>
        <Button>Buscar grupos</Button>
      </div>
    </S.Container>
  );
};
