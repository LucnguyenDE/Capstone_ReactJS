import { SET_LOGIN } from "../constants/userConstants";

const initialState = {
  userInfor: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOGIN: {
      state.userInfor = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
