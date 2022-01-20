import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 700;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.div`
  width: 90%;
  max-width: 700px;
  background: #fff;
  padding: 1em;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 1.25rem;
    display: block;
    font-weight: 500;
  }
`;

export const PDFContainer = styled.div``;

export const ImageContainer = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
