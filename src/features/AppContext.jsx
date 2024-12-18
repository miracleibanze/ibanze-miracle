import { createContext, useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [openNavigation, setOpenNavigation] = useState(false);
  const [menu, setMenu] = useState(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AppContext.Provider
      value={{
        loading,
        openNavigation,
        menu,
        setMenu,
        setLoading,
        setOpenNavigation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
