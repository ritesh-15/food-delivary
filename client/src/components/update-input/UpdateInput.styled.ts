import styled from "styled-components";

export const UpdateContainer = styled.div`
  h1 {
    font-weight: 500;
    font-size: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5em;
    width: 100% !important;

    p {
      /* color: ${({ theme }) => theme.colors.textLight}; */
      width: 100%;
      display: block;
    }
  }

  input {
    width: 100%;
    padding: 1em;
    border-radius: 4px;
    margin-top: 0.5em;
    outline: none;
    border: none;
    background: #f5f5f5;
  }
`;
