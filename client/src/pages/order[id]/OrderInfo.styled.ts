import styled from "styled-components";

export const OrderInfoContainer = styled.div`
  padding-top: 2em;
`;

export const Title = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  span {
    margin-top: 0.5em;
    display: block;
    font-size: 1.15rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
`;

export const OrderInformation = styled.div`
  width: 45%;

  button {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 1em;
  }

  h1 {
    font-size: 1.15rem;

    span {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: 500;
      font-size: 1.15rem;
    }
  }

  p {
    margin-top: 0.5em;

    span {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: 500;
      font-size: 1.15rem;
    }
  }
`;

export const StatusContainer = styled.div`
  width: 45%;
`;

interface StatusDivProps {
  active: boolean;
}

export const StatusDiv = styled.div<StatusDivProps>`
  display: flex;
  align-items: center;
  height: 100px;

  span {
    margin-left: auto;
    font-size: 0.95rem;
  }

  &:last-child {
    div {
      &::after {
        display: none;
      }
    }
  }

  p {
    color: ${({ theme, active }) =>
      active ? theme.colors.primary : "hsl(24, 100%, 92%)"};
  }

  div {
    width: 15px;
    height: 15px;
    background: ${({ theme, active }) =>
      active ? theme.colors.primary : "hsl(24, 100%, 92%)"};
    border-radius: 50%;
    margin: 0 1em;
    position: relative;

    &::after {
      content: "";
      width: 3px;
      background: ${({ theme, active }) =>
        active ? theme.colors.primary : "hsl(24, 100%, 92%)"};
      height: 570%;
      top: 15px;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      position: absolute;
    }
  }
`;
