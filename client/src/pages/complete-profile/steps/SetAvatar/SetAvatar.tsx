import { useCompleteProfileSteps } from "../../../../hooks";
import Button from "../../../../styles/Button";
import Flex from "../../../../styles/Flex";
import { Avatar, AvatarContainer } from "./SetAvatar.styled";

export default function SetAvatar() {
  const { nextStep, previousStep } = useCompleteProfileSteps();

  return (
    <AvatarContainer>
      <h1>Set up a profile photo</h1>
      <Avatar>
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </Avatar>
      <label htmlFor="avatar">Chooce a picture</label>
      <input type="file" id="avatar" />
      <Flex>
        <Button onClick={previousStep}>Previous</Button>
        <Button onClick={nextStep}>Continue</Button>
      </Flex>
    </AvatarContainer>
  );
}
