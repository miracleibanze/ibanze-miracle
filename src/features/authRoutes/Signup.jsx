import { useNavigate } from "react-router-dom";
import Button from "../../components/design/Button";
import { useContext, useState } from "react";
import { checkSvg, loaderSvg, uploadCloud } from "../../assets";
import axiosInstance from "../utils/axiosInstance";
import Loader from "../../components/skeletons/Loader";
import { AppContext } from "../../features/utils/AppContext";
import Notice from "../../components/design/Notice";

const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    names: "",
    username: "",
    email: "",
    password: "",
    title: "employee",
  });
  const context = useContext(AppContext);
  if (!context) return <Loader />;
  const { setUser, user, setIsLogged, usePageTitle } = context;
  usePageTitle("Sign Up | IMConnect");
  const [registerPage, setRegisterPage] = useState(0);
  const [viewPassword, setViewPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddUser = (event) => {
    event.preventDefault();
    setUserData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleTitle = (event) => {
    event.preventDefault();
    setUserData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleViewPassword = () => {
    if (!viewPassword) {
      setViewPassword(true);
    } else {
      setViewPassword(false);
    }
    console.log(viewPassword);
  };

  const postData = async () => {
    setLoading(true);
    console.log(userData);
    // try {
    // const response = await axiosInstance.post("/users", userData);
    setUser(userData);
    // console.log(response.data);
    setIsLogged(true);
    navigate("/dash");
    // } catch (error) {
    //   setError(error?.response?.data?.message || error?.message);
    //   console.log(error?.response?.data?.message || error?.message);
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }
  };
  const handleSubmit = () => {
    postData();
  };

  return (
    <div className="relative flex w-full max-w-md flex-col gap-4 bg-zinc-50 px-8 py-12 shadow-2xl shadow-black">
      <Notice message={error} onCancel={() => setError("")} />
      <form className="form relative flex w-full flex-col gap-4 bg-zinc-50">
        <h3 className="h3 text-center font-semibold">Create account</h3>
        {registerPage === 0 && (
          <>
            <label className="body-2 font-semibold">
              Full Names:
              <input
                type="text"
                name="names"
                placeholder="Your full names"
                onChange={handleAddUser}
              />
            </label>
            <label className="body-2 font-semibold">
              Username:
              <input
                type="text"
                name="username"
                placeholder="Choose username"
                onChange={handleAddUser}
              />
            </label>
            <label className="body-2 font-semibold">
              E-mail:
              <input
                type="email"
                name="email"
                placeholder="Your email"
                onChange={handleAddUser}
              />
            </label>
          </>
        )}
        {registerPage === 1 && (
          <>
            <label className="body-2 font-semibold">
              <span>Select your title in the company</span>
              <input
                type={viewPassword ? "text" : "password"}
                name="password"
                placeholder="Choose password"
                onChange={handleAddUser}
              />
            </label>
            <label className="flex w-full items-center justify-start gap-2">
              <input
                type="checkbox"
                name="show-password"
                onChange={handleViewPassword}
                className="relative h-5 max-w-5 flex-1 rounded-md border-none bg-red-400 outline-none"
              />
              Show password
            </label>
            <label htmlFor="dob" className="body-2 pt-8 font-semibold">
              <span>Select your title in the company</span>
              <div className="flex w-full items-center gap-3 text-zinc-700/90">
                <select name="title" onChange={handleTitle}>
                  <option value="employee">An employee</option>
                  <option value="admin">One of IT team</option>
                </select>
              </div>
            </label>
          </>
        )}
        <div className="relative mt-8 flex w-full flex-col items-center px-8">
          <div className="grid h-1 w-[10rem] grid-cols-3 gap-1 rounded-full">
            <div className="h-full w-full rounded-full bg-blue-700" />
            <div
              className={`h-full w-full rounded-full bg-blue-700 ${
                registerPage !== 1 && "hidden"
              }`}
            />
            <div
              className={`h-full w-full rounded-full bg-slate-300 ${
                registerPage !== 0 && "hidden"
              }`}
            />
          </div>
        </div>
      </form>
      <div
        className={`flex justify-between ${
          registerPage === 0 && "flex-row-reverse"
        }`}
      >
        <button
          onClick={() => setRegisterPage(0)}
          className={`w-max border border-blue-700 px-4 py-2 text-blue-700 ${
            registerPage === 0 && "hidden"
          }`}
        >
          Back
        </button>
        <button
          onClick={() => {
            if (registerPage === 0) {
              return setRegisterPage(1);
            } else {
              handleSubmit();
            }
          }}
          className={`w-max bg-blue-700 px-4 py-2 text-white`}
        >
          {registerPage !== 1 ? "Next" : "Finish"}
        </button>
      </div>
      <Button light className="mt-4 text-blue-700" href="/auth/login">
        Already have an account
      </Button>
      {loading && (
        <div className="flex-center-both absolute inset-0 z-[1000] bg-zinc-100 opacity-[.4]">
          <img src={loaderSvg} className="h-12 w-12" />
        </div>
      )}
    </div>
  );
};

export default Signup;
