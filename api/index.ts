import { ICommonResponse } from "@/types/api";
import axios, { AxiosInstance } from "axios";
import { status } from "../types/enums";

export const API_KEY = "AIzaSyDf9cbEUOo-A5mUmdT8ZL-nMulfTDTTx4c";

export enum API_URL {
  YOU_TUBE_API = "https://www.googleapis.com/youtube/v3",
}

export const YOU_TUBE_API_INSTANCE: AxiosInstance = axios.create({
  baseURL: API_URL.YOU_TUBE_API,
});

export const COMMON_INIT_RESPONSE: ICommonResponse<null> = {
  status: status.PENDING,
  data: null,
};

export const COMMON_ERROR_REPONSE: ICommonResponse<null> = {
  status: status.REJECTED,
  data: null,
};
