import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SET_LOGIN } from "../redux/constants/userConstants";
import { userInforLocal } from "../services/local.service";
const backGroundStyle = {
  background: "linear-gradient(to right,rgba(0,0,0,1)150px,rgba(0,0,0,.6)100%)",
};

export default function Navbar({ setIsOpen }) {
  let dispatch = useDispatch();
  let userInfor = useSelector((state) => state.userReducer.userInfor);

  const openModal = () => {
    setIsOpen(true);
  };

  const handleLogout = () => {
    userInforLocal.remove();
    dispatch({
      type: SET_LOGIN,
      payload: null,
    });
  };

  useEffect(() => {
    let userInfor = userInforLocal.get();
    if (userInfor) {
      dispatch({
        type: SET_LOGIN,
        payload: userInfor,
      });
    }
  }, []);
  return (
    <div>
      <nav
        style={backGroundStyle}
        className="w-full sm:px-4 py-2.5 fixed top-0 z-30"
      >
        <div className="flex justify-around items-center">
          <NavLink to="/" className="flex items-center">
            <span>
              <i className="text-amber-400 text-6xl fab fa-critical-role" />
            </span>
          </NavLink>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex md:space-x-10">
              <li>
                <NavLink
                  className=" text-base font-bold uppercase  text-white "
                  to="/"
                >
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <a
                  href="#"
                  className=" text-base font-bold uppercase text-gray-400 "
                >
                  Phim đang chiếu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" text-base font-bold uppercase text-gray-400 "
                >
                  Phim sắp chiếu
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-auto">
            {userInfor === null ? (
              <ul className="flex items-center md:space-x-4">
                <li>
                  <NavLink
                    href="#"
                    className="block text-base font-bold uppercase text-gray-400 "
                    to="/login"
                  >
                    Đăng nhập
                  </NavLink>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-base font-bold uppercase py-2 pr-4 pl-3 text-gray-400"
                  >
                    Đăng ký
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                <li>
                  <button
                    className="text-base font-bold uppercase text-gray-400"
                    onClick={openModal}
                  >
                    {userInfor.hoTen}
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className="block text-base font-bold uppercase text-gray-400"
                    onClick={handleLogout}
                  >
                    Đăng xuất
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
{
  /* <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button> */
}
//thêm icon phần đăng nhập đăng ký
