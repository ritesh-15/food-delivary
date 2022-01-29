import { api } from "./axios";

class ProductApi {
  static newProduct(data: any) {
    return api.post("/product/new", data);
  }

  static allProducts() {
    return api.get("/product");
  }

  static singleProduct(id: string) {
    return api.get(`/product/${id}`);
  }

  static updateProduct(id: string, data: any) {
    return api.put(`/product/${id}`, data);
  }

  static deleteProduct(id: string) {
    return api.delete(`/product/${id}`);
  }
}

export default ProductApi;
