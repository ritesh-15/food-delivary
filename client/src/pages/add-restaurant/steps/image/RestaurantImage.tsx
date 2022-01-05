import { useRestaurantStep } from "../../../../hooks";

export default function RestaurantImage() {
  const { prevStep, nextStep } = useRestaurantStep();

  return (
    <div>
      <button onClick={prevStep}>prev</button>
      <button onClick={nextStep}>next</button>
    </div>
  );
}
