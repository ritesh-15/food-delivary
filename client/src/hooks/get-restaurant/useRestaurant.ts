import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFetchLoading, useMessage, useUser } from "..";
import RestaurantApi from "../../api/restaurantApi";
import { setRestaurant } from "../../features/restaurant/restaurantSlice";

const useRestaurant = () => {
  const { user } = useUser();
  const dispatch = useDispatch();
  const { setMessage } = useMessage();
  const { setIsLoading } = useFetchLoading();

  useEffect(() => {
    if (!user?.isRestaurantOwner) return;

    (async () => {
      setIsLoading(true);
      try {
        const { data } = await RestaurantApi.getRestaurantByUserId();
        if (data.ok) {
          dispatch(setRestaurant(data.restaurant));
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setMessage("Something went wrong", true);
      }
    })();
  }, [user]);
};

export default useRestaurant;
