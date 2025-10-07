import styled from "styled-components";

export const Container = styled.button`
  background-color: grey;
  border-radius: 5px;
  padding: 15px;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s ease;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`;
