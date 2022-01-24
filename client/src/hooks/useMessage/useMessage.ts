import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setError } from "../../features/error-message/errorMessageSlice";

const useMessage = () => {
  const dispatch = useDispatch();

  const { message, error } = useSelector((state: RootState) => state.error);

  const setMessage = (message: string, error: boolean = false) => {
    dispatch(setError({ message, error }));
  };

  let time: NodeJS.Timeout;

  useEffect(() => {
    time = setTimeout(() => {
      dispatch(setError({ message: "", error: false }));
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, [message]);

  return { setMessage, message, error };
};

export default useMessage;
