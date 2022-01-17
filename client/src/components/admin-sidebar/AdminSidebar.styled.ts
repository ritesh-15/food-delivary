import styled from "styled-components";

export const AdminSidebarContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  max-width: 300px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1em 0;
  position: sticky;
  top: 0;
`;

export const Menu = styled.ul`
  li {
    padding: 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 1em;

    &:hover {
      background: hsl(33, 100%, 95%);
    }

    span {
      margin-left: 1em;
    }
  }
`;
