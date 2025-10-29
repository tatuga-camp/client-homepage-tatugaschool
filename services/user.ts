import { User } from "../interfaces";
import createAxiosInstance from "./api-service";

const axiosInstance = createAxiosInstance();

export async function GetUserService(): Promise<User> {
  try {
    const response = await axiosInstance({
      method: "GET",
      url: "/v1/users/me",
    });
    return response.data;
  } catch (error: any) {
    console.error("User request failed:", error?.response?.data);
    throw error?.response?.data;
  }
}
