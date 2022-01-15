import styled from "styled-components";

export const ApplicationsContainer = styled.div``;

export const Wrapper = styled.div`
  display: flex;
`;

export const MainContainer = styled.div`
  padding: 2em;
  width: 100%;
`;

export const ApplicationContainer = styled.div``;

export const Title = styled.div`
  h1 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0.5em 0;
  }

  h4 {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Details = styled.div`
  h4 {
    margin: 0.5em 0;
  }
`;

export const ApplicationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1em;
`;

export const ApplicationMain = styled.div`
  width: 70%;
`;

interface StatusInterface {
  status: string;
}

export const ApplicationStatus = styled.div<StatusInterface>`
  width: 25%;

  h1 {
    span {
      color: ${({ theme, status }) =>
        status === "pending"
          ? "hsl(55, 100%, 50%)"
          : status === "rejected"
          ? "hsl(0, 98%, 48%)"
          : theme.colors.secondary};
      font-size: 1.25rem;
      font-weight: 500;
    }
  }
`;

export const ActionsContainer = styled.div`
  margin-top: 1em;

  button {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 1em;
  }
`;
