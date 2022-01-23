import { useErrorMessage } from "../../hooks";
import { MessageWrapper } from "./Message.styled";

function ErrorMessage() {
  const { message } = useErrorMessage();
  return (
    <MessageWrapper>
      <p>{message}</p>
    </MessageWrapper>
  );
}

export default ErrorMessage;
