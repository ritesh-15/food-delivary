import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 2em;

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    margin-left: auto;
    margin-top: 2em;
    width: 150px;
    justify-self: flex-end;
  }
`;

export const ProfileTop = styled.div`
  display: flex;
  border-bottom: 1px solid hsl(0, 0%, 80%);
  padding-bottom: 1em;
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 110px;
    max-height: 110px;
    overflow: hidden;
    border-radius: 50%;
  }

  input {
    display: none;
  }

  label {
    display: block;
    font-size: 0.85rem;
    text-align: center;
    margin-top: 1em;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textLight};
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const ProfileTopInfo = styled.div`
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
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;

  div {
    width: 45%;
  }
`;

export const Title = styled.div`
  margin-bottom: 1em;

  h1 {
    font-weight: 500;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AddressMainContainer = styled.div`
  width: 100%;
  max-width: 300px;
  line-height: 1.5;
  border: 1px solid hsl(0, 0%, 90%);
  padding: 1em;
  border-radius: 4px;
  margin-right: 1em;
  height: 150px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  &:last-child {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      margin-left: 1em;
    }
  }
`;
