import {
  OptionsContainer,
  Selected,
  StyledBox,
  Arrow,
} from "./SelectBox.styled";
import { ChangeEvent, useState } from "react";
import { useRef } from "react";
import { MutableRefObject } from "react";

interface SelectBoxProps {
  current: string;
  changeCurrent(value: string): void;
  options: any[];
  label: string;
  search?: boolean;
}

export default function SelectBox(props: SelectBoxProps): JSX.Element {
  const { current, changeCurrent, options, label } = props;
  const [active, setActive] = useState(false);
  const ref: MutableRefObject<any> = useRef();
  const [search, setSearch] = useState("");

  const handleClick = (e: any): void => {
    changeCurrent(e.target.innerText);
    setActive(false);
    setSearch("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  return (
    <StyledBox>
      <Selected onClick={() => setActive(!active)}>
        <label htmlFor="">{current || label}</label>
        <Arrow active={active ? true : false} />
      </Selected>
      <OptionsContainer
        search={props.search}
        ref={ref}
        active={active ? true : false}
      >
        {props.search && (
          <div>
            <input
              name="search"
              type="text"
              value={search}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Search here"
            />
          </div>
        )}
        {options
          .filter((option: string) => {
            if (search === "") return option;
            else if (option.toLocaleLowerCase().includes(search)) return option;
          })
          .map((option: string) => (
            <div key={option} onClick={handleClick}>
              <label>{option}</label>
            </div>
          ))}
      </OptionsContainer>
    </StyledBox>
  );
}
