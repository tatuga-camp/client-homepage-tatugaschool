import { useQuery } from "@tanstack/react-query";
import { GetUserService } from "../services/user";

export function useGetUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => GetUserService(),
  });
}
