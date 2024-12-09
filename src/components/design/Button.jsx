import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({
  className,
  onClick,
  children,
  blue,
  light,
  rounded,
  hFull,
  border,
  wFull,
  href,
}) => {
  const navigate = useNavigate();
  const classes = `button relative inline-flex items-center justify-center cursor-pointer transition-colors px-4 text-n-1 ${
    wFull ? 'w-full' : 'w-max'
  } ${
    blue
      ? 'text-zinc-100 bg-blue-700 sm:py-3 py-2 active:bg-zinc-300 duration-500'
      : ''
  } ${border && 'text-blue-700 border border-blue-700'} ${
    light && 'text-zinc-800 bg-zinc-300'
  } ${rounded ? 'rounded-md' : ''} ${className && className} ${
    hFull ? 'sm:py-3 py-2' : ''
  } ${!hFull && !blue && 'h-10'}`;

  const spanClasses = `relative z-10 flex gap-2 items-center`;

  const renderButton = () => (
    <button
      className={classes}
      onClick={() => {
        onClick;
        navigate(href);
      }}
    >
      <span className={spanClasses}>{children}</span>
    </button>
  );

  return renderButton();
};

export default memo(Button);
