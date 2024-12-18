import { useLocation, useNavigate } from "react-router-dom";
import { navlinks } from "../features/constants";
import Button from "./design/Button";
import ButtonGradient from "./design/ButtonGradient";
import Toggle from "../assets/svg/Toggle";
import MenuSvg from "../assets/svg/MenuSvg";
import { Gear } from "../assets/svg/Svgs";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../features/AppContext";
import { Link } from "react-scroll";

const Navbar = () => {
  const context = useContext(AppContext);
  if (!context) return;
  const { openNavigation, setOpenNavigation, menu, setMenu } = context;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("theme-dark");
      setIsDarkMode(true);
    } else {
      document.body.classList.add("theme-light");
      setIsDarkMode(false);
    }
  }, []);

  // Toggle theme and persist in localStorage
  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove("theme-dark");
      document.body.classList.add("theme-light");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => setMenu(!menu);
  const toggleNavigation = () => setOpenNavigation(!openNavigation);

  const navContent = (
    <div className="animate-menu dark-bg fixed bottom-0 right-0 top-0 z-[100] flex w-5/6 flex-col justify-center gap-4 sm:hidden">
      {navlinks.map((item) => (
        <Link
          to={item.link}
          smooth={true}
          duration={500}
          offset={-80}
          className={`hover:bg-primary w-full cursor-pointer px-6 py-2 link-${item.id}`}
          key={item.id}
          onClick={() => {
            setOpenNavigation(false);
          }}
        >
          {item.name}
        </Link>
      ))}
      <div
        className="link-5 light flex w-full cursor-pointer items-center justify-between px-6 py-2"
        onClick={() => {
          toggleTheme();
          setOpenNavigation(false);
        }}
      >
        {isDarkMode ? "Light mode" : "Dark mode"}
        <Toggle rotate={isDarkMode ? "rotate-180" : "rotate-0"} />
      </div>
    </div>
  );

  return (
    <>
      <header className="navbar sticky top-0 z-[1000] flex w-full items-center justify-between border-b py-2 font-semibold">
        <h4
          className="h4 cursor-pointer font-bold"
          onClick={() => navigate("/")}
        >
          M<span className="text-primary relative">ira</span>cle.
        </h4>

        <div
          className="hidden flex-1 items-center justify-center gap-2 sm:flex"
          onClick={() => {
            if (openNavigation) {
              setOpenNavigation(false);
            }
            if (menu) {
              setMenu(false);
            }
          }}
        >
          {pathname === "/" &&
            navlinks.map((item) => (
              <Link
                to={item.link}
                smooth={true}
                duration={300}
                offset={-100}
                className={`${
                  item.name === "Contact" && "sm:hidden"
                } hover:text-primary relative cursor-pointer py-1 duration-300`}
                key={item.id}
              >
                {item.name}
              </Link>
            ))}
        </div>
        <div className="hidden items-center sm:flex">
          <Button
            underline={pathname === "/contact" ? true : false}
            onClick={() => navigate("/contact")}
          >
            Contact
          </Button>
        </div>
        <Gear onClick={toggleMenu} className="pl-4" />
        {pathname === "/" && (
          <>
            <Button
              className="ml-auto sm:hidden"
              onClick={toggleNavigation}
              zIndex="z-[200]"
            >
              <MenuSvg openNavigation={openNavigation} />
            </Button>
            {openNavigation && navContent}
          </>
        )}
        <div
          className={`dark-bg absolute right-0 top-full z-10 w-[20rem] border px-4 py-2 ${
            !menu && "hidden"
          } z-[100]`}
          onClick={() => {
            toggleTheme();
            toggleMenu();
          }}
        >
          <span className="hover:dark-bg flex w-full cursor-pointer items-center justify-between px-4 py-2">
            <p>{isDarkMode ? "Light mode" : "Dark mode"}</p>
            <Toggle rotate={!isDarkMode ? "rotate-180" : "rotate-0"} />
          </span>
        </div>
      </header>
      <ButtonGradient />
    </>
  );
};

export default Navbar;
