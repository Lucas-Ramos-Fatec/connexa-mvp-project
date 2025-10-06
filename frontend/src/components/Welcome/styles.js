import styled from "styled-components";

export const WelcomeContainer = styled.main`
  flex: 1; /* Faz o conteúdo ocupar o espaço restante */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
`;

export const WelcomeTitle = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
`;

export const WelcomeDescription = styled.p`
  font-size: 1.1rem;
  color: #34495e;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 40px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap; /* Permite que os botões quebrem a linha em telas menores */
  justify-content: center;
`;

export const ActionButton = styled.button`
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #0077cc;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #005fa3;
    transform: translateY(-2px);
  }
`;
