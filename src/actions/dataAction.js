import { IS_LOADING } from "../constants/dataConstants";

export const toggleLoading = (payload) => (
  {type: IS_LOADING, payload}
);
