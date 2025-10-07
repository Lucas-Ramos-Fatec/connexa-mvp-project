import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 95vh;
  align-items: center;
  justify-content: center;
  gap: 50px;

  > div {
    text-align: center;
  }

  > div h1 {
    font-size: 40px;
  }

  > div p {
    font-size: 20px;
  }

  .botoes {
    display: flex;
    gap: 20px;
  }
`;
