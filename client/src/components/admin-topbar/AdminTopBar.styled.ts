import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1em;
  border-bottom: 1px solid hsl(0, 0%, 80%);
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 100;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    display: flex;
    align-items: center;

    span {
      margin-left: 0.5em;
    }
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    /* margin-left: 0.5em; */
  }
`;
