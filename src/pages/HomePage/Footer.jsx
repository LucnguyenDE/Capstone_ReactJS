import React from "react";
const footer_style = {
  background: "rgb(38, 38, 38)",
};
export default function Footer() {
  console.log("footer render");
  return (
    <footer style={footer_style} className="flex justify-center p-5">
      <div className="footer__container text-white w-4/6">
        <div className="footer__above__container flex justify-between p-4">
          <div className="footer__above__service flex w-4/6 space-x-20">
            <div className="movie__schedule space-y-3">
              <p className="font-bold">Lịch chiếu phim</p>
              <ul className="text-gray-300   space-y-1">
                <li>
                  <a href="#">Phim đang chiếu</a>
                </li>
                <li>
                  <a href="#">Phim sắp chiếu</a>
                </li>
              </ul>
            </div>
            <div className="movie__blog space-y-3">
              <p className="font-bold">Blog điện ảnh</p>
              <ul className="text-gray-300  space-y-1">
                <li>
                  <a href="#" />
                  Phim chiếu rạp
                </li>
                <li>
                  <a href="#" />
                  Review phim
                </li>
                <li>
                  <a href="#" />
                  Top phim
                </li>
                <li>
                  <a href="#" />
                  Phim Netflix
                </li>
              </ul>
            </div>
            <div className="movie__cinema space-y-3">
              <p className="font-bold">Rạp chiếu phim</p>
              <ul className="text-gray-300 space-y-1">
                <li>
                  <a href="#">BHD Star</a>
                </li>
                <li>
                  <a href="#">CGV</a>
                </li>
                <li>
                  <a href="#">Cines</a>
                </li>
                <li>
                  <a href="#">Galaxy</a>
                </li>
                <li>
                  <a href="#">Lotte</a>
                </li>
                <li>
                  <a href="#">Megags</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__above__custommer w-2/6 space-y-3 text-sm">
            <h2 className="text-xl font-bold text-white">
              CHĂM SÓC KHÁCH HÀNG
            </h2>
            <p className="text-gray-300">
              Địa chỉ: Tầng M, Tòa nhà Victory Tower, Số 12 Tân Trào, Phường Tân
              Phú, Quận 7, Thành phố Hồ Chí Minh
            </p>
            <p>
              <span className="text-gray-300">Hotline: </span>
              <span className="text-white font-bold">
                1900 5458 52{" "}
                <span className="text-gray-300 font-normal">(1000đ/phút)</span>
              </span>
            </p>
            <p>
              <span className="text-gray-300">Email: </span>
              <span className="text-white font-bold">hotro@movie.qe</span>
            </p>
            <p>
              <span className="text-gray-300">Tổng đài gọi ra: </span>
              <span className="text-white font-bold">028.2548.2648</span>-{" "}
              <span className="text-white font-bold">028.9987.5454</span>
            </p>
            <div className="flex space-x-2">
              <div>
                <a href="#">
                  <img
                    src="https://static.mservice.io/img/momo-upload-api-210724113855-637627235353131497.jpg"
                    alt="apple_store_app_download"
                  />
                </a>
              </div>
              <div>
                <a href="#">
                  <img
                    src="https://static.mservice.io/img/momo-upload-api-210724113959-637627235994410679.jpg"
                    alt="android_store_app_download"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_below__container flex items-center p-4">
          <div className="company w-3/5 flex items-center space-x-8">
            <div className="company__logo">
              <div className="logo">
                <a href="#">
                  <span>
                    <i className="text-amber-400 text-6xl fab fa-critical-role" />
                  </span>
                </a>
              </div>
            </div>
            <div className="company__info space-y-1">
              <h2 className="text-white font-bold">
                Công ty cổ phần dịch vụ Critical Role
              </h2>
              <p className="text-gray-300 text-xs">
                Lầu 200, Tòa nhà Landmark, số 155 Điện Biên Phủ, Quận 12, Thành
                phố Hồ Chí Minh
              </p>
            </div>
          </div>
          <div className="social__media w-1/5 space-y-2">
            <div className="icon__media flex space-x-4 items-center">
              <div className="fb__logo">
                <a className="hover:text-red-500" href="#">
                  <span>
                    <i className="text-xl fab fa-facebook" />
                  </span>
                </a>
              </div>
              <div className="linked__logo">
                <a className="hover:text-red-500" href="#">
                  <span>
                    <i className="text-xl fab fa-linkedin" />
                  </span>
                </a>
              </div>
              <div className="youtube__logo">
                <a className="hover:text-red-500" href="#">
                  <span>
                    <i className="text-xl fab fa-youtube" />
                  </span>
                </a>
              </div>
            </div>
            <p className="text-gray-300 text-xs">©Copyright M_Service 2022</p>
          </div>
          <div className="bo_cong_anh w-1/5 space-y-2">
            <p className="text-gray-300 text-xs">Chứng nhận bởi</p>
            <div className="logo__chung__nhan">
              <img
                src="https://static.mservice.io/blogscontents/momo-upload-api-210629153623-637605777831780706.png"
                alt="bo_cong_thuong_logo"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
