import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 300;
`;

export const CenterContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background: #fff;
  border-radius: 8px;
  padding: 1em;
  overflow-y: auto;
  max-height: 600px;

  button {
    margin-top: 1rem;
    background: ${(props) => props.theme.colors.primary};
    color: #fff;
    width: 100%;
  }
`;

export const MapContainer = styled.div`
  height: 400px;
`;

export const ShowAddress = styled.div`
  padding: 1em;
  border: 1px solid rgba(0, 0, 0, 0.2);

  h1 {
    font-weight: 300;
  }

  p {
    font-weight: 500;
  }
`;

export const Details = styled.div`
  margin: 1rem 0;
`;

export const DelivaryLocationType = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: space-between;
`;

export const Location = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.5em 1em;
  cursor: pointer;
`;

export const Label = styled.span`
  margin-left: 0.5em;
`;
