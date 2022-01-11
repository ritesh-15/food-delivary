import styled from "styled-components";

export const ImagesContainer = styled.div`
  width: 70%;

  input {
    display: none;
  }

  label {
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 1em;
    display: block;
    font-size: 1.1rem;
    cursor: pointer;
    text-align: center;
  }

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    width: fit-content;

    &:first-child {
      background: transparent;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ImageDiv = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 1em;

  img {
    width: 100%;
    height: auto;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
`;
