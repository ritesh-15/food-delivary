import { api } from "./axios";

export const newApplicationApi = (data: any) =>
  api.post("/application/new", data);

export const getApplication = (id?: string) => api.get(`/application?id=${id}`);

export const updateApplicationApi = (data: any, id: string) =>
  api.put(`/application?id=${id}`, data);

export const deleteApplicationApi = (id: string) =>
  api.delete(`/application?id=${id}`);

export const getAllApplicationApi = () => api.get("/applications");

export const updateApplicationStatusApi = (id: string, data: any) =>
  api.put(`/application/update-status/${id}`, data);
