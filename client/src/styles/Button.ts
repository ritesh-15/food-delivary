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
  font-weight: 500;

  &::after {
    content: "";
    position: absolute;
    left: -100%;
    right: 0;
    width: 100%;
    bottom: 0;
    height: 100%;
    background: hsl(354, 92%, 70%);
    top: 0;
    transition: all 250ms ease-in;
    z-index: -1;
    opacity: 0;
    display: ${({ hover }) => (hover ? "block" : "none")};
  }

  &:hover {
    &::after {
      left: 0;
      display: ${({ hover }) => (hover ? "block" : "none")};
      opacity: 1;
    }
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;

    &::after {
      display: none !important;
    }
  }
`;

export default Button;
