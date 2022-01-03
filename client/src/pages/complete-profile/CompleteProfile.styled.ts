import styled from "styled-components";

interface StatusDivProps {
  active?: boolean;
}

export const CompleteProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding-top: 2em;
  grid-gap: 4em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 1em;
  }
`;

export const StatusBar = styled.div``;

export const StatusDiv = styled.div<StatusDivProps>`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 5em;
  align-items: center;

  span {
    margin-right: 2em;
    text-align: left;
    color: ${({ theme, active }) =>
      !active ? theme.colors.textLight : theme.colors.primary};
    transition: all 0.3s ease;
  }

  div {
    background: ${({ theme, active }) =>
      active ? theme.colors.primary : "transparent"};
    border-color: ${({ active }) =>
      active ? "transparent" : "hsl(44, 0%, 90%)"};

    &::after {
      background: ${({ theme, active }) =>
        active ? theme.colors.primary : "hsl(44, 0%, 95%)"};
    }
  }

  &:last-child {
    div {
      &::after {
        display: none;
      }
    }
  }
`;

export const StatusCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 2px solid hsl(44, 0%, 90%);

  &::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 230%;
    background: hsl(44, 0%, 90%);
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 100%;
    transition: all 0.3s ease;
  }
`;
