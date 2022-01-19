import styled from "styled-components";

interface Props {
  hover?: boolean;
}

const Button = styled.button<Props>`
  padding: 0.75em 1.5em;
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  font-family: inherit;
  border-radius: 0.25em;
  transition: all 160ms ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    background: ${({ theme, hover }) => hover && theme.colors.primaryHover};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }
`;

export default Button;
