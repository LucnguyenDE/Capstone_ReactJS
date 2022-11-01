import axios from "axios";
import { BASE_URL, configHeader } from "./url.config";

export const purchaseServ = {
  getTicketRoomServ: (maLichChieu) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
      headers: configHeader(),
    });
  },
};
