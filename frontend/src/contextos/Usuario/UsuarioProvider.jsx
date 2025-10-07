import { useState } from "react";
import { UsuarioContext } from "./UsuarioContext";

export const UsuarioProvider = ({ children }) => {
  const [nome, setNome] = useState("Usuário");
  const [email, setEmail] = useState("usuario@gmail.com");

  return (
    <UsuarioContext value={{ nome, setNome, email, setEmail }}>
      {children}
    </UsuarioContext>
  );
};
