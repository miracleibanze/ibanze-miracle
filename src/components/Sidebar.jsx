import { memo, useContext, useState } from "react";
import { menuSvg, xSvg } from "../assets";
import {
  bottomSidebarLinks,
  homeSidebarLinks,
  utilitySidebarLinks,
} from "../features/utils/constants";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "./skeletons/Loader";
import DeleteModal from "./DeleteModal";
import { AppContext } from "../features/utils/AppContext";

const Sidebar = ({ wrapped, setWrapped, setSearchBox }) => {
  const appContext = useContext(AppContext);
  const [logout, setLogout] = useState(false);

  if (!appContext) return <Loader />;
  const { setUser } = appContext;
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [loggingOut, setLoggingOut] = useState(false);
  const handleLogout = () => {
    setLoggingOut(true);
    sessionStorage.removeItem("userSession");
    setUser();
    navigate("/");
    setLoggingOut(false);
  };
  const toggleWrapped = () => {
    setWrapped(!wrapped);
  };
  return (
    <>
      <div
        className={`${
          !wrapped
            ? "bottom-2 left-2 top-2 z-[300] w-[12rem] max-sm:absolute max-sm:border-r-2 max-sm:border-zinc-400"
            : "h-full min-w-[5rem] max-w-[5rem]"
        } flex-between-vert rounded-md bg-zinc-100 sm:h-full`}
      >
        <img
          src={wrapped ? menuSvg : xSvg}
          className={`bg-zinc-200 p-1 ${
            wrapped
              ? "mx-auto mt-4 h-8 w-8"
              : "absolute right-2 top-2 mb-7 h-6 w-6 rounded-tr-md max-sm:hidden sm:right-4 sm:top-4"
          }`}
          onClick={toggleWrapped}
        />
        <div
          className={`flex h-full min-w-full max-w-full flex-col items-center justify-between ${
            !wrapped && "mt-10"
          }`}
        >
          <div className={`${wrapped ? "w-max" : "w-full"}`}>
            {homeSidebarLinks.map((item) => (
              <button
                className={`flex w-full items-center gap-2 px-4 py-2 font-semibold outline-none hover:bg-slate-300/50 ${
                  location === item.link && "rounded-full bg-zinc-200"
                } ${item.id === 1 && "lg:hidden"} cursor-pointer`}
                key={item.id}
                onClick={() => {
                  if (item.id === 1) {
                    setSearchBox(true);
                  } else {
                    navigate(item.link);
                  }
                  setWrapped(true);
                }}
              >
                <img
                  src={item.icon}
                  className={`${!wrapped ? "h-4" : "h-5"} aspect-square`}
                />
                <p className={`${wrapped ? "hidden" : "flex"}`}>{item.name}</p>
              </button>
            ))}
          </div>
          <div
            className={`${
              wrapped ? "w-max" : "w-full"
            } max-h-1/3 flex flex-col`}
          >
            {utilitySidebarLinks.map((item) => (
              <button
                className={`flex w-full cursor-pointer items-center gap-2 border-none px-4 py-2 font-semibold outline-none hover:bg-slate-300/50 ${
                  item.id === 2 && "rounded-md bg-zinc-50"
                }`}
                key={item.id}
                onClick={() => {
                  navigate(item.link);
                  setWrapped(true);
                }}
              >
                <img
                  src={item.icon}
                  className={`${!wrapped ? "h-4" : "h-5"} aspect-square`}
                />
                <p className={`${wrapped ? "hidden" : "flex"}`}>{item.name}</p>
              </button>
            ))}
          </div>
          <div className={`${wrapped ? "w-max" : "w-full"} h-1/4`}>
            {bottomSidebarLinks.map((item) => (
              <button
                className={`flex w-full cursor-pointer items-center gap-2 px-4 py-2 font-semibold hover:bg-slate-300/50 ${
                  location === `${item.link}` && "rounded-md bg-zinc-50"
                }`}
                key={item.id}
                onClick={() => {
                  if (item.logOut === true) {
                    setLogout(true);
                  } else {
                    navigate(`${item.link}`);
                  }
                  setWrapped(true);
                }}
              >
                <img
                  src={item.icon}
                  className={`${!wrapped ? "h-4" : "h-6"} aspect-square`}
                />
                <p className={`${wrapped ? "hidden" : "flex"}`}>{item.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      {logout && (
        <>
          <DeleteModal
            title="Confirm Logout"
            action="logout"
            onConfirm={handleLogout}
            onCancel={() => setLogout(false)}
            loading={loggingOut}
          />
        </>
      )}
    </>
  );
};

export default memo(Sidebar);
