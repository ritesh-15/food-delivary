import styled from "styled-components";

export const OrdersContainer = styled.div`
  padding-top: 2em;
`;

export const OrdersWrapper = styled.div``;

export const Order = styled.div`
  background: #fff;
  padding-bottom: 2em;
  border-radius: 0.25em;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid hsl(0, 0%, 80%);
  margin-bottom: 2em;
`;

export const OrderLeft = styled.div`
  width: 45%;

  h1 {
    font-size: 1.25rem;
    font-weight: 500;

    span {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: 500;
    }
  }
  p {
    margin-top: 0.5em;
  }
`;

export const OrderRight = styled.div`
  button {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 1em;
    width: 100%;
  }

  p {
    span {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: 500;
    }
    margin-bottom: 0.5em;
  }
`;
