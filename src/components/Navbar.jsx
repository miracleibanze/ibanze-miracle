import { memo, useCallback, useContext } from "react";
import { logo, menuSvg, userSvg, xSvg } from "../assets";
import Search from "./Search";
import Button from "./design/Button";
import { AppContext } from "../features/utils/AppContext";

const Navbar = (props) => {
  const { wrapped, setWrapped } = props; // Destructure wrapped and setWrapped directly from props
  const appContext = useContext(AppContext);

  if (!appContext)
    return (
      <div className="flex-between-hor w-full rounded-md bg-zinc-50 px-4 py-2 sm:px-8">
        <div className="skeleton-loader h-10 w-10 rounded-md bg-zinc-200 sm:hidden" />
        <div className="relative flex gap-3">
          <div className="skeleton-loader h-10 w-32 rounded-md bg-zinc-200" />
          <div className="skeleton-loader hidden h-10 w-[25rem] rounded-md bg-zinc-200 lg:flex" />
        </div>
        <div className="skeleton-loader h-10 w-10 rounded-md bg-zinc-200 sm:w-32" />
      </div>
    );

  const user = appContext?.user;

  // The function to toggle wrapped state on click
  const toggleSidebar = useCallback(() => {
    setWrapped((prevWrapped) => !prevWrapped); // Toggling wrapped state
  }, [setWrapped]);

  return (
    <div className="flex-between-hor w-full rounded-md bg-zinc-50 px-4 py-2 sm:px-8">
      <img
        src={wrapped ? menuSvg : xSvg}
        className="z-[500] h-8 w-8 cursor-pointer rounded-md bg-zinc-200 p-1 sm:hidden"
        onClick={toggleSidebar} // This triggers the toggle
        alt="menu-toggle"
      />
      <div className="relative flex">
        <a href="/dash">
          <img
            src={logo}
            alt="logo"
            width={160}
            height={100}
            className="h-10 max-w-32"
          />
        </a>
        <Search {...props} />
      </div>
      <div className="flex h-full gap-2">
        <Button light hFull href="/dash/profile">
          {user ? (
            <span className="mr-3 max-sm:hidden">{user.username}</span>
          ) : (
            <div className="skeleton-loader mr-4 h-8 w-24 rounded-md bg-transparent max-sm:hidden"></div>
          )}
          <img
            src={user?.image || userSvg}
            alt="user-avatar"
            className="object-fit -mx-3 -my-2 h-9 min-w-9 bg-zinc-100 object-center"
          />
        </Button>
      </div>
    </div>
  );
};

export default memo(Navbar);
