import { useLocation, useNavigate } from "react-router-dom";
import { arrowLeftSvg, arrowLeftWhiteSvg } from "../../assets";

const BackToHome = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return pathname !== "/" ? (
    <div className="w-full py-4">
      <img
        src={arrowLeftWhiteSvg}
        className="hide white h-10 w-20 p-2 pr-12 hover:border"
        onClick={() => navigate(-1)}
      />
      <img
        src={arrowLeftSvg}
        className="hide dark h-10 w-20 p-2 pr-12 hover:border"
        onClick={() => navigate(-1)}
      />
    </div>
  ) : null;
};

export default BackToHome;
