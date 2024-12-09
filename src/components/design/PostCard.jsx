import React, { useContext, useEffect, useState } from "react";
import {
  commentSvg,
  shareSvg,
  threeDotsVerticalSvg,
  thumbsUpBlueSvg,
  thumbsUpSvg,
  userSvg,
} from "../../assets";
import Loader from "../skeletons/Loader";
import axiosInstance from "../../features/utils/axiosInstance";
import { AppContext } from "../../features/utils/AppContext";

const PostCard = ({ post, className }) => {
  const context = useContext(AppContext);
  if (!context) return <Loader />;

  const { user } = context;

  // State Management
  const [liked, setLiked] = useState(false);
  const [postLikes, setPostLikes] = useState(post?.likes || 0);

  useEffect(() => {
    if (post?.likedBy?.includes(user?._id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [post, user?._id]);

  const handleLike = async () => {
    try {
      const response = await axiosInstance.post(`/posts/like/${post._id}`, {
        userId: user._id,
      });

      if (response.data.message === "Post liked successfully") {
        setLiked(!liked); // Toggle liked state
        setPostLikes((prevLikes) => prevLikes + (liked ? -1 : 1)); // Update likes
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.error(
        "Unable to like post:",
        err.response?.data?.message || err.message,
      );
    }
  };

  const getTime = (isoString) => {
    if (!isoString) return "Long time ago";
    const date = new Date(isoString);
    const options = { hour: "2-digit", minute: "2-digit", hour12: false };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  if (!post) return <Loader />; // Ensure `post` exists

  return (
    <div
      className={`my-4 flex h-max flex-col gap-2 rounded-md px-4 py-4 ${
        className ? className : "bg-zinc-100"
      }`}
    >
      <div className="flex items-center justify-between border-b border-zinc-400/20 pb-2">
        <div className="group flex cursor-pointer items-center gap-2">
          <img
            loading="lazy"
            src={post.avatar || userSvg}
            className={`aspect-square w-11 rounded-md border bg-zinc-300/50 object-cover object-top ${
              !post.avatar && "p-2"
            }`}
          />
          <a href={`/dash/people/person/${post.username}`}>
            <p className="caption font-semibold">
              <span className="group-hover:underline">{post.person}</span>
              {post.feeling && " is " + post.feeling}
            </p>
            <p className="text-[12px] leading-3">
              Posted at {getTime(post.createdAt)}
            </p>
          </a>
        </div>
        {post?.username === user?.username && (
          <img
            loading="lazy"
            src={threeDotsVerticalSvg}
            alt="menu"
            className="h-5 cursor-pointer"
          />
        )}
      </div>
      <div className="caption post-description py-2 leading-[0.82rem] text-zinc-700">
        {post.description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>

      <div className="mt-2 flex w-full justify-between gap-2">
        {Array.isArray(post.images) &&
          post.images.map((item, index) => (
            <div
              className="flex-center-both relative aspect-[5/6] w-full overflow-hidden rounded-md"
              key={index}
            >
              <div
                className="img absolute inset-0 bg-zinc-200 bg-cover bg-center"
                style={{ backgroundImage: `url(${item})` }}
              />
              <img
                loading="lazy"
                src={item}
                className="z-[100] h-full object-cover object-center"
              />
            </div>
          ))}
      </div>
      <div className="caption body-1 mt-4 grid w-full grid-cols-3 border-t-2 border-zinc-300/50 pt-4 tracking-tighter">
        <div className="flex-center-hor w-full gap-3" onClick={handleLike}>
          {postLikes}
          <img
            loading="lazy"
            src={liked ? thumbsUpBlueSvg : thumbsUpSvg}
            className="h-6"
          />
          {liked ? "Liked" : "Like"}
        </div>
        <div className="flex-center-hor w-full gap-3">
          <img loading="lazy" src={commentSvg} className="h-6" />
          Comment
        </div>
        <div className="flex-center-hor w-full gap-3">
          <img loading="lazy" src={shareSvg} className="h-6" />
          Share
        </div>
      </div>
    </div>
  );
};

export default PostCard;
