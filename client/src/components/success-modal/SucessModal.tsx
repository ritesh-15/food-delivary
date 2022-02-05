import styled from "styled-components";
import Flex from "../../styles/Flex";
import CheckIcon from "@mui/icons-material/Check";
import Button from "../../styles/Button";
import { useSuccessModal } from "../../hooks";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  left: 0;
  right: 0;
  z-index: 200;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 1em;
  max-width: 400px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  animation: animate 0.5s ease-in 1;
  width: 100%;

  @keyframes animate {
    0% {
      transform: scale(0.7) translateY(-50%);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }
`;

const Content = styled.div`
  margin-top: 1em;

  h1 {
    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;
    animation: show 0.5s ease-in 1;
  }

  p {
    text-align: center;
    display: block;
    margin-top: 0.5rem;
    font-size: 0.95rem;
    animation: show 0.5s ease-in 1;
  }

  button {
    background: #383635;
    color: #fff;
    display: block;
    margin: 0 auto;
    margin-top: 1em;
    width: fit-content;
    animation: show 0.5s ease-in 1;
  }

  @keyframes show {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Icon = styled.div`
  width: 80px;
  height: 80px;
  border: 2px solid hsl(150, 87%, 43%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 auto;
  animation: show 0.5s ease-in 1;
`;

const checkStyle = {
  fontSize: "3rem",
  color: "hsl(150, 87%, 43%)",
};

function SucessModal() {
  const { state, setSuccessModal, callback } = useSuccessModal();

  const closeSuccessModal = () => {
    if (callback) {
      callback();
      setSuccessModal(state.title, false);
    } else {
      setSuccessModal(state.title, false);
    }
  };

  return (
    <Wrapper>
      <Main>
        <Flex>
          <Icon>
            <CheckIcon style={checkStyle} />
          </Icon>
        </Flex>

        <Content>
          <h1>Success !!!</h1>
          <p>{state.title}</p>
          <Button onClick={closeSuccessModal}>Dismis</Button>
        </Content>
      </Main>
    </Wrapper>
  );
}

export default SucessModal;
