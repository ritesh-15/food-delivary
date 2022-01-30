import { Delete } from "@mui/icons-material";
import { ChangeEvent, useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductApi from "../../../api/productApi";
import { useFetchLoading, useMessage } from "../../../hooks";
import { ProductInterface } from "../../../interfaces/ProductInterface";
import Button from "../../../styles/Button";
import {
  Actions,
  FormControl,
  Grid,
  HeadingContainer,
  Image,
  MainContainer,
  SelectBoxContainer,
  Title,
  Wrapper,
} from "./RestaurantProduct.styled";
import moment from "moment";
import { InfoSkeleton, SelectBox, UpdateInput } from "../../../components";
import SaveIcon from "@mui/icons-material/Save";
import { uploadSingleFileApi } from "../../../api/uploadDocumentApi";

const OPTIONS = ["vegeterain", "non vegeterian"];

function RestaurantProduct() {
  const { id } = useParams();
  const { setIsLoading } = useFetchLoading();
  const { setMessage } = useMessage();
  const navigate = useNavigate();

  // loading state
  const [loading, setLoading] = useState<boolean>(true);

  // food type state
  const [foodType, setFoodtype] = useState<string>("");

  // change image state
  const [image, setImage] = useState<File>();

  const changeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!files) return;

    setImage(files[0]);
  };

  // product state
  const [product, setProduct] = useState<ProductInterface>();

  const handleChage = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!product) return;

    setProduct({ ...product, [name]: value });
  };

  useEffect(() => {
    if (!id) return;

    const getSingleProduct = async () => {
      try {
        const { data } = await ProductApi.singleProduct(id);
        if (data.ok) {
          setProduct(data.product);
          setFoodtype(data.product.type);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setMessage("Something went wrong!");
      }
    };

    getSingleProduct();
  }, [id]);

  // update product
  const updateProduct = async () => {
    if (!product || !id) return;

    setIsLoading(true);

    try {
      let newProductImageFile = null;

      if (image) {
        const formdata = new FormData();
        formdata.append("file", image);
        newProductImageFile = await uploadSingleFileApi(formdata);
      }

      const body = {
        ...product,
        type: foodType,
        image:
          newProductImageFile && newProductImageFile.data.fileInfo.filename,
      };

      const { data } = await ProductApi.updateProduct(id, body);
      setProduct(data.product);
      setMessage("Product updated  successfully!");
      setIsLoading(false);
    } catch (error) {
      setMessage("Something went wrong!", true);
      setIsLoading(false);
    }
  };

  // delete product
  const deleteProduct = async () => {
    if (!id) return;

    setIsLoading(true);
    try {
      await ProductApi.deleteProduct(id);
      setIsLoading(false);
      setMessage("Product delete successfully!");
      navigate("/admin/restaurant/products");
    } catch (error) {
      setMessage("Something went wrong!", true);
      setIsLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <InfoSkeleton />
      ) : (
        <Wrapper>
          <HeadingContainer>
            <Image>
              <label>
                <input id="image" type="file" onChange={changeImage} />
                <img
                  src={image ? URL.createObjectURL(image) : product?.image.url}
                  alt=""
                />
              </label>
            </Image>
            <Title status={product?.type}>
              <h1>{product?.name}</h1>
              <p>{product?.description}</p>
              <small>{product?.type}</small>
            </Title>
          </HeadingContainer>
          <MainContainer>
            <Grid>
              <FormControl>
                <h1>Product ID</h1>
                <p>{product?._id}</p>
              </FormControl>
              <FormControl>
                <h1>Added Date</h1>
                <p>
                  {product && moment(product.createdAt).format("DD MMMM YYYY")}
                </p>
              </FormControl>

              <UpdateInput
                title="Name"
                value={product?.name}
                onChange={handleChage}
                name="name"
              />

              <SelectBoxContainer>
                <h1>Food type</h1>
                <SelectBox
                  label="Food type"
                  current={foodType}
                  changeCurrent={setFoodtype}
                  options={OPTIONS}
                />
              </SelectBoxContainer>

              <UpdateInput
                title="Description"
                value={product?.description}
                onChange={handleChage}
                name="description"
              />

              <UpdateInput
                title="Price"
                value={product?.price.toString()}
                onChange={handleChage}
                name="price"
              />

              <UpdateInput
                title="Menu"
                value={product?.menu}
                onChange={handleChage}
                name="menu"
              />
            </Grid>
          </MainContainer>
          <Actions>
            <Button onClick={updateProduct} hover>
              <SaveIcon />
              <span>Save and Update</span>
            </Button>
            <Button onClick={deleteProduct} hover>
              <Delete />
              <span>Delete Product</span>
            </Button>
          </Actions>
        </Wrapper>
      )}
    </>
  );
}

export default RestaurantProduct;
