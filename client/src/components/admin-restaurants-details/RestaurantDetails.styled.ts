import styled from "styled-components";

export const Wrapper = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 1em;
  border-radius: 0.5em;
  margin-bottom: 1em;
`;

export const TopSection = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 1em;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const DetailsContainer = styled.div`
  margin-left: 2em;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    margin-top: 0.5em;
  }

  span {
    margin-top: 0.5em;
    color: rgba(0, 0, 0, 0.5);
    display: block;
  }

  div {
    background: ${({ theme }) => theme.colors.secondary};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 0.25em;
    padding: 0.2em;
    max-width: fit-content;
    margin-top: 1em;

    span {
      font-size: 0.75rem;
      margin-left: 0.25em;
      margin-top: 0;
      color: #fff;
    }
  }
`;

export const MoreDetailsContainer = styled.div`
  margin-top: 1em;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const InformationContainer = styled.div`
  padding: 1em 0;

  h1 {
    font-size: 1.1rem;
    font-weight: 500;
  }

  p {
    margin-top: 0.5em;
  }
`;

export const Title = styled.div`
  padding: 1em 0;
  border-bottom: 1px solid hsl(0, 0%, 80%);

  h1 {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Controls = styled.div`
  display: flex;
  margin-top: 1em;
  justify-content: flex-end;
`;

export const BlockButton = styled.div`
  button {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;

    span {
      margin-left: 0.5em;
      text-transform: capitalize;
    }
  }
`;

export const DeleteButton = styled.div`
  margin-left: 1em;

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    display: flex;
    align-items: center;

    span {
      margin-left: 0.5em;
      text-transform: capitalize;
    }
  }
`;
