import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2em 0;
`;

export const HeadingContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const Image = styled.div`
  width: 100%;
  max-width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;

  input {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

interface Props {
  status?: string;
}

export const Title = styled.div<Props>`
  margin-left: 1rem;
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    margin: 0.25em 0;
    color: rgba(0, 0, 0, 0.7);
  }

  small {
    display: block;
    margin-top: 1rem;
    color: ${({ status }) =>
      status === "pending"
        ? "#a68a00"
        : status === "rejected"
        ? "#c62828"
        : "#388e3c"};
    background: ${({ status }) =>
      status === "pending"
        ? "#fff0c2"
        : status === "rejected"
        ? "#ffcdd2"
        : "#c8e6c9"};
    text-align: center;
    text-transform: capitalize;
    font-weight: 500;
    border-radius: 4px;
    width: fit-content;
    padding: 0.2rem 1rem;
  }
`;

export const MainContainer = styled.div``;

export const SubTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  border-bottom: 1px solid hsl(0, 0%, 80%);
  padding-bottom: 1em;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 1rem 0;
  grid-gap: 2rem;
`;

export const FormControl = styled.div`
  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }

  h1 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
`;

export const Actions = styled.div`
  display: flex;
  margin-top: 2rem;

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    display: flex;

    span {
      margin-left: 0.5em;
    }
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  overflow: hidden;
  border-radius: 0.25em;
  width: 100%;
  text-align: left;
`;

export const TableHead = styled.thead`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

export const TableBody = styled.tbody``;

export const TR = styled.tr`
  padding: 1em;

  &:nth-child(even) {
    background: #fff5f7;
  }
`;

export const TH = styled.th`
  padding: 1em;
  font-weight: 600;
  letter-spacing: 0.15em;
`;

interface Props {
  status?: string;
}

export const TD = styled.td<Props>`
  padding: 1em;

  a {
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    max-width: 300px;
  }
`;

export const MapContainer = styled.div`
  height: 350px;
  border-radius: 8px;
  margin-bottom: 1em;
  overflow: hidden;
`;

export const SkeletonContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  padding-top: 2em;
`;

export const ImageSkeleton = styled.div`
  flex: 0.5;
  width: 100%;
  max-width: 200px;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
`;

export const DetailsSkeleton = styled.div`
  flex: 1;
  margin-left: 1em;

  div {
    margin-bottom: 1em;
  }
`;

export const LocationNote = styled.small`
  font-size: 0.75rem;
  color: #e31010;
`;

export const RejectionContainer = styled.div`
  border: 1px solid red;
  padding: 0.5em 1em;
  margin-top: 1em;
  border-radius: 8px;

  h1 {
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    color: red;
  }
`;
