import styled from "styled-components";

export const AvatarContainer = styled.div`
  h1 {
    font-size: 1.25rem;
    margin-bottom: 2em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 0.5em;
  }

  label {
    text-align: center;
    display: block;
    margin-top: 2em;
    cursor: pointer;
  }

  input {
    display: none;
  }

  button {
    background: ${({ theme }) => theme.colors.primary};
    display: block;
    color: #fff;
    margin-top: 3em;

    &:first-child {
      background: transparent;
      color: ${({ theme }) => theme.colors.primary};
      padding: 0;
    }
  }
`;

export const Avatar = styled.div`
  max-width: 200px;
  max-height: 200px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
