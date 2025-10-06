import { HeaderContainer, UserInfo, UserName, EditButton } from "./styles";

export const Header = ({ user, onEditClick }) => {
  return (
    <HeaderContainer>
      <UserInfo>
        <UserName>Olá, {user.nome}</UserName>
        <EditButton onClick={onEditClick} aria-label="Editar perfil">
          <EditIcon />
        </EditButton>
      </UserInfo>
    </HeaderContainer>
  );
};
