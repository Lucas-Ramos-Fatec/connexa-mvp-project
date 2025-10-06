import { useState, useEffect } from "react";
import { Container, Form, Titulo, Label, Input, Botao } from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [formValido, setFormValido] = useState(false);

  useEffect(() => {
    // Validação mais simples para o login
    const emailValido = /^[a-zA-Z0-9._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email);
    const senhaValida = senha.length >= 6;
    setFormValido(emailValido && senhaValida);
  }, [email, senha]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login realizado com sucesso!");
    // Aqui pode entrar sua lógica de autenticação com o backend/API
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Titulo>Login Connexa</Titulo>

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
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <Botao type="submit" disabled={!formValido}>
          Entrar
        </Botao>
      </Form>
    </Container>
  );
};

export default Login;
