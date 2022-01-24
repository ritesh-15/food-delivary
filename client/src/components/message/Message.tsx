import { useMessage } from "../../hooks";
import { MessageWrapper } from "./Message.styled";

function Message() {
  const { message, error } = useMessage();
  return (
    <MessageWrapper error={error}>
      <p>{message}</p>
    </MessageWrapper>
  );
}

export default Message;
