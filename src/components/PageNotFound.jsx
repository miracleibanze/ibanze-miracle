import { memo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from './design/Button';

const PageNotFound = ({ error, onRetry }) => {
  const location = useLocation();
  useEffect(() => {
    alert(location.pathname);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="flex-center-both flex-1 h-full bg-zinc-50 absolute inset-0">
      <h4 className="h4 font-normal">
        400 {error ? error : 'Page not found.'}
      </h4>
      {Error ? (
        <p className="font-normal">
          this link "<u className="underline">{location.pathname}</u>" that you
          are visiting has a problem
        </p>
      ) : (
        <p className="font-normal">
          This page you're visiting was not found on the sever.
        </p>
      )}
      <p className="font-normal">Please try other pages or go back.</p>
      <Button
        blue
        onClick={() => {
          if (onRetry) {
            onRetry();
          } else {
            navigate(-1);
          }
        }}
      >
        Go back
      </Button>
      {Error && (
        <p className="body-font-semibold">
          If problem persists, try reloading page
        </p>
      )}
    </div>
  );
};

export default memo(PageNotFound);
