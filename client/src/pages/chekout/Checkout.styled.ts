import styled from "styled-components";

export const Wrapper = styled.div`
  background: hsl(0, 0%, 98%);
  min-height: calc(100vh - 70px);
`;

export const CheckoutContainer = styled.div`
  display: flex;
  padding-top: 2em;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CheckoutDetails = styled.div`
  width: 65%;

  @media (max-width: 768px) {
    width: 100%;
  }

  h1 {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

export const DelivaryAddress = styled.div`
  margin-bottom: 2em;
  background: #fff;
  padding: 2em;
  width: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 0.25em;

  button {
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    margin-top: 1em;
  }
`;

export const PaymentMethod = styled.div`
  background: #fff;
  padding: 2em;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 0.25em;

  h1 {
    margin-bottom: 1em;
  }
`;

export const Subtotal = styled.div`
  background: #fff;
  padding: 1em;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 0.25em;
  width: 30%;
  height: fit-content;

  @media (max-width: 768px) {
    width: 100%;
  }

  h1 {
    font-size: 1rem;
    font-weight: 500;
    padding-bottom: 1em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  div {
    padding: 0.5em 0;
    font-size: 0.85rem;

    p {
      color: ${({ theme }) => theme.colors.textLight};
    }

    span {
      color: ${({ theme }) => theme.colors.textLight};
    }
  }

  small {
    font-weight: 500;
  }

  h2 {
    text-transform: uppercase;
    font-weight: 500;
  }

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    width: 100%;
    margin-top: 1em;
  }
`;

export const Address = styled.div`
  margin-top: 1em;
  border: 1px solid hsl(0, 0%, 90%);
  padding: 1em;
  margin: 1em 0;
  display: flex;
  align-items: center;
  border-radius: 4px;
  height: 100px;
  width: 100%;

  input {
    cursor: pointer;
  }

  p {
    margin-left: 1em;
  }

  h1 {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const Method = styled.div`
  max-width: 300px;
`;
