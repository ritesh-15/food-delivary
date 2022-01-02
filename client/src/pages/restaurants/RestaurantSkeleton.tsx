import { SkeletonElement } from "../../components";

const margintop = {
  marginTop: "1em",
};

const RestaurantSkeleton = () => {
  return (
    <div style={{ padding: "1em" }}>
      <div>
        <SkeletonElement type="image" />
      </div>
      <div style={margintop}>
        <SkeletonElement type="title" />
      </div>
      <div style={margintop}>
        <SkeletonElement type="text" />
      </div>
      <div style={{ marginTop: "1em", width: "50%" }}>
        <SkeletonElement type="text" />
      </div>
    </div>
  );
};

export default RestaurantSkeleton;
