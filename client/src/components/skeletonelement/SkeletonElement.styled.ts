import styled from "styled-components";

export const SkeletonElementContainer = styled.div`
  width: 100%;
`;

export const ImageSkeleton = styled.div`
  background: hsl(0, 0%, 95%);
  width: 100%;
  height: 300px;
  border-radius: 1em;
  animation: skeleton infinite 0.5s ease-in-out alternate;

  @keyframes skeleton {
    0% {
      background: hsl(0, 0%, 90%);
      opacity: 0.7;
    }
    100% {
      background: hsl(0, 0%, 95%);
      opacity: 1;
    }
  }
`;

export const TitleSkeleton = styled.div`
  background: hsl(0, 0%, 95%);
  width: 100%;
  height: 15px;
  animation: skeleton infinite 0.5s ease-in-out alternate;
  border-radius: 0.25em;

  @keyframes skeleton {
    0% {
      background: hsl(0, 0%, 90%);
      opacity: 0.7;
    }
    100% {
      background: hsl(0, 0%, 95%);
      opacity: 1;
    }
  }
`;

export const TextSkeleton = styled.div`
  background: hsl(0, 0%, 95%);
  width: 70%;
  height: 10px;
  animation: skeleton infinite 0.5s ease-in-out alternate;
  border-radius: 0.25em;

  @keyframes skeleton {
    0% {
      background: hsl(0, 0%, 90%);
      opacity: 0.7;
    }
    100% {
      background: hsl(0, 0%, 95%);
      opacity: 1;
    }
  }
`;
