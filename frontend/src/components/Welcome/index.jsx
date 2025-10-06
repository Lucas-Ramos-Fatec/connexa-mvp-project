import {
  WelcomeContainer,
  WelcomeTitle,
  WelcomeDescription,
  ButtonContainer,
  ActionButton,
} from "./styles";

export const Welcome = ({ onNavigate, onCreateGroupClick }) => {
  return (
    <WelcomeContainer>
      <WelcomeTitle>Bem-vindo ao Connexa</WelcomeTitle>
      <WelcomeDescription>
        Sua plataforma para conectar, colaborar e crescer. Participe de grupos
        de estudos, compartilhe conhecimento e alcance seus objetivos acadêmicos
        e profissionais.
      </WelcomeDescription>
      <ButtonContainer>
        <ActionButton onClick={() => onNavigate("/grupos/meus-grupos")}>
          Meus Grupos
        </ActionButton>
        <ActionButton onClick={onCreateGroupClick}>Criar Grupo</ActionButton>
        <ActionButton onClick={() => onNavigate("/grupos/busca")}>
          Buscar Grupos
        </ActionButton>
      </ButtonContainer>
    </WelcomeContainer>
  );
};
