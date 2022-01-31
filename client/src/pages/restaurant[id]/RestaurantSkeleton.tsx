import styled from "styled-components";
import Container from "../../styles/Container";

const Wrapper = styled.div`
  padding-top: 2em;

  @keyframes skeleton {
    0% {
      background: hsl(0, 0%, 98%);
    }
    100% {
      background: hsl(0, 0%, 95%);
    }
  }
`;

const RestaurantInfoContainer = styled.div`
  display: flex;
  border-bottom: 1px solid hsl(0, 0%, 90%);
  padding-bottom: 1em;
  margin-bottom: 1em;
`;

const Image = styled.div`
  width: 200px;
  height: 200px;
  background: hsl(36, 0%, 94%);
  border-radius: 8px;
  animation: skeleton 1s ease-in infinite alternate;
`;

const Text = styled.div`
  flex: 1;
  margin-left: 1em;

  h1 {
    height: 15px;
    background: hsl(0, 0%, 95%);
    border-radius: 4px;
    margin-bottom: 1em;
    width: 80%;
    animation: skeleton 1s ease-in infinite alternate;
  }

  p {
    height: 10px;
    background: hsl(0, 0%, 95%);
    border-radius: 4px;
    width: 60%;
    margin-bottom: 1em;
    animation: skeleton 1s ease-in infinite alternate;

    &:nth-child(3) {
      width: 50%;
    }

    &:last-child {
      width: 40%;
    }
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuList = styled.ul`
  flex: 0.25;
  border-right: 1px solid hsl(0, 0%, 95%);
  padding-right: 1em;

  li {
    height: 10px;
    background: hsl(0, 0%, 95%);
    border-radius: 4px;
    width: 100%;
    margin-bottom: 1em;
    animation: skeleton 1s ease-in infinite alternate;

    &:nth-child(even) {
      width: 50%;
      margin-left: auto;
    }
  }
`;

const ProductsContainer = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
`;

const Product = styled.div`
  display: flex;
  margin-bottom: 1em;
`;

const ProductImage = styled.div`
  width: 150px;
  height: 150px;
  background: hsl(36, 0%, 94%);
  border-radius: 8px;
  animation: skeleton 1s ease-in infinite alternate;
`;

const RestaurantSkeleton = () => {
  return (
    <Container>
      <Wrapper>
        <RestaurantInfoContainer>
          <Image />
          <Text>
            <h1></h1>
            <p></p>
            <p></p>
            <p></p>
          </Text>
        </RestaurantInfoContainer>
        <DetailsWrapper>
          <MenuList>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </MenuList>
          <ProductsContainer>
            <Product>
              <ProductImage />
              <Text>
                <h1></h1>
                <p></p>
                <p></p>
                <p></p>
              </Text>
            </Product>

            <Product>
              <ProductImage />
              <Text>
                <h1></h1>
                <p></p>
                <p></p>
                <p></p>
              </Text>
            </Product>
          </ProductsContainer>
        </DetailsWrapper>
      </Wrapper>
    </Container>
  );
};

export default RestaurantSkeleton;
