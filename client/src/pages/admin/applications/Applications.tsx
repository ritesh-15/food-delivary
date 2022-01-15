import { useState } from "react";
import { AdminSidebar } from "../../../components";
import Button from "../../../styles/Button";
import {
  ActionsContainer,
  ApplicationContainer,
  ApplicationMain,
  ApplicationsContainer,
  ApplicationStatus,
  ApplicationWrapper,
  Details,
  MainContainer,
  Title,
  Wrapper,
} from "./Applications.styled";

const Applications = () => {
  const [status, setStatus] = useState("pending");

  return (
    <>
      <ApplicationsContainer>
        <Wrapper>
          <AdminSidebar />
          <MainContainer>
            <ApplicationContainer>
              <ApplicationWrapper>
                <ApplicationMain>
                  <Title>
                    <h4>Application ID : 41316455</h4>
                    <h1>Sweet Home, Veg and Non Veg Restaurant</h1>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                  </Title>
                  <Details>
                    <h4>User ID : 4123646d4</h4>
                    <h4>Application Date : 10/01/2022</h4>
                  </Details>
                  <ActionsContainer>
                    <Button>View</Button>
                    <Button>Accept</Button>
                    <Button>Reject</Button>
                  </ActionsContainer>
                </ApplicationMain>
                <ApplicationStatus status={status}>
                  <h1>
                    Status : <span>Pending</span>
                  </h1>
                </ApplicationStatus>
              </ApplicationWrapper>
            </ApplicationContainer>
            <ApplicationContainer>
              <ApplicationWrapper>
                <ApplicationMain>
                  <Title>
                    <h4>Application ID : 41316455</h4>
                    <h1>Sweet Home, Veg and Non Veg Restaurant</h1>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                  </Title>
                  <Details>
                    <h4>User ID : 4123646d4</h4>
                    <h4>Application Date : 10/01/2022</h4>
                  </Details>
                  <ActionsContainer>
                    <Button>View</Button>
                    <Button>Accept</Button>
                    <Button>Reject</Button>
                  </ActionsContainer>
                </ApplicationMain>
                <ApplicationStatus status={status}>
                  <h1>
                    Status : <span>Pending</span>
                  </h1>
                </ApplicationStatus>
              </ApplicationWrapper>
            </ApplicationContainer>
          </MainContainer>
        </Wrapper>
      </ApplicationsContainer>
    </>
  );
};

export default Applications;
