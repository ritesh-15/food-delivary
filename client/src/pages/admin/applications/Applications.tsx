import { useState } from "react";
import { AdminApplication } from "../../../components";
import {
  ApplicationsContainer,
  MainContainer,
  Wrapper,
} from "./Applications.styled";

const Applications = () => {
  const [show, setShow] = useState<number>(0);

  return (
    <ApplicationsContainer>
      <Wrapper>
        <MainContainer>
          <AdminApplication />
        </MainContainer>
      </Wrapper>
    </ApplicationsContainer>
  );
};

export default Applications;
