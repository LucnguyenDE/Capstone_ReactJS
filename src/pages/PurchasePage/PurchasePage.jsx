import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { purchaseServ } from "../../services/purchaseService";
import Lottie from "lottie-react";
import animate from "../../assets/42895-super-fatman-walk.json";
import ChairList from "./ChairList";
import MovieInfor from "./MovieInfor";
import TicketList from "../../components/BookingHistory/TicketList";

export default function PurchasePage() {
  console.log("purrchase Page render");
  let [danhSachGhe, setDanhSachGhe] = useState([]);
  let [thongTinPhim, setThongTinPhim] = useState({});

  let [isLoading, setIsLoading] = useState(true);
  let params = useParams();
  let { id } = params;

  let fetchData = async () => {
    try {
      let res = await purchaseServ.getTicketRoomServ(id);
      console.log("res: ", res);
      if (res) {
        let newDanhSachGhe = res.data.content.danhSachGhe;
        let newThongTinPhim = res.data.content.thongTinPhim;
        setDanhSachGhe(newDanhSachGhe);
        setThongTinPhim(newThongTinPhim);
        setIsLoading(false);
      }
    } catch (err) {
      console.log("err: ", err);
    }
  };

  useEffect(() => {
    console.log("useEffectRun");
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
    <div className="purchase_page grid grid-cols-10 pt-40 p-5 ">
      <ChairList danhSachGhe={danhSachGhe} />
      <MovieInfor thongTinPhim={thongTinPhim} />
    </div>
  );
}
