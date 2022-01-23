import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setSuccessModalState } from "../../features/success-modal/successModalSlice";

const useSuccessModal = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.successModal);

  const setSuccessModal = (
    title: string,
    open: boolean = true,
    description?: string
  ) => {
    dispatch(setSuccessModalState({ open: open, title, description }));
  };

  return { state, setSuccessModal };
};

export default useSuccessModal;
