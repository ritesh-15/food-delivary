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

export const ChooseImage = styled.div`
  margin-bottom: 1em;

  input {
    display: none;
  }

  label {
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
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
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
