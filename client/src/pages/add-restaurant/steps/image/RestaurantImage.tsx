import { useRestaurantStep } from "../../../../hooks";
import Button from "../../../../styles/Button";
import Flex from "../../../../styles/Flex";
import {
  BtnContainer,
  ImageDiv,
  ImagesContainer,
} from "./RestaurantImage.styled";

export default function RestaurantImage() {
  const { prevStep, nextStep } = useRestaurantStep();

  return (
    <ImagesContainer>
      <ImageDiv>
        <img
          src="https://images.unsplash.com/photo-1641857800507-a6048a9d99a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </ImageDiv>
      <label htmlFor="cover">Choose a picture</label>
      <input type="file" id="cover" />

      <BtnContainer>
        <Button onClick={prevStep}>Previous</Button>
        <Button onClick={nextStep}>Next</Button>
      </BtnContainer>
    </ImagesContainer>
  );
}
