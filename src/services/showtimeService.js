import axios from "axios";
import { BASE_URL, configHeader } from "./url.config";

export const showtimeServ = {
  getCineplexListServ: () => {
    return axios({
      url: `${BASE_URL}/api/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
      headers: configHeader(),
    });
  },
  getCinemaListServ: (maHeThongRap) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
      method: "GET",
      headers: configHeader(),
    });
  },
  getFilmListServ: (maHeThongRap) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP03`,
      method: "GET",
      headers: configHeader(),
    });
  },
};
