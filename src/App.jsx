import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { lazy, Suspense, useContext, useEffect } from "react";
import Loader from "./components/skeletons/Loader.jsx";
import Register from "./features/authRoutes/Register.jsx"; // Non-lazy import
import Public from "./features/authRoutes/Public.jsx"; // Non-lazy import
import { AppContext } from "./features/utils/AppContext.jsx";

const Welcome = lazy(() => import("./features/authRoutes/Welcome.jsx"));

const App = () => {
  const context = useContext(AppContext); // Access context
  if (!context) return <Loader />;
  const { isLogged, user, isLoading } = context;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isLogged && pathname === "/") {
      navigate("/dash");
    } else if (!isLogged && pathname.startsWith("/dash")) {
      navigate("/");
    }
  }, [isLogged, pathname, navigate, isLoading]);

  return (
    <>
      {/* Conditionally render Navbar and Sidebars only for logged-in users */}
      {isLogged && (
        <main className="h-full flex-grow">
          <Routes>
            <Route
              path="/dash"
              element={
                <div className="h-full w-full rounded-md bg-zinc-50">
                  <h3 className="h4">You loggen in as "{user?.names}"</h3>
                  <h3 className="h5">you are {user?.title}</h3>
                </div>
              }
            />
          </Routes>
        </main>
      )}

      {/* Route handling for non-logged-in users */}
      {!isLogged && (
        <Routes>
          <Route path="/" element={!isLoading ? <Public /> : <Loader />} />
          <Route
            path="/auth/:logType"
            element={!isLoading ? <Register /> : <Loader />}
          />
        </Routes>
      )}
    </>
  );
};

export default App;
