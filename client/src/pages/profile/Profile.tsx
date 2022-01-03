import { ChangeEvent, useState } from "react";
import { UpdateInput } from "../../components";
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
  const [values, setValues] = useState({
    firstname: "Ritesh",
    lastname: "Khore",
    email: "riteshkhore@gmail.com",
    number: "9960130524",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Container>
      <Wrapper>
        <ProfileTop>
          <Image>
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </Image>
          <ProfileTopInfo>
            <h1>Ritesh Khore</h1>
            <span>riteshkhore@gmail.com</span>
            <span>9960130524</span>
          </ProfileTopInfo>
        </ProfileTop>
        <ProfileDetails>
          <Row>
            <UpdateInput
              value={values.firstname}
              onChange={handleChange}
              title="First name"
              name="firstname"
            />
            <UpdateInput
              value={values.lastname}
              onChange={handleChange}
              title="Last name"
              name="lastname"
            />
          </Row>
          <Row>
            <UpdateInput
              value={values.email}
              onChange={handleChange}
              title="Email address"
              name="email"
            />
            <UpdateInput
              value={values.number}
              onChange={handleChange}
              title="Phone number"
              name="number"
            />
          </Row>
          <Button>Update</Button>
        </ProfileDetails>
      </Wrapper>
    </Container>
  );
};

export default Profile;
