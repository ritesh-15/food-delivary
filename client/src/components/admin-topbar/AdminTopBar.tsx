import Button from "../../styles/Button";
import Container from "../../styles/Container";
import { MainContainer, Wrapper } from "./AdminTopBar.styled";
import LogoutIcon from "@mui/icons-material/Logout";

const AdminTopBar = () => {
  return (
    <Wrapper>
      <Container>
        <MainContainer>
          <h1>Foodies</h1>
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
