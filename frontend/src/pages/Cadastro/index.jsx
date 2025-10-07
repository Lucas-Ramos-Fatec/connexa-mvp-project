import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Form, Titulo, Label, Input, Botao } from "./styled";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [formValido, setFormValido] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const emailValido =
      /^[a-zA-Z0-9._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email) &&
      email.includes(".edu");
    const senhaValida = senha.length >= 6;
    const nomeValido = nome.trim().length > 0;
    setFormValido(emailValido && senhaValida && nomeValido);
  }, [nome, email, senha]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErro("");
    setSucesso("");
    try {
      const response = await axios.post("http://localhost:3001/cadastrar", {
        nome,
        email,
        senha,
      });
      if (response.status === 201 || response.status === 200) {
        setSucesso("Cadastro realizado com sucesso! Redirecionando para login...");
        setNome("");
        setEmail("");
        setSenha("");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setErro("Falha ao cadastrar. Tente novamente.");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErro(error.response.data.message);
      } else {
        setErro("Erro de rede ou servidor. Tente novamente mais tarde.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {loading && <p>Enviando dados...</p>}
        {erro && <p style={{ color: "red" }}>{erro}</p>}
        {sucesso && <p style={{ color: "green" }}>{sucesso}</p>}
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
