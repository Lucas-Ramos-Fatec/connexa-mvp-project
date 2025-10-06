import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f4f6f8;
`;

// --- Estilos do Modal ---
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TituloModal = styled.h2`
  text-align: center;
  margin-top: 0;
  margin-bottom: 25px;
  color: #333;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: 600;
  color: #555;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;

  &:focus {
    border-color: #0077cc;
    outline: none;
  }
`;

export const BotaoSalvar = styled.button`
  padding: 12px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #005fa3;
  }
`;
