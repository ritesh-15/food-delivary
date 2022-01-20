import styled from "styled-components";

export const RadioContainer = styled.div`
  label {
    display: inline-flex;
    align-items: center;

    input {
      display: none;
    }

    div {
      width: 1.25em;
      height: 1.25em;
      border: 2px solid hsl(0, 0%, 50%);
      border-radius: 50%;
      margin-right: 0.75em;
      padding: 2px;
      cursor: pointer;
    }
  }
`;
