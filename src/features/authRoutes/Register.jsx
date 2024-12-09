import { memo } from "react";
import { registerBg, uploadCloud } from "../../assets";
import { Navigate, useParams } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import PageNotFound from "../../components/PageNotFound";

const Register = () => {
  const { logType } = useParams();

  return (
    <div
      className="w-full min-h-screen bg-center bg-cover flex-center-both p-8"
      style={{ backgroundImage: `url(${registerBg})` }}
    >
      {logType === "login" && <Login />}
      {logType === "signup" && <Signup />}
      {/* {logType !== "signup" && logType !== "login" ? <PageNotFound /> : ""} */}
    </div>
  );
};

export default memo(Register);
