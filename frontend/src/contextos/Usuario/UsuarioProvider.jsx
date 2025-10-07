import { useState } from "react";
import { UsuarioContext } from "./UsuarioContext";

export const UsuarioProvider = ({ children }) => {
  const [nome, setNome] = useState("Thiago");
  const [email, setEmail] = useState("");

  return (
    <UsuarioContext value={{ nome, setNome, email, setEmail }}>
      {children}
    </UsuarioContext>
  );
};
