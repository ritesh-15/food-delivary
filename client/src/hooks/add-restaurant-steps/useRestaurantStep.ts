import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setStep } from "../../features/addrestaurantsteps/addRestaurantSlice";

export default function useRestaurantStep() {
  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.restaurantStep.step);

  const prevStep = () => {
    dispatch(setStep(step - 1));
  };

  const nextStep = () => {
    dispatch(setStep(step + 1));
  };

  return { step, prevStep, nextStep };
}
