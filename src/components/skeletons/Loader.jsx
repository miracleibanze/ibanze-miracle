import { useEffect } from 'react';
import { loaderSvg } from '../../assets';
import { useNavigate } from 'react-router-dom';

const Loader = ({ reload }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // navigate(0);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 rounded-md z-[999] flex place-content-center place-items-center">
      <img src={loaderSvg} alt="loading" className="w-12 h-12" />
    </div>
  );
};

export default Loader;
