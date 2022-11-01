import React from "react";
import { useSelector } from "react-redux";

export default function TicketList() {
  let ticketListStore = useSelector((state) => state.ticketReducer.listTicket);
  console.log("ticketListStore: ", ticketListStore);
  return (
    <div className="text-black font-bold">
      <p>
        tenCumRap: BHD Star Cineplex - 3/2", <br />
        tenRap: Rạp 6, <br />
        diaChi: L5-Vincom 3/2, 3C Đường 3/2, Q.10, <br />
        tenPhim: Home, <br />
        hinhAnh: https://movienew.cybersoft.edu.vn/hinhanh/hieu-test_gp03.jpg,{" "}
        <br />
        ngayChieu: 12/11/2022, <br />
        gioChieu: 09:11, <br />
        listChoosenChair: <br />
        tenGhe: 94, <br />
        giaVe: 90000 <br />
      </p>
    </div>
  );
}
