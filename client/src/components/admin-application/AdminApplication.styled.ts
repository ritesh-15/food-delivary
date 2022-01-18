import styled from "styled-components";

export const ApplicationContainer = styled.div`
  margin-bottom: 1em;
`;

export const ApplicationWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  border-radius: 0.5em;
  cursor: pointer;
  margin-bottom: 1em;
  background: hsl(204, 68%, 38%);

  p,
  span {
    margin-top: 0.5em;
    display: block;
    color: hsl(204, 0%, 90%);
  }

  h1 {
    font-weight: 500;
    color: #fff;
  }
`;

export const ApplicationHeading = styled.div`
  display: flex;
`;

export const Title = styled.div`
  margin-left: 1em;

  div {
    margin-bottom: 0.5em;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    color: hsl(0, 0%, 50%);
    margin-top: 0.5em;
  }
`;

export const Image = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 0.25em;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ApplicationDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Information = styled.div`
  padding: 1em 0;

  h1 {
    font-weight: 500;
  }

  p {
    margin-top: 0.5em;
  }
`;

export const Actions = styled.div`
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;

    &:last-child {
      margin-left: 1em;
      background: transparent;
      border: 1px solid hsl(11, 100%, 53%);
      color: hsl(11, 100%, 53%);
    }
  }
`;

export const ContentDiv = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0.25em;
  padding: 1em;
  width: 100%;
  background: #fff;
`;
