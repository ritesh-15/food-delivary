import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 2em;
`;

export const ProfileTop = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid hsl(0, 0%, 80%);
  padding-bottom: 1em;
`;

export const Image = styled.div`
  width: 110px;
  max-height: 110px;
  overflow: hidden;
  border-radius: 50%;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const ProfileTopInfo = styled.div`
  margin-left: 2em;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  span {
    margin-top: 0.5em;
    display: block;
  }
`;

export const ProfileDetails = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    margin-left: auto;
    margin-top: 2em;
    width: 150px;
    justify-self: flex-end;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;

  div {
    width: 45%;
  }
`;
