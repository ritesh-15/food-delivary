import {
  ChangeEvent,
  MouseEventHandler,
  MutableRefObject,
  useEffect,
} from "react";
import {
  CenterContainer,
  DelivaryLocationType,
  Details,
  Label,
  Location,
  MapContainer,
  ShowAddress,
  Wrapper,
} from "./Address.styled";
import mapboxgl from "mapbox-gl";
import { Input, Map } from "..";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Button from "../../styles/Button";
import axios from "axios";
import { FC } from "react";
import { useFetchLoading, useMessage, useUser } from "../../hooks";
import { useRef } from "react";
import UserApi from "../../api/usersApi";

interface Props {
  setOpen(value: boolean): void;
}

const Address: FC<Props> = ({ setOpen }) => {
  const { user, changeUserState } = useUser();
  const { setIsLoading } = useFetchLoading();

  const [addressCordinates, setAddressCordinates] = useState<number[]>();
  const { setMessage } = useMessage();

  const [addressInfo, setAddressInfo] = useState({
    cordinates: {
      lat: 0,
      lng: 0,
    },
    placeName: "",
    country: "",
    state: "",
    district: "",
    locality: "",
    pinCode: "",
    landmark: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressInfo({ ...addressInfo, [name]: value });
  };

  const changeAddressCordinates = (cordinates: number[]): void => {
    setAddressCordinates(cordinates);
  };

  const getUserLocation = async () => {
    if (!addressCordinates) return;

    try {
      const { data } = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressCordinates[0]},${addressCordinates[1]}.json?limit=1&types=postcode%2Caddress%2Clocality%2Cdistrict%2Cpoi%2Cregion%2Ccountry%2Cplace%2Cneighborhood&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
      );

      const location = data.features[0];

      if (!location)
        return setMessage("Location not found please choose again!", true);

      setAddressInfo(() => {
        return {
          placeName: location?.place_name,
          cordinates: { lat: location?.center[0], lng: location?.center[1] },
          country: location.context.filter((e: any) =>
            e.id.includes("country")
          )[0]?.text,
          state: location.context.filter((e: any) => e.id.includes("region"))[0]
            ?.text,
          district: location.context.filter((e: any) =>
            e.id.includes("district")
          )[0]?.text,
          locality: location.context.filter((e: any) =>
            e.id.includes("place")
          )[0]?.text,
          pinCode: "",
          landmark: "",
        };
      });
    } catch (err) {}
  };

  useEffect(() => {
    if (!addressCordinates) return;
    getUserLocation();
  }, [addressCordinates]);

  const ref: MutableRefObject<null> = useRef(null);

  const closeAddressModal = (e: any) => {
    if (e.target === ref.current) {
      setOpen(false);
    }
  };

  // add addres
  const saveAddress = async () => {
    if (
      !addressInfo.cordinates ||
      !addressInfo.pinCode ||
      !addressInfo.landmark
    )
      return setMessage("Please fill all the fields", true);

    setIsLoading(true);

    try {
      const { data } = await UserApi.updateUser({
        ...user,
        address: addressInfo,
      });

      if (data.ok) {
        setOpen(false);
        changeUserState(data.user);
        setMessage("Address addedd successfully!", false);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setMessage("Something went wrong!", true);
    }
  };

  return (
    <Wrapper ref={ref} onClick={closeAddressModal}>
      <CenterContainer>
        <MapContainer>
          <Map
            currentCordinates={addressCordinates}
            setCurrentCordinates={changeAddressCordinates}
          />
        </MapContainer>
        <ShowAddress>
          <h1>Address</h1>
          <p>{addressInfo.placeName}</p>
        </ShowAddress>
        <Details>
          <Input
            title="Pin code"
            value={addressInfo.pinCode}
            onChange={handleChange}
            type="text"
            name="pinCode"
          />
        </Details>
        <Details>
          <Input
            title="Landmark"
            value={addressInfo.landmark}
            onChange={handleChange}
            type="text"
            name="landmark"
          />
        </Details>
        <Button onClick={saveAddress} hover>
          Save Address
        </Button>
      </CenterContainer>
    </Wrapper>
  );
};

export default Address;
