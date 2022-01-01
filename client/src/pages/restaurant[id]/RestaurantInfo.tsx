import Container from "../../styles/Container";
import {
  DetailsContainer,
  ImageContainer,
  InfoContainer,
  Information,
  InformationTop,
  Rating,
  Search,
} from "./RestaurantInfo.styled";
import { Star, FavoriteBorder, Search as Icon } from "@mui/icons-material";
import Button from "../../styles/Button";

function RestaurantInfo() {
  return (
    <Container>
      <InfoContainer>
        <DetailsContainer>
          <ImageContainer>
            <img
              src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </ImageContainer>
          <Information>
            <InformationTop>
              <h1>PK Biryani House</h1>
              <Rating>
                <Star style={{ fontSize: "0.85rem" }} />
                <span>4.2</span>
              </Rating>
            </InformationTop>
            <h4>Biryani, Maharashtrian, Malwani, Mughlai</h4>
            <p>Swargate, Pune</p>
            <Button>
              <FavoriteBorder style={{ color: "hsl(0,0%,50%)" }} />
              <span>Favorite</span>
            </Button>
          </Information>
          <Search>
            <Icon style={{ color: "hsl(0, 0%, 70%)" }} />
            <input placeholder="Search for dishes" type="text" />
          </Search>
        </DetailsContainer>
        <div></div>
      </InfoContainer>
    </Container>
  );
}

export default RestaurantInfo;
