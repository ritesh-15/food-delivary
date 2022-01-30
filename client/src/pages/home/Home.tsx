import {
  FeatureCard,
  FeaturesContaienr,
  HeroLocation,
  HeroSection,
  HeroSectionInfo,
  HomeContainer,
  JoinWithUsContainer,
} from "./Home.style";
import Container from "../../styles/Container";
import Button from "../../styles/Button";
import Flex from "../../styles/Flex";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <Container>
          <HeroSectionInfo>
            <h1>Hungry? Need food instantly</h1>
            <p>
              Order food from your favorite restarunt and get it just in 30min
              with safety.
            </p>
            <HeroLocation>
              <Link to="/restaurants">
                {" "}
                <Button hover>Order Now</Button>
              </Link>
            </HeroLocation>
          </HeroSectionInfo>
        </Container>
      </HeroSection>

      <FeaturesContaienr>
        <Container>
          <Flex>
            <FeatureCard>
              <div>
                <img src="/images/home.svg" alt="" />
              </div>
              <h1>Free Home Delivary</h1>
              <p>your favorite food on your door without any charges</p>
            </FeatureCard>
            <FeatureCard>
              <div>
                <img src="/images/cheif.svg" alt="" />
              </div>
              <h1>Master chiefs food</h1>
              <p>order your food, cooked by master chiefs</p>
            </FeatureCard>
            <FeatureCard>
              <div>
                <img src="/images/fastdelivary.svg" alt="" />
              </div>
              <h1>Delivary within 30min</h1>
              <p>order your food and enjoy food within 30min</p>
            </FeatureCard>
          </Flex>
        </Container>
      </FeaturesContaienr>

      <Container>
        <JoinWithUsContainer>
          <h1>Want to be your restaurant on foodies ?</h1>
          <p>Join our team and grow your restaurant online in your locality.</p>
          <Link to="/add-restaurant">
            <Button>Join With Us</Button>
          </Link>
        </JoinWithUsContainer>
      </Container>
    </HomeContainer>
  );
}
