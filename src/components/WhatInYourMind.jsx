import { useContext, useState } from "react";
import { userSvg } from "../assets";
import { postIcons } from "../features/utils/constants";
import Button from "./design/Button";
import Loader from "./skeletons/Loader";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../features/utils/axiosInstance";
import { AppContext } from "../features/utils/AppContext";

const WhatInYourMind = ({ className }) => {
  const navigate = useNavigate();
  const context = useContext(AppContext);

  if (!context) return <Loader />;

  const { user } = context;

  const [text, setText] = useState();

  const handlePost = async () => {
    const myPostObject = {
      user: user._id,
      description: text,
    };
    try {
      const response = await axiosInstance.post("/posts", myPostObject);
      if (response.data.message) {
        console.log(response.data.message);
        setTimeout(() => {
          navigate("/dash");
        }, 1000);
      } else {
        console.log("there is a problem");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      className={`col-span-2 mb-4 w-full rounded-md bg-zinc-200 p-2 ${className}`}
    >
      <div className="flex w-full items-center gap-2">
        <img
          loading="lazy"
          src={user?.image ? user.image : userSvg}
          className={`aspect-square w-8 rounded-md border border-zinc-500 ${
            !user ? "object-fit object-center p-1" : "object-cover object-top"
          }`}
        />
        <input
          type="text"
          name="post"
          placeholder="What's on your mind?"
          className="flex-1 rounded-md border border-zinc-500 px-4 py-1 outline-none"
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div className="relative flex items-center justify-between gap-1 pt-2">
        <div
          className="flex items-center gap-1"
          onClick={() => navigate(`/dash/post/${text || "content"}`)}
        >
          {postIcons.map((item) => (
            <div
              className="body-2 flex items-center gap-2 px-2 font-semibold"
              key={item.id}
            >
              <img
                loading="lazy"
                src={item.icon}
                alt={item.name}
                className="aspect-square w-5 object-cover object-center"
              />
              {item.name}
            </div>
          ))}
        </div>
        <Button blue onClick={handlePost}>
          Post
        </Button>
      </div>
    </div>
  );
};

export default WhatInYourMind;
