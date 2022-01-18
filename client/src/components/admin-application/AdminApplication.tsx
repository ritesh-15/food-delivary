import Button from "../../styles/Button";
import {
  Actions,
  ApplicationContainer,
  ApplicationDetails,
  ApplicationHeading,
  ApplicationWrap,
  ContentDiv,
  Image,
  Information,
  Title,
} from "./AdminApplication.styled";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  Check,
  Close,
} from "@mui/icons-material";
import { FC } from "react";

interface props {
  index: number;
  toggle(index: number): void;
  active: number;
}

const AdminApplication: FC<props> = ({ index, toggle, active }) => {
  return (
    <ApplicationContainer>
      <ApplicationWrap onClick={() => toggle(index)}>
        <div>
          <h1>Application ID</h1>
          <p>4578913365</p>
        </div>
        <div>
          <h1>User ID</h1>
          <p>4578913365</p>
        </div>
        <div>
          <h1>Application Date</h1>
          <p>11-04-2002</p>
        </div>
        <div>
          <h1>Application Status</h1>
          <span>Pending</span>
        </div>
        <div>
          {active === index ? (
            <KeyboardArrowUp style={{ color: "#fff" }} />
          ) : (
            <KeyboardArrowDown style={{ color: "#fff" }} />
          )}
        </div>
      </ApplicationWrap>

      {active === index && (
        <ContentDiv>
          <ApplicationHeading>
            <Image>
              <img
                src="https://images.unsplash.com/photo-1642289805782-1c30f6a9e3a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </Image>
            <Title>
              <div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div>
                <h4>Application ID</h4>
                <p>451255647</p>
              </div>
              <div>
                <h4>User ID</h4>
                <p>451255647</p>
              </div>
            </Title>
          </ApplicationHeading>
          <ApplicationDetails>
            <Information>
              <h1>Famous for</h1>
              <p>Vegeterian and non vegeterian foods</p>
            </Information>
            <Information>
              <h1>Food type</h1>
              <p>Vegeterian and non vegeterian</p>
            </Information>
            <Information>
              <h1>Number of food products</h1>
              <p>100</p>
            </Information>
            <Information>
              <h1>Minimum price of food</h1>
              <p>100</p>
            </Information>
            <Information>
              <h1>Number of daily customers</h1>
              <p>100</p>
            </Information>
            <Information>
              <h1>Located in</h1>
              <p>100</p>
            </Information>
            <Information>
              <h1>Pin code of locality</h1>
              <p>100</p>
            </Information>
            <Information>
              <h1>Contact number</h1>
              <p>100</p>
            </Information>
          </ApplicationDetails>
          <Actions>
            <Button hover>
              <Check />
              <span>Accept</span>
            </Button>
            <Button>
              <Close />
              <span>Reject</span>
            </Button>
          </Actions>
        </ContentDiv>
      )}
    </ApplicationContainer>
  );
};

export default AdminApplication;
