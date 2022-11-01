import { userInforLocal } from "../../services/local.service";
import { userServ } from "../../services/userService";
import { SET_LOGIN } from "../constants/userConstants";
import { message } from "antd";

export const setLoginActionServ = (values, handleSuccess) => {
  return (dispatch) => {
    userServ
      .postLogin(values)
      .then((res) => {
        userInforLocal.set(res.data.content);
        dispatch({
          type: SET_LOGIN,
          payload: res.data.content,
        });
        handleSuccess();
      })
      .catch((err) => {
        console.log("err: ", err);
        message.error(err.response.data.content);
      });
  };
};
