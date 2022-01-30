import Button from "../../styles/Button";
import Container from "../../styles/Container";
import { MainContainer, Menu, Wrapper } from "./AdminTopBar.styled";
import LogoutIcon from "@mui/icons-material/Logout";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setOpen } from "../../features/sidebar/sidebarSlice";
import { logOutApi } from "../../api/authenticationApi";
import { useFetchLoading, useMessage, useUser } from "../../hooks";

const AdminTopBar = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state: RootState) => state.sidebar);
  const { removeUser } = useUser();
  const { setIsLoading } = useFetchLoading();
  const { setMessage } = useMessage();

  // user log out
  const logOut = async () => {
    setIsLoading(true);
    try {
      await logOutApi();
      removeUser();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setMessage("Something went wrong!");
    }
  };

  return (
    <Wrapper>
      <Container>
        <MainContainer>
          <div>
            <Menu onClick={() => dispatch(setOpen(!open))} />
            <h1>Foodies</h1>
          </div>
          <Button onClick={logOut}>
            <LogoutIcon />
            <span>Log out</span>
          </Button>
        </MainContainer>
      </Container>
    </Wrapper>
  );
};

export default AdminTopBar;
