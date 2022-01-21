import Button from "../../styles/Button";
import Container from "../../styles/Container";
import { MainContainer, Menu, Wrapper } from "./AdminTopBar.styled";
import LogoutIcon from "@mui/icons-material/Logout";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setOpen } from "../../features/sidebar/sidebarSlice";

const AdminTopBar = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state: RootState) => state.sidebar);

  return (
    <Wrapper>
      <Container>
        <MainContainer>
          <div>
            <Menu onClick={() => dispatch(setOpen(!open))} />
            <h1>Foodies</h1>
          </div>
          <Button hover>
            <LogoutIcon />
            <span>Log out</span>
          </Button>
        </MainContainer>
      </Container>
    </Wrapper>
  );
};

export default AdminTopBar;
