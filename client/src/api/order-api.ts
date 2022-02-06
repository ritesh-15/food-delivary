import { api } from "./axios";

class OrderApi {
  static makeOrder(amount: number) {
    return api.post("/order/make-order", { amount });
  }

  static newOrder(data: any) {
    return api.post("/order/new-order", data);
  }

  static getUserOrders() {
    return api.get("/order/get-orders");
  }

  static singleOrder(id: string) {
    return api.get(`/order/${id}`);
  }

  static changeStatus(id: string, data: any) {
    return api.put(`/order/${id}`, data);
  }

  static allOrders() {
    return api.get("/order/all-orders");
  }
}

export default OrderApi;
