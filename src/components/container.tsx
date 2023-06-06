import { styled } from "styled-components";

export const Container = styled.main`
  padding: 2vh 5vw 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgc};
  color: ${(props) => props.theme.text};

  .form-area {
    display: flex;
    flex-direction: column;
  }

  .todo-list {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  form {
    display: flex;
    gap: 30px;
  }
`;
