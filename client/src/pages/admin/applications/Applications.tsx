import { AdminApplication } from "../../../components";
import {
  ApplicationsContainer,
  MainContainer,
  Wrapper,
} from "./Applications.styled";

const Applications = () => {
  return (
    <ApplicationsContainer>
      <Wrapper>
        <MainContainer>
          <AdminApplication index={1} />
          <AdminApplication index={2} />
        </MainContainer>
      </Wrapper>
    </ApplicationsContainer>
  );
};

export default Applications;
