import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  align-items: center;

  background-color: grey; //TESTE
  > div {
    display: flex;
    gap: 15px;
  }

  .img {
    cursor: pointer;
  }
`;
