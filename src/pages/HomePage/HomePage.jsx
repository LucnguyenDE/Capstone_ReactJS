import React, { useState, useEffect } from "react";
import CarouselOne from "./CarouselOne";
import ShowtimeMovies from "./ShowtimeMovies";
import CarouselTwo from "./CarouselTwo";
import Footer from "./Footer";
import { showtimeServ } from "../../services/showtimeService";
import { moviesServ } from "../../services/moviesService";
import phanTrang from "../../services/panigatePages";
import Lottie from "lottie-react";
import animate from "../../assets/42895-super-fatman-walk.json";

export default function Homepage({ setOpen, setVideoId }) {
  console.log("homepage render");

  let [cineplexList, setCineplexList] = useState([]);
  let [cinemaList, setCinemaList] = useState([]);
  let [filmList, setFilmList] = useState([]);
  let [currentCineplex, setCurrentCineplex] = useState("");
  let [isLoading, setIsLoading] = useState(true);
  let [listBannerCarouselOne, setListBannerCarouselOne] = useState([]);
  let [listMovieCarouselTwo, setListMovie] = useState([]);

  const getListMovieCarouselTwo = async () => {
    let res = await moviesServ.getMovieList();
    let dataPhim = res.data.content;
    let listMovieWithPages = phanTrang(dataPhim, 8);
    setListMovie(listMovieWithPages);
  };
  const getlistBannerCarouselOne = async () => {
    let res = await moviesServ.getBannerListServ();
    let listBannerCarouselOneServ = res.data.content;
    let trailerId = ["uqJ9u7GSaYM", "kBY2k3G6LsM", "NYH2sLid0Zc"];
    trailerId.forEach((id, index) => {
      listBannerCarouselOneServ[index].idVideo = id;
    });
    setListBannerCarouselOne(listBannerCarouselOneServ);
  };

  const getCinplexList = async () => {
    let res = await showtimeServ.getCineplexListServ();
    setCineplexList(res.data.content);
    console.log("getCinplexList");
  };
  const getCinemaList = async (maHeThongRap) => {
    let res = await showtimeServ.getCinemaListServ(maHeThongRap);
    setCinemaList(res.data.content);
    setCurrentCineplex(maHeThongRap);
    console.log("getCinemaList");
  };
  const getFilmList = async (maHeThongRap, maCumRap) => {
    // console.log("maHeThongRap: ", maHeThongRap);
    let res = await showtimeServ.getFilmListServ(maHeThongRap);
    let currentCumRap = res.data.content[0].lstCumRap.find(
      (item) => item.maCumRap === maCumRap
    );
    let danhSachPhim = currentCumRap.danhSachPhim;
    let danhSachPhimDangChieu = danhSachPhim.filter((phim) => {
      return phim.dangChieu === true;
    });
    setFilmList(danhSachPhimDangChieu);
    console.log(" getFilmList");
  };

  const fetchData = async () => {
    await getlistBannerCarouselOne();
    await getListMovieCarouselTwo();
    await getCinplexList();
    await getCinemaList("BHDStar");
    await getFilmList("BHDStar", "bhd-star-cineplex-3-2");
    console.log("set animation");
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <div className="w-full h-screen bg-cyan-400 z-50">
      <Lottie
        style={{
          width: "400px",
          position: "absolute",
          top: "20%",
          left: "35%",
        }}
        animationData={animate}
        loop={true}
      />
    </div>
  ) : (
    <>
      <CarouselOne
        setOpen={setOpen}
        setVideoId={setVideoId}
        listBannerCarouselOne={listBannerCarouselOne}
      />
      <CarouselTwo listMovieCarouselTwo={listMovieCarouselTwo} />
      <ShowtimeMovies
        cineplexList={cineplexList}
        cinemaList={cinemaList}
        filmList={filmList}
        currentCineplex={currentCineplex}
        getCinemaList={getCinemaList}
        getFilmList={getFilmList}
      />
      <Footer />
    </>
  );
}
