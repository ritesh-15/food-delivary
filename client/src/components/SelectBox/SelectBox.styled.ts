import { KeyboardArrowDown } from "@mui/icons-material";
import styled from "styled-components";

interface OptionContainerProps {
  active: boolean;
}

export const StyledBox = styled.div`
  position: relative;
`;

export const Selected = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1em;
  border-radius: 0.25em;
  cursor: pointer;
  text-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OptionsContainer = styled.div<OptionContainerProps>`
  position: absolute;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
  width: 100%;
  left: 0;
  right: 0;
  border-radius: 0.25em;
  z-index: 120;
  background: ${({ theme }) => theme.colors.pure};
  margin-top: 0.5em;
  max-height: 300px;
  overflow-y: auto;
  visibility: ${({ active }) => (!active ? "hidden" : "auto")};
  transition: opacity 0.3s ease;
  opacity: ${({ active }) => (!active ? "0" : "1")};

  div {
    padding: 1em;
    cursor: pointer;

    &:first-child {
      background: rgba(0, 0, 0, 0.025);
    }

    input {
      border: none;
      outline: none;
      width: 100%;
      height: 100%;
      background: transparent;
      color: ${({ theme }) => theme.colors.textLight};
    }

    &:hover {
      background: rgba(0, 0, 0, 0.025);
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Arrow = styled(KeyboardArrowDown)`
  color: :rgba(0,0,0,0.5);

`;
