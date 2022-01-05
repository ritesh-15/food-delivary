import styled from "styled-components";

interface FlexProps {
  justify?: "space between" | "center" | "flex-start";
  align?: "center" | "flex-start" | "flex-end";
}

const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "space-between"};
`;

export default Flex;
