import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px 40px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end; /* Alinha o conteúdo à direita */
  align-items: center;
  box-sizing: border-box;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const UserName = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #555;
  transition: color 0.2s ease;

  &:hover {
    color: #0077cc;
  }
`;
