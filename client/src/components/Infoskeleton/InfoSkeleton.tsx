import {
  ActionDiv,
  ButtonDiv,
  FormControl,
  Grid,
  InfoHeading,
  InfoImage,
  InfoSkeletonContainer,
  MainContainer,
  SubTitle,
  Title,
} from "./InfoSkeleton.styled";

const InfoSkeleton = () => {
  return (
    <InfoSkeletonContainer>
      <InfoHeading>
        <InfoImage />
        <Title>
          <h1></h1>
          <p></p>
          <p></p>
          <p></p>
        </Title>
      </InfoHeading>
      <MainContainer>
        <SubTitle></SubTitle>
        <Grid>
          <FormControl>
            <h1></h1>
            <div></div>
          </FormControl>
          <FormControl>
            <h1></h1>
            <div></div>
          </FormControl>
          <FormControl>
            <h1></h1>
            <div></div>
          </FormControl>
          <FormControl>
            <h1></h1>
            <div></div>
          </FormControl>
          <FormControl>
            <h1></h1>
            <div></div>
          </FormControl>
          <FormControl>
            <h1></h1>
            <div></div>
          </FormControl>
        </Grid>
        <ActionDiv>
          <ButtonDiv />
          <ButtonDiv />
        </ActionDiv>
      </MainContainer>
    </InfoSkeletonContainer>
  );
};

export default InfoSkeleton;
