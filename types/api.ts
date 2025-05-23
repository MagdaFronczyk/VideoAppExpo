import { status } from "./enums";

export type ICommonResponse<T> = {
  status: status;
  data: T;
};
