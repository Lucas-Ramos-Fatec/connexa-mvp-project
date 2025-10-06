import { useState } from "react";
import {
  BotaoSalvar,
  Form,
  Input,
  Label,
  ModalContent,
  ModalOverlay,
  PageContainer,
  TituloModal,
} from "./styles";
import { Header } from "../../components/Header";
import { Welcome } from "../../components/Welcome";
import { useNavigate } from "react-router-dom";

export const TelaInicial = () => {
  // --- State Hooks ---
  const navigate = useNavigate();
  const [user] = useState({
    nome: "Usuário Exemplo",
    email: "exemplo@email.com",
  });
  const [isUserModalOpen, setUserModalOpen] = useState(false);
  const [isGroupModalOpen, setGroupModalOpen] = useState(false);

  // --- Funções de Lógica ---
  const navigateTo = (path) => {
    navigate(path);
  };

  const handleUserUpdate = (e) => {
    e.preventDefault();
    alert("Perfil do usuário atualizado!");
    setUserModalOpen(false);
  };

  const handleGroupCreation = (e) => {
    e.preventDefault();
    alert("Grupo criado com sucesso!");
    setGroupModalOpen(false);
  };

  return (
    <PageContainer>
      <Header user={user} onEditClick={() => setUserModalOpen(true)} />
      <Welcome
        onNavigate={navigateTo}
        onCreateGroupClick={() => setGroupModalOpen(true)}
      />

      {/* --- Modal de Edição de Usuário --- */}
      {isUserModalOpen && (
        <ModalOverlay onClick={() => setUserModalOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <Form onSubmit={handleUserUpdate}>
              <TituloModal>Editar Perfil</TituloModal>
              <Label htmlFor="nome">Nome Completo</Label>
              <Input id="nome" type="text" defaultValue={user.nome} />
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" defaultValue={user.email} />
              <Label htmlFor="senha">Nova Senha</Label>
              <Input
                id="senha"
                type="password"
                placeholder="Mínimo 6 caracteres"
              />
              <BotaoSalvar type="submit">Salvar Alterações</BotaoSalvar>
            </Form>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* --- Modal de Criação de Grupo --- */}
      {isGroupModalOpen && (
        <ModalOverlay onClick={() => setGroupModalOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <Form onSubmit={handleGroupCreation}>
              <TituloModal>Criar Novo Grupo</TituloModal>
              <Label htmlFor="group-name">Nome do Grupo</Label>
              <Input
                id="group-name"
                type="text"
                placeholder="Ex: Estudos de React Avançado"
              />
              <Label htmlFor="group-desc">Descrição</Label>
              <Input
                as="textarea"
                rows="4"
                id="group-desc"
                placeholder="Descreva o objetivo do grupo"
              />
              <BotaoSalvar type="submit">Criar Grupo</BotaoSalvar>
            </Form>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageContainer>
  );
};
