import styled from "styled-components";

interface Props {
  sticky?: boolean;
}

export const HeaderContainer = styled.header<Props>`
  background: ${({ theme }) => theme.colors.pure};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
  width: 100%;
  position: ${({ sticky }) => (sticky ? "sticky" : "relative")};
  top: 0;
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
    position: relative;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.primary};

      ul {
        opacity: 1;
        visibility: visible;
        transition: all 250ms ease-in;
      }
    }

    span {
      margin-left: 0.5em;
    }
  }
`;

export const DropItems = styled.ul`
  position: absolute;
  background: #fff;
  padding: 1em;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;

  li {
    font-size: 0.95rem;
    padding: 0.5em 0;
  }
`;
