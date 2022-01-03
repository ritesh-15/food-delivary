import styled from "styled-components";

export const UpdateContainer = styled.div`
  h1 {
    font-weight: 500;
    font-size: 1.1rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1em;
    width: 100% !important;

    p {
      /* color: ${({ theme }) => theme.colors.textLight}; */
      width: 100%;
      display: block;
    }
  }
`;
