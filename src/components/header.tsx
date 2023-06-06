import { styled } from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgc50};
  h1 {
    font-weight: 600;
    font-size: 32px;
    letter-spacing: -0.05em;
    color: ${(props) => props.theme.text};
  }
`;
