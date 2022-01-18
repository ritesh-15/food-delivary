import { useState } from "react";
import { AdminApplication } from "../../../components";
import {
  ApplicationsContainer,
  MainContainer,
  Wrapper,
} from "./Applications.styled";

const Applications = () => {
  const [show, setShow] = useState<number>(0);

  const toggleAccordian = (index: number) => {
    if (show === index) {
      return setShow(0);
    }
    setShow(index);
  };

  return (
    <ApplicationsContainer>
      <Wrapper>
        <MainContainer>
          <AdminApplication active={show} toggle={toggleAccordian} index={1} />
          <AdminApplication active={show} toggle={toggleAccordian} index={2} />
        </MainContainer>
      </Wrapper>
    </ApplicationsContainer>
  );
};

export default Applications;
