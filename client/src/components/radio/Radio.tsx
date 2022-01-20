import { RadioContainer } from "./Radio.style";

const Radio = () => {
  return (
    <RadioContainer>
      <label htmlFor="radio">
        <input type="radio" id="radio" name="radio" />
        <div></div>
        Value
      </label>
    </RadioContainer>
  );
};

export default Radio;
