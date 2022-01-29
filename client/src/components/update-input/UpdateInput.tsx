import { UpdateContainer } from "./UpdateInput.styled";
import { Edit } from "@mui/icons-material";
import { ChangeEvent, useState } from "react";
import { FC } from "react";

interface UpdateProps {
  title: string;
  value: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const UpdateInput: FC<UpdateProps> = (props) => {
  return (
    <UpdateContainer>
      <h1>{props.title}</h1>
      <input
        value={props.value}
        onChange={props.onChange}
        title={props.title}
        name={props.name}
        type="text"
      />
    </UpdateContainer>
  );
};

export default UpdateInput;
