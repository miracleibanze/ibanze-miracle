import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Hero from "../../components/Hero.jsx";
import OnePerson from "../profileRoutes/OnePerson.jsx";
import Setting from "../SettingRoutes/Setting.jsx";
import { AppContext } from "../../features/utils/AppContext.jsx";
import WelcomeSkeleton from "../../components/skeletons/WelcomeSkeleton.jsx";

export const context = createContext();

const Welcome = () => {
  const navigate = useNavigate();
  const [people, setPeople] = useState();
  const [posts, setPosts] = useState();
  const appContext = useContext(AppContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!appContext) {
        alert("Session expired or context unavailable.");
        navigate("/login");
      }
    }, 12000);

    return () => clearTimeout(timer);
  }, [appContext]);

  return (
    <context.Provider value={{ setPeople, people, posts, setPosts }}>
      {appContext ? (
        <Routes>
          <Route index element={<Hero />} />
          <Route path="person" element={<OnePerson />} />
          <Route path="setting" element={<Setting />} />
        </Routes>
      ) : (
        <WelcomeSkeleton />
      )}
    </context.Provider>
  );
};

export default Welcome;
