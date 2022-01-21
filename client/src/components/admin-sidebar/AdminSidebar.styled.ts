import styled from "styled-components";

interface SidebarProps {
  open: boolean;
}

export const AdminSidebarContainer = styled.div<SidebarProps>`
  width: 100%;
  height: calc(100vh - 81px);
  background: #fff;
  max-width: 300px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1em 0;
  position: sticky;
  top: 81px;
  z-index: 100;

  @media (max-width: 768px) {
    position: fixed;
    left: ${(props) => (props.open ? "0" : "-100%")};
    transition: all 160ms ease-in;
  }
`;

export const Menu = styled.ul`
  li {
    padding: 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 1em;
    background: inherit;

    span {
      margin-left: 1em;
    }
  }
`;
