import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.pure};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  right: 0;
  width: 100%;
`;

export const Nav = styled.nav`
  padding: 1em 0;
`;

export const NavBrand = styled.div`
  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    /* margin-left: 0.5em; */
  }
`;

export const NavItems = styled.div`
  li {
    padding: 0 1.5em;
    font-size: 1.25rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textLight};
    transition: all 160ms ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    span {
      margin-left: 0.5em;
    }
  }
`;
