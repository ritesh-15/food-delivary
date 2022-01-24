import { ChangeEvent, useEffect } from "react";
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

const Address = () => {
  const [doorNumber, setDoorNumber] = useState("");
  const [addressCordinates, setAddressCordinates] = useState<number[]>();
  const [placeName, setPlaceName] = useState("");

  const changeAddressCordinates = (cordinates: number[]): void => {
    setAddressCordinates(cordinates);
  };

  const getUserAddressLocation = async () => {
    if (!addressCordinates) return;

    try {
      const { data } = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressCordinates[0]},${addressCordinates[1]}.json?limit=1&types=postcode%2Caddress%2Clocality%2Cdistrict%2Cpoi%2Cregion%2Ccountry%2Cplace%2Cneighborhood&access_token=pk.eyJ1Ijoicml0ZXNoa2hvcmUxNSIsImEiOiJja3lzN3JkaHMxMHh2Mm9tbWJ5YTJpbW1rIn0.3srv_m-eyJLcRvyNRNIKnQ`
      );
      console.log(data);
      setPlaceName(data.features[0].place_name);
    } catch (err) {}
  };

  useEffect(() => {
    if (!addressCordinates) return;
    getUserAddressLocation();
  }, [addressCordinates]);

  return (
    <Wrapper>
      <CenterContainer>
        <MapContainer>
          <Map
            currentCordinates={addressCordinates}
            setCurrentCordinates={changeAddressCordinates}
          />
        </MapContainer>
        <ShowAddress>
          <h1>Adress</h1>
          <p>{placeName}</p>
        </ShowAddress>
        <Details>
          <Input
            title="Flat number"
            value={doorNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDoorNumber(e.target.value)
            }
            type="text"
            name="doorNumber"
          />
        </Details>
        <Details>
          <Input
            title="Landmark"
            value={doorNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDoorNumber(e.target.value)
            }
            type="text"
            name="doorNumber"
          />
        </Details>
        <DelivaryLocationType>
          <Location>
            <HomeIcon />
            <Label>Home</Label>
          </Location>
          <Location>
            <ApartmentIcon />
            <Label>Office</Label>
          </Location>
        </DelivaryLocationType>
        <Button hover>Save Address</Button>
      </CenterContainer>
    </Wrapper>
  );
};

export default Address;
