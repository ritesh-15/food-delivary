import { ChangeEvent, useState } from "react";
import { Input, SelectBox } from "../../../components";
import {
  ChooseImage,
  Form,
  FormControl,
  Grid,
  Image,
  Wrapper,
} from "./NewProduct.styled";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Button from "../../../styles/Button";
import { useFetchLoading, useForm, useMessage } from "../../../hooks";
import { newProductValidation } from "../../../validations/product/productValidation";
import { uploadSingleFileApi } from "../../../api/uploadDocumentApi";
import ProductApi from "../../../api/productApi";
import { useNavigate } from "react-router-dom";

const OPTIONS = ["vegeterian", "non vegeterian"];

interface Product {
  name: string;
  description: string;
  price: string;
  menu: string;
}

const initialState: Product = {
  name: "",
  description: "",
  price: "",
  menu: "",
};

function NewProduct() {
  // hooks
  const { setMessage } = useMessage();
  const { setIsLoading } = useFetchLoading();
  const navigate = useNavigate();

  const [image, setImage] = useState<File>();
  const [foodType, setFoodType] = useState<string>("");

  const changeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setImage(file);
  };

  const addNewProduct = async (values: Product) => {
    if (!foodType || !image) return setMessage("All fields are required!");

    setIsLoading(true);

    try {
      const formdata = new FormData();

      formdata.append("file", image);

      const imageFile = await uploadSingleFileApi(formdata);

      const body = {
        name: values.name,
        description: values.description,
        price: parseInt(values.price),
        type: foodType,
        image: imageFile.data.fileInfo.filename,
        menu: values.menu,
      };

      await ProductApi.newProduct(body);
      setMessage("Product created successfully!");
      setIsLoading(false);
      navigate("/admin/restaurant/products");
    } catch (error) {
      setMessage("Something went wrong!");
      setIsLoading(false);
    }
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialState,
    newProductValidation,
    addNewProduct
  );

  return (
    <Wrapper>
      <h1>Add new food product</h1>
      {image && (
        <Image>
          <img src={URL.createObjectURL(image)} alt="" />
        </Image>
      )}
      <ChooseImage>
        <label htmlFor="file">
          Choose a product image
          <input type="file" id="file" onChange={changeImage} />
        </label>
      </ChooseImage>
      <Form>
        <Grid>
          <FormControl>
            <Input
              onChange={handleChange}
              value={values.name}
              title="Food name"
              type="text"
              name="name"
              error={errors.name}
            />
          </FormControl>
          <FormControl>
            <SelectBox
              options={OPTIONS}
              changeCurrent={setFoodType}
              current={foodType}
              label="Select food type"
            />
          </FormControl>
          <FormControl>
            <Input
              onChange={handleChange}
              value={values.price}
              title="Price"
              type="text"
              name="price"
              error={errors.price}
            />
          </FormControl>
          <FormControl>
            <Input
              onChange={handleChange}
              value={values.description}
              title="Description"
              type="text"
              name="description"
              error={errors.description}
            />
          </FormControl>
          <FormControl>
            <Input
              onChange={handleChange}
              value={values.menu}
              title="Menu"
              type="text"
              name="menu"
              error={errors.menu}
            />
          </FormControl>
        </Grid>
        <Button onClick={handleSubmit} hover>
          Add Product
        </Button>
      </Form>
    </Wrapper>
  );
}

export default NewProduct;
