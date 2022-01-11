import styled from "styled-components";

export const BasicDetailsContainer = styled.div`
  width: 70%;

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    margin-top: 2em;
    margin-left: auto;
    width: 100px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FormControl = styled.div``;

export const Row = styled.div``;
