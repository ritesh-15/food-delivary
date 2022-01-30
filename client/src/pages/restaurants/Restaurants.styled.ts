import styled from "styled-components";

export const RestaurantsContainer = styled.div`
  padding-top: 3em;
  margin-bottom: 2em;
  width: 100%;
`;

export const Title = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 1em;
  margin-bottom: 1em;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  h4 {
    margin-top: 0.5em;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1em;
  height: 100%;
`;
