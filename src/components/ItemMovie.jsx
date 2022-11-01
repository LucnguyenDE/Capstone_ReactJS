import React from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
const { Meta } = Card;

export default function ItemMovie({ dataMovie }) {
  return (
    <Card
      className="rounded-lg"
      hoverable
      cover={
        <img
          className="w-100 h-72 object-cover"
          style={{
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
          alt={dataMovie.biDanh}
          src={dataMovie.hinhAnh}
        />
      }
    >
      <Meta
        className="p-1"
        title={<p style={{ color: "blue" }}>{dataMovie.tenPhim}</p>}
        description={dataMovie.moTa.substring(0, 50) + "..."}
      />
      <div className="my-2 flex justify-center">
        <NavLink
          className="bg-amber-500 p-1 rounded hover:bg-red-500 hover:text-white"
          to={`detail/${dataMovie.maPhim}`}
        >
          Xem chi tiết
        </NavLink>
      </div>
    </Card>
  );
}
