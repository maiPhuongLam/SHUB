export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const formatResponseData = <T>(
  message: string,
  data: T
): ApiResponse<T> => ({
  success: true,
  message,
  data: data,
});
