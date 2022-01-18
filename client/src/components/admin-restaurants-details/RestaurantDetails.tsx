import {
  BlockButton,
  Controls,
  DeleteButton,
  DetailsContainer,
  Grid,
  ImageContainer,
  InformationContainer,
  MoreDetailsContainer,
  Title,
  TopSection,
  Wrapper,
} from "./RestaurantDetails.styled";
import StarIcon from "@mui/icons-material/Star";
import Button from "../../styles/Button";
import { Block, Delete } from "@mui/icons-material";

const RestaurantDetails = () => {
  return (
    <Wrapper>
      <TopSection>
        <ImageContainer>
          <img
            src="https://images.unsplash.com/photo-1642425149665-614cf4bc8749?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </ImageContainer>
        <DetailsContainer>
          <h1>PK Biryani House</h1>
          <p>Biryani, Maharashtrian, Malwani, Mughlai</p>
          <span>Swargate, Pune</span>
          <div>
            <StarIcon style={{ fontSize: "1rem" }} />
            <span>4.5</span>
          </div>
        </DetailsContainer>
      </TopSection>
      <MoreDetailsContainer>
        <Title>
          <h1>Owner Information</h1>
        </Title>
        <Grid>
          <InformationContainer>
            <h1>Owner name</h1>
            <p>Ritesh Khore</p>
          </InformationContainer>
          <InformationContainer>
            <h1>Owner contact number</h1>
            <p>9970834262</p>
          </InformationContainer>
          <InformationContainer>
            <h1>Owner email address</h1>
            <p>9970834262</p>
          </InformationContainer>
        </Grid>
        <Title>
          <h1>Restaurant Details</h1>
        </Title>
        <Grid>
          <InformationContainer>
            <h1>Famous for</h1>
            <p>Pav bhaji</p>
          </InformationContainer>
          <InformationContainer>
            <h1>Food type</h1>
            <p>Vegeterian and non vegeterian</p>
          </InformationContainer>
          <InformationContainer>
            <h1>Number of customers</h1>
            <p>50</p>
          </InformationContainer>
          <InformationContainer>
            <h1>Located in</h1>
            <p>Pune</p>
          </InformationContainer>
          <InformationContainer>
            <h1>Pin code</h1>
            <p>413115</p>
          </InformationContainer>
        </Grid>
        <Controls>
          <BlockButton>
            <Button>
              <Block />
              <span>Block temporary</span>
            </Button>
          </BlockButton>
          <DeleteButton>
            <Button hover>
              <Delete />
              <span>Delete permenantly</span>
            </Button>
          </DeleteButton>
        </Controls>
      </MoreDetailsContainer>
    </Wrapper>
  );
};

export default RestaurantDetails;
