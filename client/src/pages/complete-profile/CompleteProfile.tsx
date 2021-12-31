import {
  CompleteProfileContainer,
  StatusBar,
  StatusCircle,
  StatusDiv,
} from "./CompleteProfile.styled";
import Container from "../../styles/Container";
import {
  AddressInformation,
  PersonalInformation,
  SetAvatar,
  SetPassword,
} from "./steps";
import { useCompleteProfileSteps } from "../../hooks";

const STEPS: any = {
  1: PersonalInformation,
  2: AddressInformation,
  3: SetAvatar,
  4: SetPassword,
};

export default function CompleteProfile() {
  const { step } = useCompleteProfileSteps();

  const Component = STEPS[step];

  return (
    <Container>
      <CompleteProfileContainer>
        <StatusBar>
          <StatusDiv active={step >= 1 ? true : false}>
            <span>Personal Information</span>
            <StatusCircle></StatusCircle>
          </StatusDiv>
          <StatusDiv active={step >= 2 ? true : false}>
            <span>Address Information</span>
            <StatusCircle></StatusCircle>
          </StatusDiv>
          <StatusDiv active={step >= 3 ? true : false}>
            <span>Set Avatar</span>
            <StatusCircle></StatusCircle>
          </StatusDiv>
          <StatusDiv active={step == 4 ? true : false}>
            <span>Set Password</span>
            <StatusCircle></StatusCircle>
          </StatusDiv>
        </StatusBar>
        <Component />
      </CompleteProfileContainer>
    </Container>
  );
}
