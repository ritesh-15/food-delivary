import { api } from "./axios";

export const loginApi = (data: any) => api.post("/login", data);

export const registerApi = (data: any) => api.post("/register", data);

export const sendOtpApi = (data: any) => api.post("/send-otp", data);

export const verifyOtpApi = (data: any) => api.post("/verify-otp", data);
