import { useContext } from "react";
import { publicBg } from "../../assets";
import Button from "../../components/design/Button";
import { AppContext } from "../utils/AppContext";

const Public = () => {
  const { usePageTitle } = useContext(AppContext);
  usePageTitle("IMConnect | Welcome page");
  const welcome = (
    <div className="flex max-h-max w-full flex-col justify-center gap-4 border-b border-blue-300 bg-zinc-200 p-5 py-16 text-black sm:min-h-full sm:max-w-[25rem]">
      <h2 className="h2 text-center font-semibold">
        Welcome to <span className="font-bold text-blue-700">IMConnect</span>
        &nbsp;chat
      </h2>
      <Button blue wFull href="/auth/login">
        Login
      </Button>
      <Button
        blue
        wFull
        href="/auth/signup"
        onClick={() => {
          sessionStorage.clear("userSession");
        }}
      >
        Sign up
      </Button>
    </div>
  );
  return (
    <div className="flex min-h-screen flex-row-reverse justify-between max-sm:flex-col">
      <div className="hidden sm:block">{welcome}</div>
      <div
        className="flex h-screen w-full flex-col justify-center gap-4 bg-cover bg-center p-4 text-zinc-50"
        style={{ backgroundImage: `url(${publicBg})` }}
      >
        <div className="flex h-1/2 min-h-max flex-col gap-4">
          <h1 className="text-[3rem] font-bold sm:text-[3.5rem] md:text-[4.5rem]">
            <span className="text-shadow text-blue-700">IM</span>Connect
          </h1>
          <h4 className="h4">
            <b>Connect</b> your friends, <b>Chat</b>&nbsp;smarter, <b>Post</b>
            &nbsp;wiser <br className="hidden lg:flex" />
            with&nbsp;<b>IMConnect</b>
          </h4>
        </div>
        <div className="block sm:hidden">{welcome}</div>
      </div>
    </div>
  );
};

export default Public;
