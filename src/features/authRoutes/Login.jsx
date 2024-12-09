import { useContext, useEffect, useState } from "react";
import Button from "../../components/design/Button";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { loaderSvg } from "../../assets";
import { AppContext } from "../../features/utils/AppContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser, setIsLogged, usePageTitle } = useContext(AppContext);
  usePageTitle("Login | IMConnect");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [viewPassword, setViewPassword] = useState(false);
  const [loading, setloading] = useState(false);

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format");
      return;
    }
    const mockUsers = [
      {
        names: "Muhire Jack",
        username: "muhireJ",
        password: "12345",
        email: "muhire@gmail.com",
        title: "employee",
      },
      {
        names: "Patric MUGABE",
        username: "MUGABEP",
        password: "12345",
        email: "patrick@gmail.com",
        title: "admin",
      },
    ];

    if (email === "muhire@gmail.com") {
      setUser(mockUsers[0]);
      setIsLogged(true);
      navigate("/dash");
      return;
    } else if (email === "patrick@gmail.com") {
      setUser(mockUsers[0]);
      setIsLogged(true);
      navigate("/dash");
      return;
    } else {
      alert("User not found");
    }
    // try {
    //   setloading(true);
    //   const response = await axiosInstance.post("/auth", {
    //     email,
    //     password,
    //   });

    //   if (response.data) {
    //     console.log(response);
    //     setUser(response.data);
    //     sessionStorage.setItem(
    //       "userSession",
    //       JSON.stringify(response.data.email),
    //     );
    //   } else {
    //     alert(response.data.message);
    //     navigate(0);
    //     console.log(response);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   setErrorMessage(error?.response?.data?.message || error?.message);
    // } finally {
    //   setloading(false);
    // }
  };

  const handleViewPassword = () => {
    setViewPassword((prevState) => !prevState);
  };

  return (
    <div className="relative flex w-full max-w-md flex-col gap-4 bg-zinc-50 px-8 py-12 shadow-2xl shadow-black">
      <form
        className="form flex w-full flex-col gap-4 bg-zinc-50"
        onSubmit={handleLogin}
      >
        <h3 className="h3 text-center font-semibold">Welcome back</h3>

        <div>
          <input
            type="text"
            name="email"
            onChange={emailChange}
            placeholder="Enter your username or email"
            required
          />
          {errorMessage === "user" && (
            <span className="italic text-red-500">
              Email not found! Please check
            </span>
          )}
        </div>

        <div>
          <input
            type={viewPassword ? "text" : "password"}
            name="password"
            onChange={passwordChange}
            required
            placeholder="Enter your password"
          />
          {errorMessage === "password" && (
            <span className="italic leading-none text-red-500">
              Incorrect password! Try again
            </span>
          )}
          <label className="mt-4 flex w-full items-center justify-start gap-2">
            <input
              type="checkbox"
              name="show-password"
              onChange={handleViewPassword}
              className="h-5 max-w-5 rounded-md border-none bg-red-400"
            />
            Show password
          </label>
        </div>

        <span className="body-2 font-normal text-blue-500">
          Forgot password?
        </span>

        <input
          type="submit"
          value="Login"
          className="bg-blue-700 text-zinc-50"
        />
      </form>

      <Button light className="mt-4 text-blue-700" href="/auth/signup">
        Create account
      </Button>
      {loading && (
        <div className="flex-center-both absolute inset-0 z-10 bg-zinc-100 opacity-[.4]">
          <img src={loaderSvg} className="h-12 w-12" />
        </div>
      )}
    </div>
  );
};

export default Login;
