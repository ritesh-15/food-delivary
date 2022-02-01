import { ChangeEvent, useState } from "react";
import { Address, UpdateInput } from "../../components";
import { useUser } from "../../hooks";
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

const iconStyle = {
  color: "hsl(0,0%,60%)",
  marginTop: "1em",
  cursor: "pointer",
};

const Profile = () => {
  const { user } = useUser();

  // show address
  const [showAddress, setShowAddress] = useState<boolean>(false);

  const [values, setValues] = useState({
    name: user ? user.name : "",
    email: user ? user.email : "",
    number: user ? user.number.toString() : "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
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
            <AddressMainContainer>
              <p>
                11, Mahatma Jyotiba Phule, Shop No.235/36/37, Fruit Market Rd,
                Mandai, Shukrawar Peth, Pune, Maharashtra 411002, India
              </p>
              <Delete style={iconStyle} />
            </AddressMainContainer>
            <AddressMainContainer>
              <p>
                11, Mahatma Jyotiba Phule, Shop No.235/36/37, Fruit Market Rd,
                Mandai, Shukrawar Peth, Pune, Maharashtra 411002, India
              </p>{" "}
              <Delete style={iconStyle} />
            </AddressMainContainer>
            <AddressMainContainer onClick={() => setShowAddress(true)}>
              <AddIcon />
              <p>Add new address</p>
            </AddressMainContainer>
          </AddressContainer>
          <Button hover>Save</Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Profile;
