import React from "react";
import { NavLink } from "react-router-dom";

export default function ShowtimeMovies({
  cineplexList,
  cinemaList,
  filmList,
  currentCineplex,
  getCinemaList,
  getFilmList,
}) {
  console.log("showtimes render");

  const renderCineplexList = () => {
    return cineplexList.map((cineplex) => {
      return (
        <div
          className="flex justify-center"
          key={cineplex.tenHeThongRap}
          id={cineplex.maHeThongRap}
        >
          <button
            className="border-b-2 border-solid p-2 flex justify-center"
            key={cineplex.maHeThongRap}
            onClick={() => {
              getCinemaList(cineplex.maHeThongRap);
            }}
          >
            <img src={cineplex.logo} alt={cineplex.maHeThongRap} width="60px" />
          </button>
        </div>
      );
    });
  };
  const renderCinemaList = () => {
    // console.log("aaaaa", cinemaList);
    return cinemaList.map((cinema) => {
      return (
        <button
          key={cinema.maCumRap}
          className="address__container flex justify-between items-center p-2 border-b-2 border-solid  text-left"
          onClick={() => {
            getFilmList(currentCineplex, cinema.maCumRap);
          }}
        >
          <div>
            <p className="text-amber-500 font-bold uppercase ">
              {cinema.tenCumRap.length > 28
                ? cinema.tenCumRap.substring(0, 28) + "..."
                : cinema.tenCumRap}
            </p>
            <p>
              {cinema.diaChi.length > 30
                ? cinema.diaChi.substring(0, 30) + "..."
                : cinema.diaChi}
            </p>
            <p className="text-red-500">Xem chi tiết</p>
          </div>
        </button>
      );
    });
  };
  const renderFilmList = () => {
    return filmList.map((film) => {
      return (
        <div key={film.maPhim} className="film__container flex border-b-2">
          <div className="w-1/6 film__pic p-3">
            <img
              className="w-full rounded-lg"
              src={film.hinhAnh}
              alt="vip_image"
            />
          </div>
          <div className="w-5/6 film__detail p-3 space-y-4">
            <div className="space-x-2">
              <span className="text-2xl font-bold">
                {film.tenPhim}
                {film.hot === true ? <> 🔥</> : ""}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {film.lstLichChieuTheoPhim.map((lichChieu) => {
                return (
                  <div key={lichChieu.maLichChieu}>
                    <NavLink
                      to={`/purchase/${lichChieu.maLichChieu}`}
                      className="border-solid border  space-x-2 border-gray-500 rounded p-1"
                    >
                      <span className="text-red-500 font-semibold">
                        {lichChieu.ngayChieuGioChieu.substring(0, 10)}
                      </span>
                      <span>~</span>
                      <span className="text-amber-500 font-semibold">
                        {lichChieu.ngayChieuGioChieu.substring(12, 19)}
                      </span>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <section className="showtimes__movies flex justify-center p-5">
      <div className="showtimes__movies__container w-4/6 space-y-10">
        <p className="text-amber-600">showtimes MOVIES</p>
        <div className="showtimes__movies__detail grid grid-cols-10 border-2 rounded-lg">
          <div className="cineplexs col-span-1 flex flex-col  border-r-2">
            {renderCineplexList()}
          </div>
          <div
            style={{ height: 720 }}
            className="cinemas overflow-y-scroll col-span-3 flex flex-col p-1 border-r-2"
            id="cinemas"
          >
            {renderCinemaList()}
          </div>
          <div
            style={{ height: 720 }}
            className="film overflow-y-scroll col-span-6 p-1"
          >
            {renderFilmList()}
          </div>
        </div>
      </div>
    </section>
  );
}
