import { styled } from "styled-components";

export const Container = styled.main`
  padding: 2vh 5vw 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgc};
  color: ${(props) => props.theme.text};

  form {
    display: flex;
    gap: 30px;
  }
`;
