import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1em;
  width: 100%;
`;

export const HeadingContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const Image = styled.div`
  width: 100%;
  max-width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

interface Props {
  status?: string;
}

export const Title = styled.div<Props>`
  margin-left: 1rem;
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    margin: 0.25em 0;
    color: rgba(0, 0, 0, 0.7);
  }

  small {
    display: block;
    margin-top: 1rem;
    color: ${({ status }) =>
      status === "Pending"
        ? "#a68a00"
        : status === "Rejected"
        ? "#c62828"
        : "#388e3c"};
    background: ${({ status }) =>
      status === "Pending"
        ? "#fff0c2"
        : status === "Rejected"
        ? "#ffcdd2"
        : "#c8e6c9"};
    text-align: center;
    text-transform: capitalize;
    font-weight: 500;
    border-radius: 4px;
    width: fit-content;
    padding: 0.2rem 1rem;
  }
`;

export const MainContainer = styled.div``;

export const SubTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  border-bottom: 1px solid hsl(0, 0%, 80%);
  padding-bottom: 1em;
`;

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
  max-width: 500px;

  h1 {
    margin-bottom: 2rem;
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

export const MapContainer = styled.div`
  height: 350px;
  margin: 1em 0;
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
