import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setLoadingState } from "../../features/fetch-loader/fetchLoaderSlice";

const useFetchLoading = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.fetchLoading);

  const setIsLoading = (val: boolean): void => {
    dispatch(setLoadingState(val));
  };

  return { isLoading, setIsLoading };
};

export default useFetchLoading;
