import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1em;
  width: 100%;
`;

export const ActionSelectBox = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    margin-left: 1em;
  }

  div {
    flex: 1;
    max-width: 200px;
  }
`;

export const MainContainer = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 2rem 0;
  grid-gap: 2rem;
`;

export const FormControl = styled.div`
  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }

  div {
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
      margin-left: 0.5em;
      color: hsl(0, 0%, 50%);
    }
  }

  h1 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
`;

export const Actions = styled.div`
  display: flex;
  margin-top: 2rem;

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    display: flex;
    align-items: center;

    span {
      margin-left: 0.25em;
    }
  }
`;

export const OrdersChart = styled.div`
  padding: 1em;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  margin-top: 2rem;
  border-radius: 8px;

  h1 {
    margin-bottom: 2rem;
    font-size: 1.25rem;
    font-weight: 500;
  }
`;
