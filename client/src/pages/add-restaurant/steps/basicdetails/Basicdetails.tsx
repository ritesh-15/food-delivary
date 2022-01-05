import { useRestaurantStep } from "../../../../hooks";

export default function Basicdetails() {
  const { nextStep } = useRestaurantStep();

  return (
    <div>
      <button onClick={nextStep}>next</button>
    </div>
  );
}
