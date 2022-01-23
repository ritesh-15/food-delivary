import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setError } from "../../features/error-message/errorMessageSlice";

const useErrorMessage = () => {
  const dispatch = useDispatch();

  const { message } = useSelector((state: RootState) => state.error);

  const changeErrorMessage = (message: string) => {
    dispatch(setError(message));
  };

  let time: NodeJS.Timeout;

  useEffect(() => {
    time = setTimeout(() => {
      dispatch(setError(""));
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, [message]);

  return { changeErrorMessage, message };
};

export default useErrorMessage;
