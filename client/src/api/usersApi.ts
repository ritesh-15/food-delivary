import { api } from "./axios";

class UserApi {
  static getAllUsers(latest?: boolean) {
    return api.get(`/user/all?latest=${latest}`);
  }

  static getSingleUser(id: string) {
    return api.get(`/user/${id}`);
  }

  static adminUpdateUser(id: string, data: any) {
    return api.put(`/user/admin-update/${id}`, data);
  }

  static deleteUser(id: string) {
    return api.delete(`/user/admin-update/${id}`);
  }
}

export default UserApi;
