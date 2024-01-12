import axios from "axios";
import { WontonTypes } from "@zocom/types";

type MenuApiResponse = {
  success: boolean;
  menu: WontonTypes[];
};

export function getMenu(): Promise<MenuApiResponse> {
  return axios
    .get<MenuApiResponse>(
      "https://0i6fkfbg0e.execute-api.eu-north-1.amazonaws.com/api/menu"
    )
    .then((res) => res.data);
}
