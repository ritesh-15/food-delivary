import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 1em;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  &::-webkit-scrollbar {
    height: 7px;
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  background: #fff;
  overflow: hidden;
  border-radius: 0.25em;
  width: 100%;
  text-align: left;
  min-width: 1100px;
  border-radius: 8px;
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

  small {
    color: ${({ status }) => (status === "nonveg" ? "#c62828" : "#388e3c")};
    background: ${({ status }) =>
      status === "nonveg" ? "#ffcdd2" : "#c8e6c9"};
    text-align: center;
    text-transform: capitalize;
    font-weight: 500;
    border-radius: 4px;
    width: fit-content;
    padding: 0.2rem 1rem;
  }
`;

export const SearchDiv = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    max-width: fit-content;

    a {
      display: flex;
      align-items: center;
    }

    span {
      margin-left: 0.5em;
    }
  }

  div {
    display: flex;
    align-items: center;
    padding: 1em;
    background: #f7f7f7;
    width: 100%;
    max-width: 500px;
    border-radius: 8px;

    &:focus-within {
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      background: #fff;
    }

    input {
      outline: none;
      border: none;
      font-size: 1rem;
      margin-left: 0.5em;
      background: transparent;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    button {
      margin-top: 2em;
    }
  }
`;
