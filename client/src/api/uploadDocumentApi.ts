import { api } from "./axios";

export const uploadMultipleFile = (data: any) =>
  api.post("/upload/multiple", data);
