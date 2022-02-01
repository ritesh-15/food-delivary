import styled from "styled-components";

export const Product = styled.div`
  display: flex;
  margin: 1em 0;

  padding-bottom: 1em;
`;

export const ProductImage = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 1em;

  img {
    width: 100%;
    height: auto;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductInfo = styled.div`
  margin-left: 1em;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
`;

export const ProductMainInfo = styled.div`
  h1 {
    font-size: 1.1rem;
  }

  p {
    margin-top: 0.25em;
    color: ${({ theme }) => theme.colors.textLight};
    display: block;
  }

  div {
    display: flex;
    margin-top: 1em;
    align-items: center;

    button {
      background: ${({ theme }) => theme.colors.primary};
      color: #fff;
      padding: 0 0.5em;
      font-weight: 500;
    }

    span {
      margin: 0 0.5em;
    }
  }
`;

export const ProductSubDetails = styled.div`
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
`;
