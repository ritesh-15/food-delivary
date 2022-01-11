import { useRestaurantStep } from "../../../../hooks";
import Button from "../../../../styles/Button";
import Flex from "../../../../styles/Flex";
import { AgreementContainer } from "./Agreement.styled";

export default function Agreement() {
  const { prevStep } = useRestaurantStep();
  return (
    <AgreementContainer>
      <div>
        <input type="checkbox" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates in
          vitae debitis culpa? Odit veniam sequi, ipsum dolor optio aliquam
          molestiae sunt, incidunt, magnam provident id natus ullam pariatur
          eaque!
        </p>
      </div>
      <Flex>
        <Button onClick={prevStep}>Previous</Button>
        <Button>Submit</Button>
      </Flex>
    </AgreementContainer>
  );
}
