import styled from "styled-components";

export const RestaurantContainer = styled.div`
  max-width: 100%;
  padding: 0.75em;
  border-radius: 0.5em;
  margin: 0.5em 0;
  cursor: pointer;
  transition: all 160ms ease-in;
  animation: show 0.5s 1 ease-in;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  @keyframes show {
    0% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const RestaurantImage = styled.div`
  max-width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 8px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const RestaurantInfo = styled.div`
  margin-top: 1em;
`;

export const Heading = styled.div`
  h1 {
    font-weight: 500;
    text-transform: capitalize;
  }

  margin-bottom: 0.5em;
`;

export const SubHeading = styled.div`
  h4 {
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.95rem;
    text-transform: capitalize;
  }

  span {
    font-size: 0.85rem;
  }
`;

export const Rating = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  border-radius: 0.25em;
  padding: 0.2em;

  span {
    font-size: 0.75rem;
    margin-left: 0.25em;
  }
`;
