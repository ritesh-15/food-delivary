import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setSuccessModalState } from "../../features/success-modal/successModalSlice";

const useSuccessModal = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.successModal);

  const setSuccessModal = (
    title: string,
    open: boolean = true,
    description?: string,
    callback?: () => void
  ) => {
    dispatch(
      setSuccessModalState({ open: open, title, description, callback })
    );
  };

  return { state, setSuccessModal, callback: state.callback };
};

export default useSuccessModal;
