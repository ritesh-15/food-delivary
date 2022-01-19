import styled from "styled-components";

export const AdminSidebarContainer = styled.div`
  width: 100%;
  height: calc(100vh - 81px);
  background: #fff;
  max-width: 300px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1em 0;
  position: sticky;
  top: 81px;
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
