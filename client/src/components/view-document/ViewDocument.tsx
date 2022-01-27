import { FC } from "react";
import {
  ImageContainer,
  MainContainer,
  PDFContainer,
  Wrapper,
} from "./ViewDocuemt.styled";
import CloseIcon from "@mui/icons-material/Close";

interface ViewDocumentProps {
  state: {
    fileType: string;
    src: string;
    title: string;
  };
  changeState(value: any): void;
}

const ViewDocument: FC<ViewDocumentProps> = ({ state, changeState }) => {
  return (
    <Wrapper>
      <MainContainer>
        <div>
          <h1>{state.title}</h1>
          <CloseIcon
            onClick={() => changeState(undefined)}
            style={{ cursor: "pointer" }}
          />
        </div>
        {state.fileType === "application/pdf" ? (
          <PDFContainer>
            <iframe src={state.src} width="100%" height="500px" />
          </PDFContainer>
        ) : (
          <ImageContainer>
            <img src={state.src} alt="" />
          </ImageContainer>
        )}
      </MainContainer>
    </Wrapper>
  );
};

export default ViewDocument;
