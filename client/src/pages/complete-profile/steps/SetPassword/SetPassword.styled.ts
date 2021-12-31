import styled from "styled-components";

export const PasswordContainer = styled.div``;

export const PasswordInformationForm = styled.form`
  button {
    background: ${({ theme }) => theme.colors.primary};
    display: block;
    color: #fff;

    &:first-child {
      background: transparent;
      color: ${({ theme }) => theme.colors.primary};
      padding: 0;
    }
  }
`;

export const FormControl = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Row = styled.div`
  margin-bottom: 2em;

  h1 {
    font-size: 1.25rem;
    margin-bottom: 2em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 0.5em;
  }
`;
