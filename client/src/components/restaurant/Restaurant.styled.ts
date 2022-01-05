import styled from "styled-components";

export const RestaurantContainer = styled.div`
  max-width: 100%;
  padding: 1em;
  border-radius: 1em;
  margin: 0.5em 0;
  cursor: pointer;
  transition: all 160ms ease-in;
  animation: bounce 0.5s 1 ease-in forwards;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
`;

export const RestaurantImage = styled.div`
  max-width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 1em;

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
