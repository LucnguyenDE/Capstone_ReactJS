import { BOOK_TICKET } from "../constants/ticketConstants";

export const bookTicket = (payload) => ({
  type: BOOK_TICKET,
  payload,
});

//post method to BE
