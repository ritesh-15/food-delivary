import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2em;
  width: 100%;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  border-radius: 0.5em;
  cursor: pointer;
  margin-bottom: 1em;
  background: hsl(200, 44%, 39%);

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

export const HeadingSubDiv = styled.div``;

export const Content = styled.div``;
