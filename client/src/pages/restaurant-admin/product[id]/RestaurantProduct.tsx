import { Delete } from "@mui/icons-material";
import Button from "../../../styles/Button";
import {
  Actions,
  FormControl,
  Grid,
  HeadingContainer,
  Image,
  MainContainer,
  Title,
  Wrapper,
} from "./RestaurantProduct.styled";

function RestaurantProduct() {
  return (
    <Wrapper>
      <HeadingContainer>
        <Image>
          <img
            src="https://media.istockphoto.com/photos/neapolitan-pizza-on-black-background-picture-id1295797149?b=1&k=20&m=1295797149&s=170667a&w=0&h=pvcxQRi0VJvzSr6VW6UBH-TfBEamd_fM5dPpYzUGNg4="
            alt=""
          />
        </Image>
        <Title>
          <h1>Misal pav</h1>
          <p>
            Our dark, rich espresso balanced with steamed milk and a light layer
            of foam. A perfect milk forward warm up.
          </p>
          <small>Vegeterian</small>
        </Title>
      </HeadingContainer>
      <MainContainer>
        <Grid>
          <FormControl>
            <h1>Product ID</h1>
            <p>4789561236</p>
          </FormControl>
          <FormControl>
            <h1>Added Date</h1>
            <p>11-02-2003</p>
          </FormControl>
          <FormControl>
            <h1>Price</h1>
            <p>Rs 452</p>
          </FormControl>
          <FormControl>
            <h1>Menu type</h1>
            <p>pizza</p>
          </FormControl>
        </Grid>
      </MainContainer>
      <Actions>
        <Button hover>
          <Delete />
          <span>Delete</span>
        </Button>
      </Actions>
    </Wrapper>
  );
}

export default RestaurantProduct;
