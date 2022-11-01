import React from "react";
import { chooseChair } from "../../redux/actions/chairActions";
import { useDispatch, useSelector } from "react-redux";
import { devideArray } from "../../services/devideArray";
import { nanoid } from "nanoid";

export default function ChairList({ danhSachGhe }) {
  console.log("chairList render");
  let dispatch = useDispatch();

  const handleChooseChair = (e, ghe) => {
    let buttonChoosing = document.getElementById(e.currentTarget.id);
    let buttonChoosingClassName = buttonChoosing.className;
    let checkChoosen = buttonChoosingClassName.indexOf("bg-green-500");
    if (checkChoosen === -1) {
      buttonChoosing.classList.add("bg-green-500");
    } else {
      buttonChoosing.classList.remove("bg-green-500");
    }
    let { tenGhe, giaVe } = ghe;
    let newGhe = { tenGhe, giaVe };
    console.log("newGhe: ", newGhe);
    dispatch(chooseChair(newGhe));
  };
  let renderChairList = () => {
    if (danhSachGhe !== []) {
      let danhSachGheSauKhiXuLy = devideArray(danhSachGhe);
      console.log("danhSachGheSauKhiXuLy: ", danhSachGheSauKhiXuLy);
      return danhSachGheSauKhiXuLy.map((danhSach) => {
        return (
          <tr key={nanoid()}>
            {danhSach.map((ghe) => {
              return (
                <td key={ghe.maGhe}>
                  <button
                    data-choosen="false"
                    disabled={ghe.daDat ? true : false}
                    className={
                      ghe.loaiGhe === "Vip"
                        ? `vip_chair w-8 h-8 bg-amber-500 hover:bg-white rounded text-black`
                        : `normal_chair w-8 h-8 bg-gray-400 hover:bg-white rounded text-black`
                    }
                    id={`btn_choose_chair_${ghe.tenGhe}`}
                    style={
                      ghe.daDat ? { backgroundColor: "rgb(75 85 99)" } : {}
                    }
                    onClick={(e) => {
                      handleChooseChair(e, ghe);
                    }}
                  >
                    {ghe.daDat ? "X" : ghe.tenGhe}
                  </button>
                </td>
              );
            })}
          </tr>
        );
      });
    }
  };
  return (
    <div className="choose_part flex flex-col items-center col-span-7">
      <h3 className="text-1xl text-white">Màn hình</h3>
      <div className="mb-8" id="tv" />
      <table className="chair w-3/4">
        <tbody>{renderChairList()}</tbody>
      </table>
      <div className="flex space-x-5 py-5">
        <div className="flex space-x-2">
          <button disabled className="orange w-5 h-5 bg-gray-600 ">
            X
          </button>
          <p className="text-1xl text-white">Ghế đã đặt</p>
        </div>
        <div className="flex space-x-2">
          <div className="green w-5 h-5 bg-amber-500" />
          <p className="text-1xl text-white">Vip</p>
        </div>
        <div className="flex space-x-2">
          <div className="white w-5 h-5 bg-gray-400" />
          <p className="text-1xl text-white">Thường</p>
        </div>
      </div>
    </div>
  );
}
