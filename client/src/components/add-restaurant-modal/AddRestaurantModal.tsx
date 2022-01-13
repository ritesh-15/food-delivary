import { Content, Main, Wrapper } from "./AddRestaurantModal.styled";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "../../styles/Button";
import Flex from "../../styles/Flex";

const checkStyle = {
  fontSize: "5rem",
  color: "hsl(150, 87%, 43%)",
  margin: "0 auto",
};

const AddRestaurantModal = () => {
  return (
    <Wrapper>
      <Main>
        <Flex>
          <CheckCircleIcon style={checkStyle} />
        </Flex>

        <Content>
          <h1>Application submited successfully!</h1>
          <p>
            Your application for adding restaurant has been submited
            successfully. Your Application ID <span>14863255</span>
          </p>
          <Button>Ok</Button>
        </Content>
      </Main>
    </Wrapper>
  );
};

export default AddRestaurantModal;
