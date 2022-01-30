import styled from "styled-components";

export const InfoContainer = styled.div`
  padding-top: 2em;
  position: relative;
`;

interface WrapperProps {
  sticky: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  position: sticky;
  top: 0;
  background: #fff;
  width: 100%;
  left: 0px;
  right: 0;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 200;
  padding-top: ${({ sticky }) => (sticky ? "1em" : "0")};
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid hsl(0, 0%, 70%);
  padding-bottom: 2em;
  position: relative;
  width: 100%;
`;

export const ImageContainer = styled.div<WrapperProps>`
  width: 100%;
  max-width: ${({ sticky }) => (sticky ? "200px" : "200px")};
  height: ${({ sticky }) => (sticky ? "150px" : "200px")};
  overflow: hidden;
  border-radius: 1em;
  transition: all 160ms ease-in;

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;

export const Information = styled.div<WrapperProps>`
  width: 80%;
  margin-left: 2em;

  h4 {
    margin-bottom: 0.5em;
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    text-transform: capitalize;
  }

  button {
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.textLight};
    margin-top: 1em;
    color: ${({ theme }) => theme.colors.textLight};
    opacity: ${({ sticky }) => (sticky ? "0" : "1")};
    pointer-events: ${({ sticky }) => (sticky ? "none" : "auto")};
    transition: opacity 250ms ease-in;

    span {
      margin-left: 0.5em;
    }
  }
`;

export const InformationTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25em;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
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

export const Search = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  padding: 1em;
  background: #f7f7f7;
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: ${({ sticky }) => (sticky ? "0px" : "-20px")};
  left: 0;
  right: 0;
  margin: 0 auto;

  &:focus-within {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    background: #fff;
  }

  input {
    outline: none;
    border: none;
    font-size: 1rem;
    margin-left: 0.5em;
    background: transparent;
  }
`;

export const ProductsContainer = styled.div`
  margin-top: 2em;
  display: flex;
`;

export const Menu = styled.div<WrapperProps>`
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  width: 20%;
  position: sticky;
  top: calc(200px + 2em);
  height: 100%;
  background: #fff;
`;

interface MenuListProps {
  active: boolean;
}

export const MenuList = styled.li<MenuListProps>`
  padding: 0.5em 0;
  padding-right: 2em;
  text-align: right;
  cursor: pointer;
  position: relative;
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.textLight};

  &::after {
    content: "";
    width: 3px;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: -2px;
    background: ${({ theme, active }) =>
      active ? theme.colors.primary : "transparent"};
    border-radius: 2em;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Products = styled.div`
  width: 80%;
  margin-left: auto;
`;
