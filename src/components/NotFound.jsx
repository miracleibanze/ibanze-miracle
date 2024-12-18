import React from "react";
import { notFound, notFoundWhite } from "../assets";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-center-both h-full w-full flex-1">
      <h2 className="h2 mb-4 font-bold leading-none">Not found</h2>
      <img
        src={notFound}
        alt="not found"
        height={188}
        width={711}
        className="hide skelton-loader dark mb-8"
      />
      <img
        src={notFoundWhite}
        alt="not found"
        height={188}
        width={711}
        className="hide skelton-loader white mb-8"
      />
      <p className="body-1 mb-5 text-center font-semibold leading-tight">
        Sorry, We did not find what
        <br />
        you are looking for.
      </p>
      <button
        className="text-reverse bg-primary button px-4 py-2"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
};

export default NotFound;
