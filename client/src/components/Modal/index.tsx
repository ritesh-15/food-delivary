import { ModalContainer, ModalHeader, Wrapper } from "./Modal.style";
import CloseIcon from "@mui/icons-material/Close";

function Modal(): JSX.Element {
  return (
    <ModalContainer>
      <Wrapper>
        <ModalHeader>
          <CloseIcon style={{ cursor: "pointer", fontSize: "2rem" }} />
        </ModalHeader>
      </Wrapper>
    </ModalContainer>
  );
}

export default Modal;
