import styled from "styled-components";

export const Wrapper = styled.div``;

export const AddRestaurantContainer = styled.div`
  padding-top: 2em;
`;

export const Heading = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    margin-top: 0.5em;
  }
`;

export const StatusDiv = styled.div`
  /* margin-top: 2em; */
  width: 25%;
`;

interface props {
  active: boolean;
}

export const Status = styled.div<props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5em;

  &:last-child {
    div {
      &::after {
        display: none;
      }
    }
  }

  div {
    width: 50px;
    height: 50px;
    background: ${({ theme, active }) =>
      active ? theme.colors.primary : "rgba(0, 0, 0, 0.05)"};
    border-radius: 50%;
    position: relative;
    transition: background 160ms ease-in;

    &::after {
      content: "";
      position: absolute;
      width: 2px;
      height: 160%;
      background: ${({ theme, active }) =>
        active ? theme.colors.primary : "rgba(0, 0, 0, 0.05)"};
      left: 0;
      right: 0;
      top: 50px;
      margin: 0 auto;
    }
  }

  p {
    font-size: 0.95rem;
    margin-right: 4em;
    color: ${({ theme, active }) =>
      active ? theme.colors.primary : theme.colors.textLight};
  }
`;

export const FormContainer = styled.div`
  display: flex;
  margin-top: 4em;
  justify-content: space-between;
`;
