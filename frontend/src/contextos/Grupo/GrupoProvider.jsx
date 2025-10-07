import { useState } from "react";
import { GrupoContext } from "./GrupoContext";

export const GrupoProvider = ({ children }) => {
  const [nome, setNome] = useState("Grupo de Estudos FullStack");
  const [descriacao, setDescricao] = useState(
    "O grupo abrange tanto o frontend quanto o backend"
  );

  return (
    <GrupoContext value={{ nome, setNome, descriacao, setDescricao }}>
      {children}
    </GrupoContext>
  );
};
