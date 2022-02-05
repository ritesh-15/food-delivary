import { api } from "./axios";

class OrderApi {
  static makeOrder(amount: number) {
    return api.post("/order/make-order", { amount });
  }

  static newOrder(data: any) {
    return api.post("/order/new-order", data);
  }
}

export default OrderApi;
