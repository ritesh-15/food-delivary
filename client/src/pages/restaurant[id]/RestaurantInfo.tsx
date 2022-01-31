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
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { RestaurantInterface } from "../../interfaces/RestaurantInterface";
import RestaurantApi from "../../api/restaurantApi";
import { ProductInterface } from "../../interfaces/ProductInterface";
import ProductApi from "../../api/productApi";
import RestaurantSkeleton from "./RestaurantSkeleton";

function RestaurantInfo() {
  // hooks
  const isSticky = useWindowScroll(70);
  const { id } = useParams();

  // loading state
  const [loading, setLoading] = useState<boolean>(true);

  // restaurant state
  const [restaurant, setRestaurant] = useState<RestaurantInterface>();

  // products state
  const [products, setProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const { data } = await RestaurantApi.getSingleRestaurant(id);
        const { data: productData } = await ProductApi.allProducts(id);

        if (productData.ok) {
          setProducts(productData.products);
        }

        if (data.ok) {
          setRestaurant(data.restaurant);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, [id]);

  return (
    <>
      {loading ? (
        <RestaurantSkeleton />
      ) : (
        <Container>
          <InfoContainer>
            <Wrapper sticky={isSticky}>
              <DetailsContainer>
                <ImageContainer sticky={isSticky}>
                  <img src={restaurant?.images.url} alt="" />
                </ImageContainer>
                <Information sticky={isSticky}>
                  <InformationTop>
                    <h1>{restaurant?.restaurantInfo.name}</h1>
                    <Rating>
                      <Star style={{ fontSize: "0.85rem" }} />
                      <span>0</span>
                    </Rating>
                  </InformationTop>
                  <h4>{restaurant?.restaurantInfo.famousFor}</h4>
                  <p>
                    {restaurant?.addressInfo.district} ,
                    {" " + restaurant?.addressInfo.state}
                  </p>
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
                {products.map((product) => (
                  <>
                    <Product product={product} />
                  </>
                ))}
              </Products>
            </ProductsContainer>
          </InfoContainer>
        </Container>
      )}
    </>
  );
}

export default RestaurantInfo;
