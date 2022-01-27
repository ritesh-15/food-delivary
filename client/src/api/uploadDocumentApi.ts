import { api } from "./axios";

export const uploadMultipleFile = (data: any) =>
  api.post("/upload/multiple", data);

export const uploadSingleFileApi = (data: any) =>
  api.post("/upload/single", data);
