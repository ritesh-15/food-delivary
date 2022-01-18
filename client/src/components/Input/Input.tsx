import { ChangeEvent } from "react";
import { Wrapper } from "./Input.style";

interface InputProps {
  title: string;
  value: any;
  onChange(e: ChangeEvent): void;
  name: string;
  type: string;
  error?: string;
}

export default function Input(props: InputProps) {
  return (
    <Wrapper>
      <input {...props} autoComplete="off" required />
      <label>
        <span>{props.title}</span>
      </label>
      {props.error && <small>{props.error}</small>}
    </Wrapper>
  );
}
