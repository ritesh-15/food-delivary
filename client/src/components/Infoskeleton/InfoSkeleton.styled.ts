import styled from "styled-components";

export const InfoSkeletonContainer = styled.div`
  padding: 1em;
  width: 100%;

  @keyframes skeleton {
    0% {
      background: hsl(0, 0%, 98%);
    }
    100% {
      background: hsl(0, 0%, 95%);
    }
  }
`;

export const InfoHeading = styled.div`
  display: flex;
`;

export const InfoImage = styled.div`
  width: 200px;
  height: 200px;
  background: hsl(36, 0%, 94%);
  border-radius: 8px;
  animation: skeleton 1s ease-in infinite alternate;
`;

export const Title = styled.div`
  flex: 1;
  margin-left: 1em;

  h1 {
    height: 15px;
    background: hsl(0, 0%, 95%);
    border-radius: 4px;
    margin-bottom: 1em;
    width: 80%;
    animation: skeleton 1s ease-in infinite alternate;
  }

  p {
    height: 10px;
    background: hsl(0, 0%, 95%);
    border-radius: 4px;
    width: 60%;
    margin-bottom: 1em;
    animation: skeleton 1s ease-in infinite alternate;

    &:nth-child(3) {
      width: 50%;
    }

    &:last-child {
      width: 40%;
    }
  }
`;

export const MainContainer = styled.div`
  margin-top: 2em;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  margin-bottom: 1em;
`;

export const SubTitle = styled.div``;

export const FormControl = styled.div`
  h1 {
    height: 10px;
    background: hsl(0, 0%, 95%);
    border-radius: 4px;
    margin-bottom: 1em;
    width: 50%;
    animation: skeleton 1s ease-in infinite alternate;
  }

  div {
    height: 50px;
    background: hsl(0, 0%, 95%);
    border-radius: 4px;
    margin-bottom: 1em;
    width: 100%;
    animation: skeleton 1s ease-in infinite alternate;
  }
`;

export const ActionDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonDiv = styled.div`
  height: 50px;
  background: hsl(0, 0%, 95%);
  border-radius: 4px;
  margin-bottom: 1em;
  width: 100%;
  max-width: 200px;
  animation: skeleton 1s ease-in infinite alternate;

  &:last-child {
    margin-left: 1em;
  }
`;
