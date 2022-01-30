import styled from "styled-components";

export const TableSkeletonContainer = styled.div`
  width: 100%;
  padding: 1em;
`;

export const TableHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 2em;

  h1 {
    height: 30px;
    background: hsl(0, 0%, 95%);
    border-radius: 4px;
    margin-bottom: 1em;
    width: 50%;
    animation: skeleton 1s ease-in infinite alternate;
    margin: 0 1em;
  }
`;

export const TableContent = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;

  p {
    height: 10px;
    background: hsl(0, 0%, 95%);
    border-radius: 4px;
    width: 50%;
    animation: skeleton 1s ease-in infinite alternate;
    margin: 0 1em;
    display: block;
  }

  span {
    height: 10px;
    background: hsl(0, 0%, 95%);
    border-radius: 4px;
    width: 50%;
    animation: skeleton 1s ease-in infinite alternate;
    margin: 0 1em;
    display: block;
  }
`;
