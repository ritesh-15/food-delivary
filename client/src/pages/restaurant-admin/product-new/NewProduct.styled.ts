import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 1em;

  h1 {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 1rem;
    padding-bottom: 1em;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 250px;
  height: 250px;
  position: relative;
  border-radius: 8px;
  margin-bottom: 2em;
  z-index: 10;

  input {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: -1;
  }
`;

export const Form = styled.form`
  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    margin-top: 2em;
  }
`;

export const FormControl = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;
`;
