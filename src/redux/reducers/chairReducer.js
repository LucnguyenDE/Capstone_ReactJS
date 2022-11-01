import { CHOOSE_CHAIR } from "../constants/chairConstants";

const initialState = {
  listChoosenChair: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHOOSE_CHAIR: {
      let cloneListChoosenChair = [...state.listChoosenChair];

      let checkIndex = cloneListChoosenChair.findIndex((item) => {
        return item.tenGhe === payload.tenGhe;
      });
      if (checkIndex !== -1) {
        cloneListChoosenChair.splice(checkIndex, 1);
      } else {
        cloneListChoosenChair.push(payload);
      }
      state.listChoosenChair = cloneListChoosenChair;
      return { ...state };
    }

    default:
      return state;
  }
};
