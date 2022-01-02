import { FC } from "react";
import {
  ImageSkeleton,
  SkeletonElementContainer,
  TextSkeleton,
  TitleSkeleton,
} from "./SkeletonElement.styled";

interface Props {
  type: "image" | "text" | "title";
}

const SkeletonElement: FC<Props> = ({ type }) => {
  return (
    <>
      {type === "image" ? (
        <ImageSkeleton />
      ) : type === "text" ? (
        <TextSkeleton />
      ) : (
        <TitleSkeleton />
      )}
    </>
  );
};

export default SkeletonElement;
