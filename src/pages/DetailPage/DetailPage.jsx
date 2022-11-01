import React, { useEffect, useState } from "react";
import { Progress } from "antd";

import { useParams } from "react-router-dom";
import { moviesServ } from "../../services/moviesService";
import LichChieuPhim from "./LichChieuPhim";

export default function DetailPage() {
  const [movie, setMovie] = useState({});

  let param = useParams();
  let { id } = param;
  useEffect(() => {
    moviesServ
      .getDetailMovie(id)
      .then((res) => {
        let detailMovie = res.data.content;
        // console.log("detailMovie: ", detailMovie);
        let ngayKhoiChieu = detailMovie.ngayKhoiChieu.substring(0, 10);
        setMovie({ ...detailMovie, ngayKhoiChieu });
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  const renderStar = (number) => {
    return (
      <span className="text-yellow-300 space-x-1">
        {renderIcon(Math.floor(number / 2))}
      </span>
    );
  };
  const renderIcon = (number) => {
    let arrayRender = [];
    for (let i = 0; i < number; i++) {
      arrayRender.push("");
    }
    return arrayRender.map((item, index) => {
      return <i key={index} className="fa fa-star"></i>;
    });
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to right,rgba(0,0,0,1)150px,rgba(0,0,0,.6)100%),url(${movie.hinhAnh})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "repeat-x",
        }}
        className="detail__page container flex justify-center py-36"
      >
        <div className="w-2/3 flex justify-around items-start ">
          <div className="w-1/5">
            <img className="rounded-lg w-full" src={movie.hinhAnh} alt="" />
          </div>
          <div className="w-3/5 space-y-8 p-3">
            <h1 className="text-3xl  text-white">{movie.tenPhim}</h1>
            <div>
              <h2 className="text-2xl text-white">Nội dung</h2>
              <h3 className=" text-gray-400"> {movie.moTa}</h3>
            </div>
            <div>
              <a
                href="#movieSchedule"
                className="bg-red-500 hover:bg-orange-500 text-white px-5 py-2 rounded-lg"
              >
                Đặt vé
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Progress
              type="circle"
              strokeColor="red"
              format={(number) => {
                return (
                  <span className="text-yellow-300">
                    {number / 10 + " điểm"}
                  </span>
                );
              }}
              percent={movie.danhGia * 10}
            />
            <div>{renderStar(movie.danhGia)}</div>
          </div>
        </div>
      </div>
      <div>
        <LichChieuPhim />
      </div>
    </>
  );
}
