import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 1em;
`;

export const FeatureCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

interface Props {
  down?: boolean;
}

export const FeatureCard = styled.div<Props>`
  padding: 1em;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  position: relative;
  width: 100%;
  cursor: pointer;
  transition: all 160ms ease-in;
  max-width: 300px;

  &:hover {
    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.2);
  }

  h1 {
    font-size: 1.15rem;
    font-weight: 500;
    margin-bottom: 0.5em;
  }

  div {
    color: ${({ theme, down }) => (down ? "#fa1505" : theme.colors.secondary)};
    display: flex;
    align-items: center;

    span {
      margin-left: 0.5em;
      font-size: 2rem;
    }
  }

  p {
    font-weight: 300;
    font-size: 0.85rem;
    margin-top: 0.5em;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ theme, down }) =>
      down ? "#fa1505" : theme.colors.secondary};
    top: 0;
    bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const ChartDiv = styled.div`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  padding: 1em;
  margin-top: 2rem;

  h1 {
    margin-bottom: 1rem;
    font-size: 1.15rem;
    font-weight: 500;
  }
`;
