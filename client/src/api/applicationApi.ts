import { api } from "./axios";

export const newApplicationApi = (data: any) =>
  api.post("/application/new", data);
