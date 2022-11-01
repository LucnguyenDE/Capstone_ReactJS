import axios from "axios";
import { BASE_URL, configHeader } from "./url.config";

export const userServ = {
  postLogin: (dataLogin) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: dataLogin,
      headers: configHeader(),
    });
  },
};
