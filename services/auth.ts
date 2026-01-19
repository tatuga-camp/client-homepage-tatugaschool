import createAxiosInstance from "./api-service";

type RequestRefreshTokenService = {
  refreshToken: string;
};

type ResponseRefreshTokenService = {
  accessToken: string;
};

export async function RefreshTokenService(
  input: RequestRefreshTokenService
): Promise<ResponseRefreshTokenService> {
  try {
    const axiosInstance = createAxiosInstance();

    const response = await axiosInstance({
      method: "POST",
      url: "/v1/auth/refresh-token",
      data: { ...input },
    });
    return response.data;
  } catch (error: any) {
    console.error("Refresh Token request failed:", error.response.data);
    throw error?.response?.data;
  }
}
