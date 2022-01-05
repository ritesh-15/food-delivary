import { useRestaurantStep } from "../../../../hooks";

export default function Agreement() {
  const { prevStep } = useRestaurantStep();
  return (
    <div>
      <button onClick={prevStep}>prev</button>
    </div>
  );
}
