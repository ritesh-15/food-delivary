import {
  HeroLocation,
  HeroSection,
  HeroSectionImages,
  HeroSectionInfo,
  HomeContainer,
} from "./Home.style";
import Container from "../../styles/Container";
import Button from "../../styles/Button";

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
              <input type="text" placeholder="Enter your location" />
              <Button>Locate</Button>
            </HeroLocation>
          </HeroSectionInfo>
        </Container>
      </HeroSection>
    </HomeContainer>
  );
}
