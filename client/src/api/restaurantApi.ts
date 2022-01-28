import { api } from "./axios";

class RestaurantApi {
  static getAllRestaurants() {
    return api.get("/restaurant/all");
  }

  static getSingleRestaurant(id: string) {
    return api.get(`/restaurant/${id}`);
  }

  static getRestaurantByUserId() {
    return api.get("/restaurant");
  }

  static updateRestaurant(data: any, id: string) {
    return api.put(`/restaurant/${id}`, data);
  }

  static deleteRestaurant(id: string) {
    return api.delete(`/restaurant/${id}`);
  }
}

export default RestaurantApi;
