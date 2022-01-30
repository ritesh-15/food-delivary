import {
  TableContent,
  TableHead,
  TableSkeletonContainer,
} from "./TableSkeleton.styled";

const TableSkeleton = () => {
  return (
    <TableSkeletonContainer>
      <TableHead>
        <h1></h1>
        <h1></h1>
        <h1></h1>
        <h1></h1>
      </TableHead>
      <TableContent>
        <p></p>
        <p></p>
        <p></p>
        <span></span>
      </TableContent>
      <TableContent>
        <p></p>
        <p></p>
        <p></p>
        <span></span>
      </TableContent>
      <TableContent>
        <p></p>
        <p></p>
        <p></p>
        <span></span>
      </TableContent>
      <TableContent>
        <p></p>
        <p></p>
        <p></p>
        <span></span>
      </TableContent>
      <TableContent>
        <p></p>
        <p></p>
        <p></p>
        <span></span>
      </TableContent>
      <TableContent>
        <p></p>
        <p></p>
        <p></p>
        <span></span>
      </TableContent>
    </TableSkeletonContainer>
  );
};

export default TableSkeleton;
