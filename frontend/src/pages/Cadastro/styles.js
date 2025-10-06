import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  min-height: 100vh;
  background-color: #f4f6f8;
`;

export const Form = styled.form`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const Titulo = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;

  &:focus {
    border-color: #0077cc;
    outline: none;
  }
`;

export const Botao = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${({ disabled }) => (disabled ? "#cccccc" : "#0077cc")};
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;
`;
