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

export const FormContainer = styled.div`
  width: 100%;
  margin-top: 4em;

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    margin-top: 2em;
  }

  h1 {
    margin-bottom: 2em;
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

export const ImageContainer = styled.div`
  margin-bottom: 2em;

  div {
    width: 100%;
    max-width: 500px;
    height: 300px;
    overflow: hidden;
    border-radius: 1em;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  label {
    margin-top: 1em;
    color: ${({ theme }) => theme.colors.primary};
    display: block;
    cursor: pointer;
  }

  input {
    display: none;
  }
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
