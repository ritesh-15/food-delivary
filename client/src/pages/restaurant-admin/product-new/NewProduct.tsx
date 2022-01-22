import { ChangeEvent, useState } from "react";
import { Input, SelectBox } from "../../../components";
import { Form, FormControl, Grid, Image, Wrapper } from "./NewProduct.styled";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Button from "../../../styles/Button";

const OPTIONS = ["Vegeterian", "Non vegeterian"];

function NewProduct() {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    menuType: "",
    foodType: "",
  });

  const [image, setImage] = useState("");

  const [foodType, setFoodType] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const changeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];

    setImage(URL.createObjectURL(file));
  };

  return (
    <Wrapper>
      <h1>Add new food product</h1>
      <Image
        style={{ background: `url(${image}) no-repeat center center/cover` }}
      >
        <label htmlFor="file">
          <AddPhotoAlternateIcon
            style={{ cursor: "pointer", fontSize: "2rem" }}
          />
        </label>
        <input type="file" id="file" onChange={changeImage} />
      </Image>
      <Form>
        <Grid>
          <FormControl>
            <Input
              onChange={handleChange}
              value={values.name}
              title="Food name"
              type="text"
              name="name"
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
            />
          </FormControl>
          <FormControl>
            <Input
              onChange={handleChange}
              value={values.description}
              title="Description"
              type="text"
              name="name"
            />
          </FormControl>
          <FormControl>
            <Input
              onChange={handleChange}
              value={values.menuType}
              title="Menu type"
              type="text"
              name="menuType"
            />
          </FormControl>
        </Grid>
        <Button hover>Add Product</Button>
      </Form>
    </Wrapper>
  );
}

export default NewProduct;
