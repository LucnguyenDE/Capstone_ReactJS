import React from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { bookTicket } from "../../redux/actions/ticketActions";
export default function TicketInfor({ thongTinPhim }) {
  console.log("ticketinfor render");
  let listChoosenChair = useSelector(
    (state) => state.chairReducer.listChoosenChair
  );
  let dispatch = useDispatch();
  let handleBookTicket = (movieInfor) => {
    console.log("book ticket!");

    console.log("listChoosenChair: ", listChoosenChair);
    if (listChoosenChair.length === 0) {
      swal({
        icon: "error",
        title: "Bạn chưa chọn ghế",
      });
      return;
    }
    let newTicket = { ...movieInfor, listChoosenChair: listChoosenChair };
    console.log("newTicket: ", newTicket);
    dispatch(bookTicket(newTicket));
    swal({
      icon: "success",
      title: "Đặt ghế thành công!",
      text: "Kiểm tra trong lịch sử đặt vé",
    });
  };
  let renderThongTinVe = () => {
    if (thongTinPhim) {
      return (
        <div className="ticket_info_container text-slate-200 space-y-8 p-5">
          <div className="flex justify-center">
            <p className="text-2xl text-red-500">
              {listChoosenChair
                .map((item) => {
                  return item.giaVe;
                })
                .reduce((a, b) => {
                  return a + b;
                }, 0)
                .toLocaleString() + " VNĐ"}
            </p>
          </div>
          <div className="flex justify-between text-lg">
            <span>Cụm rạp:</span>
            <span className="text-red-500">{thongTinPhim.tenCumRap}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Địa chỉ:</span>
            <span className="text-red-500">{thongTinPhim.diaChi}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Rạp:</span>
            <span className="text-red-500">{thongTinPhim.tenRap}</span>
          </div>
          <div className="flex justify-between text-lg">
            <div>
              <span>Ngày giờ chiếu:</span>
            </div>
            <div className="text-red-500">
              <span>{thongTinPhim.ngayChieu}</span> <span> - </span>
              <span>{thongTinPhim.gioChieu}</span>
            </div>
          </div>
          <div className="flex justify-between text-lg">
            <span>Tên phim:</span>
            <span className="text-red-500">{thongTinPhim.tenPhim}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Chọn:</span>
            <span className="text-red-500">
              {listChoosenChair.map((item) => {
                return "Ghế " + item.tenGhe + ", ";
              })}
            </span>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-amber-500 hover:bg-red-500 p-2 rounded"
              onClick={() => {
                handleBookTicket(thongTinPhim);
              }}
            >
              ĐẶT VÉ
            </button>
          </div>
        </div>
      );
    }
  };
  return <div className="ticket_info col-span-3">{renderThongTinVe()}</div>;
}
