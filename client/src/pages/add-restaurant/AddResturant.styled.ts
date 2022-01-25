import styled from "styled-components";

export const Wrapper = styled.div``;

export const AddRestaurantContainer = styled.div`
  padding-top: 2em;
  padding-bottom: 2em;
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

export const FormContainer = styled.form`
  width: 100%;
  margin-top: 4em;

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    margin-top: 2em;
    display: flex;

    span {
      margin-left: 0.5em;
    }
  }

  h1 {
    margin-bottom: 1em;
    border-bottom: 1px solid hsl(0, 0%, 80%);
    padding-bottom: 1em;
    font-size: 1.15rem;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;
  margin-bottom: 2em;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FormControl = styled.div``;

export const DocumentsDiv = styled.div`
  margin-bottom: 2rem;
`;

export const Agreement = styled.div`
  display: flex;
  align-items: center;

  input {
    cursor: pointer;
  }

  p {
    margin-left: 1em;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  overflow: hidden;
  border-radius: 0.25em;
  width: 100%;
  text-align: left;
  min-width: 700px;
  overflow: auto;
`;

export const TableHead = styled.thead`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

export const TableBody = styled.tbody``;

export const TR = styled.tr`
  padding: 1em;

  &:nth-child(even) {
    background: #fff5f7;
  }
`;

export const TH = styled.th`
  padding: 1em;
  font-weight: 600;
  letter-spacing: 0.15em;
`;

interface Props {
  status?: string;
}

export const TD = styled.td<Props>`
  padding: 1em;

  a {
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    max-width: 300px;
  }

  input {
    display: none;
  }

  small {
    color: ${({ status }) =>
      status === "Pending"
        ? "#a68a00"
        : status === "Missing"
        ? "#c62828"
        : "#388e3c"};
    background: ${({ status }) =>
      status === "Pending"
        ? "#fff0c2"
        : status === "Missing"
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

export const MapContainer = styled.div`
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
`;
