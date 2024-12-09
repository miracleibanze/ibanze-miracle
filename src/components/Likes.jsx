import { useState, useEffect, useContext } from "react";
import axiosInstance from "../features/utils/axiosInstance";
import { AppContext } from "../features/utils/AppContext";
import ListSkeleton from "./skeletons/ListSkeleton";
import Notice from "./design/Notice";
import PostCard from "./design/PostCard";

const Likes = () => {
  const context = useContext(AppContext);
  if (!context) return <ListSkeleton />;
  const { user } = context;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axiosInstance.get(`/posts/likes/${user?._id}`);
        setPosts(response.data.posts);
      } catch (err) {
        console.log(err);
        setError(err?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [user]);

  return (
    <div className="relative flex h-full min-h-max w-full flex-col rounded-md bg-zinc-100 p-3">
      <Notice message={error} onCancel={() => setError("")} />
      <h5 className="h5 mb-4 flex w-full items-center border-b border-zinc-800/30 px-4 py-2 pb-3 font-semibold">
        My posts&nbsp;
        {loading ? (
          <div className="b-zinc-200 skeleton-loader h-10 w-16 rounded-md" />
        ) : (
          `(${posts?.length || 0})`
        )}
      </h5>
      <div className="relative flex h-full min-h-max w-full">
        {loading && <ListSkeleton />}
        {posts.length > 0 ? (
          posts.map((post) => <PostCard post={post} />)
        ) : (
          <p className="flex-center-both body-1 h-max w-full rounded-md font-semibold text-zinc-700/70">
            You don't have post yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Likes;
