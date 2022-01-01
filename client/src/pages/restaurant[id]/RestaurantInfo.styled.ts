import styled from "styled-components";

export const InfoContainer = styled.div`
  margin-top: 70px;
  padding-top: 2em;
  height: 100%;
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid hsl(0, 0%, 70%);
  padding-bottom: 2em;
  position: relative;
  height: 100%;
  margin-bottom: 2em;
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 1em;

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;

export const Information = styled.div`
  width: 80%;

  h4 {
    margin-bottom: 0.5em;
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
  }

  button {
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.textLight};
    margin-top: 1em;
    color: ${({ theme }) => theme.colors.textLight};

    span {
      margin-left: 0.5em;
    }
  }
`;

export const InformationTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25em;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const Rating = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  border-radius: 0.25em;
  padding: 0.2em;

  span {
    font-size: 0.75rem;
    margin-left: 0.25em;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  background: #fff;
  border: 1px solid hsl(0, 0%, 70%);
  padding: 0.5em;
  left: 0;
  right: 0;
  max-width: 300px;
  margin: 0 auto;
  bottom: -20px;
  border-radius: 0.2em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);

  &:focus-within {
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);
  }

  input {
    background: transparent;
    border: none;
    font-size: 1rem;
    outline: none;
    margin-left: 0.25em;
  }
`;
