import { CHOOSE_CHAIR } from "../constants/chairConstants";

export const chooseChair = (payload) => ({
  type: CHOOSE_CHAIR,
  payload,
});
