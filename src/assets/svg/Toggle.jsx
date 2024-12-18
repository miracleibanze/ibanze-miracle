const Toggle = ({ rotate }) => {
  return (
    <div className={`h-6 aspect-video ${rotate}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="bi bi-toggle-on h-full w-full"
      >
        <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8" />
      </svg>
    </div>
  );
};

export default Toggle;
