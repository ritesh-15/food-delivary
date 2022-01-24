import { useEffect } from "react";
import { useFetchLoading, useMessage, useUser } from "..";
import { api } from "../../api/axios";

const useRefresh = () => {
  const { setMessage } = useMessage();
  const { changeUserState } = useUser();
  const { setIsLoading } = useFetchLoading();

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get("/refresh");
      if (data.ok) {
        changeUserState(data.user);
      }
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setMessage("Session expires please login again", true);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
};

export default useRefresh;
