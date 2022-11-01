import axios from "axios";
import { BASE_URL, configHeader } from "./url.config";

export const moviesServ = {
  getMovieList: () => {
    return axios({
      url: `${BASE_URL}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03`,
      method: "GET",
      headers: configHeader(),
    });
  },
  getDetailMovie: (id) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
      headers: configHeader(),
    });
  },
  getMovieScheduleServ: (id) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
      method: "GET",
      headers: configHeader(),
    });
  },
  getBannerListServ: () => {
    return axios({
      url: `${BASE_URL}/api/QuanLyPhim/LayDanhSachBanner`,
      method: "GET",
      headers: configHeader(),
    });
  },
};
