import React, { useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { userInforLocal } from "../../services/local.service";
import { setLoginActionServ } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  useEffect(() => {
    let userInfor = userInforLocal.get();
    if (userInfor) {
      navigate("/");
    }
  }, []);
  let handleSuccess = () => {
    message.success("Đăng nhập thành công!");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  const onFinish = (values) => {
    dispatch(setLoginActionServ(values, handleSuccess));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="h-screen w-screen bg-amber-400 flex justify-center items-center p-5">
      <div className="container mx-auto p-5  rounded-lg flex justify-center">
        <div className="w-2/5 bg-white p-5 rounded-xl ">
          <Form
            layout="vertical"
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Tài khoản"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Trường này yêu cầu nhập!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Trường này yêu cầu nhập!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 10,
                span: 24,
              }}
            >
              <Button
                className="bg-red-500 text-white rounded"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
