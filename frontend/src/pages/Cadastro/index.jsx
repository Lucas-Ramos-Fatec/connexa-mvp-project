import { useState, useEffect } from "react";
import { Container, Form, Titulo, Label, Input, Botao } from "./styles";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [formValido, setFormValido] = useState(false);

  useEffect(() => {
    const emailValido =
      /^[a-zA-Z0-9._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email) &&
      email.includes(".edu");
    const senhaValida = senha.length >= 6;
    const nomeValido = nome.trim().length > 0;
    setFormValido(emailValido && senhaValida && nomeValido);
  }, [nome, email, senha]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Titulo>Cadastro Connexa</Titulo>

        <Label htmlFor="nome">Nome completo</Label>
        <Input
          type="text"
          id="nome"
          placeholder="Digite seu nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <Label htmlFor="email">E-mail institucional</Label>
        <Input
          type="email"
          id="email"
          placeholder="exemplo@universidade.edu"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label htmlFor="senha">Senha</Label>
        <Input
          type="password"
          id="senha"
          placeholder="Mínimo 6 caracteres"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <Botao type="submit" disabled={!formValido}>
          Cadastrar
        </Botao>
      </Form>
    </Container>
  );
};

export default Cadastro;
