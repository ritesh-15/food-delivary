import styled from "styled-components";

export const ProductContainer = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-between;
`;

export const ProductImage = styled.div`
  max-width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 1em;
  width: 25%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  margin-left: 2em;

  button {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    margin-top: 1em;
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.5em 1em;

    span {
      margin-left: 0.25em;
      text-transform: uppercase;
    }
  }

  p {
    margin-top: 0.5em;
    color: ${({ theme }) => theme.colors.textLight};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-weight: 500;
    }

    div {
      width: 15px;
      height: 15px;
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        width: 10px;
        height: 10px;
        background: ${({ theme }) => theme.colors.secondary};
        border-radius: 50%;
      }
    }
  }
`;
