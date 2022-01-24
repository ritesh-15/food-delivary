import { ChangeEvent, useState } from "react";
import { UpdateInput } from "../../components";
import { useUser } from "../../hooks";
import Button from "../../styles/Button";
import Container from "../../styles/Container";
import {
  Image,
  ProfileDetails,
  ProfileTop,
  ProfileTopInfo,
  Row,
  Wrapper,
} from "./Profile.styled";

const Profile = () => {
  const { user } = useUser();

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
              value={values.email}
              onChange={handleChange}
              title="Email address"
              name="email"
            />
          </Row>
          <Row>
            <UpdateInput
              value={values.number}
              onChange={handleChange}
              title="Phone number"
              name="number"
            />
          </Row>

          <Button>Save</Button>
        </ProfileDetails>
      </Wrapper>
    </Container>
  );
};

export default Profile;
