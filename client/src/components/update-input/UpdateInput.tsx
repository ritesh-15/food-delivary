import { UpdateContainer } from "./UpdateInput.styled";
import { Edit } from "@mui/icons-material";
import { ChangeEvent, useState } from "react";
import { FC } from "react";
import { Input } from "..";

interface UpdateProps {
  title: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const UpdateInput: FC<UpdateProps> = (props) => {
  const [edit, setEdit] = useState(false);

  return (
    <UpdateContainer>
      <h1>{props.title}</h1>
      {!edit ? (
        <>
          <div>
            <p>{props.value}</p>
            <Edit
              onClick={() => setEdit(true)}
              style={{ color: "hsl(0,0%,50%)", cursor: "pointer" }}
            />
          </div>
        </>
      ) : (
        <>
          <Input
            value={props.value}
            onChange={props.onChange}
            title={props.title}
            name={props.name}
            type="text"
          />
        </>
      )}
    </UpdateContainer>
  );
};

export default UpdateInput;
