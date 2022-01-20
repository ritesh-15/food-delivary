import { FC } from "react";
import {
  ImageContainer,
  MainContainer,
  PDFContainer,
  Wrapper,
} from "./ViewDocuemt.styled";
import CloseIcon from "@mui/icons-material/Close";

interface ViewDocumentProps {
  fileType: string;
  src: string;
  title: string;
}

const ViewDocument: FC<ViewDocumentProps> = ({ fileType, src, title }) => {
  return (
    <Wrapper>
      <MainContainer>
        <div>
          <h1>{title}</h1>
          <CloseIcon style={{ cursor: "pointer" }} />
        </div>
        {fileType === "pdf" ? (
          <PDFContainer>
            <iframe src={src} width="100%" height="500px" />
          </PDFContainer>
        ) : (
          <ImageContainer>
            <img src={src} alt="" />
          </ImageContainer>
        )}
      </MainContainer>
    </Wrapper>
  );
};

export default ViewDocument;
