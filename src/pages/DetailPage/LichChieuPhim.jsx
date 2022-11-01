import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { moviesServ } from "../../services/moviesService";

export default function LichChieuPhim() {
  let [cineplexList, setCineplexList] = useState([]);
  let [cumRapChieu, setCumRapChieu] = useState([]);
  let param = useParams();
  let { id } = param;

  useEffect(() => {
    moviesServ
      .getMovieScheduleServ(id)
      .then((res) => {
        // console.log("he thong rap chieu: ", res.data.content.heThongRapChieu);
        let heThongRapChieu = res.data.content.heThongRapChieu;
        setCineplexList(heThongRapChieu);
        let { cumRapChieu } = heThongRapChieu.find(
          (rap) => rap.maHeThongRap === "BHDStar"
        );
        if (cumRapChieu) {
          setCumRapChieu(cumRapChieu);
        }
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  const getTicketRoom = (maLichChieu) => {
    console.log("maLichChieu: ", maLichChieu);
  };
  const getMovieSchedule = (maHeThongRap) => {
    let cloneCineplexList = [...cineplexList];
    let { cumRapChieu } = cloneCineplexList.find(
      (rap) => rap.maHeThongRap === maHeThongRap
    );
    if (cumRapChieu) {
      setCumRapChieu(cumRapChieu);
    }
    console.log("cumRapChieu: ", cumRapChieu);
  };
  const renderCineplexList = () => {
    return cineplexList.map((cineplex) => {
      return (
        <button
          className="button_cineplex border-b-2 border-solid p-2"
          key={cineplex.maHeThongRap}
          onClick={() => {
            getMovieSchedule(cineplex.maHeThongRap);
          }}
        >
          <img src={cineplex.logo} alt={cineplex.maHeThongRap} width="80px" />
        </button>
      );
    });
  };

  const renderCumRapChieu = () => {
    return cumRapChieu.map((rap) => {
      return (
        <div className="space-y-4  border-b-2 p-2" key={rap.maCumRap}>
          <p className="text-amber-500 font-bold uppercase">{rap.tenCumRap}</p>
          <div className="space-x-5 flex items-center">
            {rap.lichChieuPhim.map((lichChieu) => {
              return (
                <NavLink
                  to={`/purchase/${lichChieu.maLichChieu}`}
                  key={lichChieu.maLichChieu}
                  className="border-solid border  space-x-2 border-gray-400 rounded p-1"
                  // onClick={() => {
                  //   getTicketRoom(lichChieu.maLichChieu);
                  // }}
                >
                  <span className="text-red-500 font-semibold">
                    {lichChieu.ngayChieuGioChieu.substring(0, 10)}
                  </span>
                  <span>~</span>
                  <span className="text-amber-500 font-semibold">
                    {lichChieu.ngayChieuGioChieu.substring(12, 19)}
                  </span>
                </NavLink>
              );
            })}
          </div>
        </div>
      );
    });
  };
  return (
    <div className="flex justify-center p-5">
      <div className="w-4/6 space-y-10">
        <p id="movieSchedule" className="text-amber-600 font-bold">
          LỊCH CHIẾU PHIM
        </p>
        <div className="grid grid-cols-10 p-2 border-2 rounded-lg">
          <div className="cineplexs col-span-1 flex flex-col p-1 border-r-2">
            {renderCineplexList()}
          </div>
          <div className="cinemas col-span-9 flex flex-col p-1 " id="cinemas">
            {renderCumRapChieu()}
          </div>
        </div>
      </div>
    </div>
  );
}
