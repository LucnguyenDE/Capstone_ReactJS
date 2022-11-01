import { BOOK_TICKET } from "../constants/ticketConstants";

const initialState = {
  listTicket: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case BOOK_TICKET: {
      let cloneListTicket = [...state.listTicket];
      cloneListTicket.push(payload);
      state.listTicket = cloneListTicket;
      return { ...state };
    }
    default:
      return state;
  }
};
