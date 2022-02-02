import { ChangeEvent, useState } from "react";
import { Address, UpdateInput } from "../../components";
import { useFetchLoading, useMessage, useUser } from "../../hooks";
import Button from "../../styles/Button";
import Container from "../../styles/Container";
import {
  AddressContainer,
  Image,
  ProfileDetails,
  ProfileTop,
  ProfileTopInfo,
  Row,
  Wrapper,
  AddressMainContainer,
  Title,
} from "./Profile.styled";
import AddIcon from "@mui/icons-material/Add";
import { Delete } from "@mui/icons-material";
import UserApi from "../../api/usersApi";

const iconStyle = {
  color: "hsl(0,0%,60%)",
  marginTop: "1em",
  cursor: "pointer",
};

const Profile = () => {
  const { user, changeUserState } = useUser();
  const { setMessage } = useMessage();
  const { setIsLoading } = useFetchLoading();

  // show address
  const [showAddress, setShowAddress] = useState<boolean>(false);

  const [values, setValues] = useState({
    name: user ? user.name : "",
    number: user ? user.number.toString() : "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // update user
  const updateUser = async () => {
    if (!values.name || !values.number)
      return setMessage("Please fill all fields", true);

    // mobile number validation
    if (!values.number.match(/^[0-9]{10}$/)) {
      return setMessage("Please enter a valid mobile number", true);
    }

    setIsLoading(true);
    try {
      const { data } = await UserApi.updateUser(values);
      if (data.ok) {
        changeUserState(data.user);
        setMessage("Information updated successfully", false);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setMessage("Something went wrong", true);
    }
  };

  // remove address
  const removeAddress = async (id: string) => {
    setIsLoading(true);
    try {
      const { data } = await UserApi.removeAddress(id);
      if (data.ok) {
        changeUserState(data.user);
        setMessage("Address removed succesfully", false);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setMessage("Something went wrong", true);
    }
  };

  return (
    <>
      {showAddress && <Address setOpen={setShowAddress} />}
      <Container>
        <Wrapper>
          <ProfileTop>
            <ProfileTopInfo>
              <h1>{user?.name}</h1>
              <span>{user?.email}</span>
              <span>{user?.number}</span>
            </ProfileTopInfo>
          </ProfileTop>
          <ProfileDetails>
            <Row>
              <UpdateInput
                value={values.name}
                onChange={handleChange}
                title="First name"
                name="name"
              />
              <UpdateInput
                value={values.number}
                onChange={handleChange}
                title="Phone number"
                name="number"
              />
            </Row>
          </ProfileDetails>
          <Title>
            <h1>Address</h1>
          </Title>
          <AddressContainer>
            {user?.addresses.map((address) => (
              <AddressMainContainer key={address._id}>
                <p>{address.placeName}</p>
                <Delete
                  onClick={() => removeAddress(address._id)}
                  style={iconStyle}
                />
              </AddressMainContainer>
            ))}

            <AddressMainContainer onClick={() => setShowAddress(true)}>
              <AddIcon />
              <p>Add new address</p>
            </AddressMainContainer>
          </AddressContainer>
          <Button onClick={updateUser} hover>
            Save
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Profile;
