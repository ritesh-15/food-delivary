import Container from "../../styles/Container";
import {
  DetailsContainer,
  ImageContainer,
  InfoContainer,
  Information,
  InformationTop,
  Menu,
  MenuList,
  Products,
  ProductsContainer,
  Rating,
  Search,
  Wrapper,
} from "./RestaurantInfo.styled";
import { Star, FavoriteBorder, Search as Icon } from "@mui/icons-material";
import Button from "../../styles/Button";
import { Product } from "../../components";
import { useWindowScroll } from "../../hooks";

function RestaurantInfo() {
  const isSticky = useWindowScroll(70);

  return (
    <Container>
      <InfoContainer>
        <Wrapper sticky={isSticky}>
          <DetailsContainer>
            <ImageContainer sticky={isSticky}>
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixMenuListb=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </ImageContainer>
            <Information sticky={isSticky}>
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
            <Search sticky={isSticky}>
              <Icon style={{ color: "hsl(0, 0%, 70%)" }} />
              <input placeholder="Search for dishes" type="text" />
            </Search>
          </DetailsContainer>
        </Wrapper>
        <ProductsContainer>
          <Menu sticky={isSticky}>
            <ul>
              <MenuList active={true}>Recomended</MenuList>
              <MenuList active={false}>Soups</MenuList>
              <MenuList active={false}>Starter tandoori</MenuList>
              <MenuList active={false}>Pizza</MenuList>
              <MenuList active={false}>Pizza</MenuList>
              <MenuList active={false}>Pizza</MenuList>
              <MenuList active={false}>Recomended</MenuList>
              <MenuList active={false}>Soups</MenuList>
              <MenuList active={false}>Starter tandoori</MenuList>
              <MenuList active={false}>Pizza</MenuList>
              <MenuList active={false}>Pizza</MenuList>
              <MenuList active={false}>Pizza</MenuList>
            </ul>
          </Menu>
          <Products>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </Products>
        </ProductsContainer>
      </InfoContainer>
    </Container>
  );
}

export default RestaurantInfo;
