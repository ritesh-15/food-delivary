import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setStep } from "../../features/complete-profile-slice/completeProfileSlice";

export default function useCompleteProfileSteps() {
  const dispatch = useDispatch();
  const step = useSelector((state: RootState) => state.completeProfile.step);

  const nextStep = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(setStep(step + 1));
  };

  const previousStep = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(setStep(step - 1));
  };

  return { step, nextStep, previousStep };
}
