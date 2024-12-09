import { useContext, useEffect, useState } from "react";
import PostCard from "./design/PostCard";
import PersonCard from "./design/PersonCard";
import axiosInstance from "../features/utils/axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";
import FeedsSkeleton from "./skeletons/FeedsSkeleton";
import { AppContext } from "../features/utils/AppContext";

const Feeds = () => {
  const { user } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [people, setPeople] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const queryParams = new URLSearchParams(location.search);
  const nameParam = queryParams.get("name");
  const textParam = queryParams.get("text");

  useEffect(() => {
    const handleGetFeeds = async () => {
      setLoading(true);
      setError(null);

      try {
        if (nameParam && textParam) {
          const response = await axiosInstance.get(
            `/search?text=${textParam}&name=${nameParam}`,
          );
          setPeople(response.data.users);
          setPosts(response.data.posts);
        } else if (textParam) {
          const response = await axiosInstance.get(`/search?text=${textParam}`);
          setPosts(response.data.posts);
        } else if (nameParam) {
          const response = await axiosInstance.get(`/search?name=${nameParam}`);
          setPeople(response.data.users);
        } else if (user) {
          const [postsResponse, usersResponse] = await Promise.all([
            axiosInstance.get("/latest-posts"),
            axiosInstance.get(`/latest-users/${user.username}`),
          ]);
          setPeople(usersResponse.data);
          setPosts(postsResponse.data);
        }
      } catch (error) {
        console.error("Error fetching feeds:", error);
        setError("Failed to fetch feeds. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    handleGetFeeds();
  }, [location.search, nameParam, textParam, user, navigate]);

  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <>
      {(nameParam || textParam) && (
        <div className="w-full rounded-md bg-zinc-200 p-3">
          <h2 className="h2">Results of search "{nameParam || textParam}"</h2>
        </div>
      )}

      {nameParam && (
        <div className="w-full rounded-md bg-zinc-200 py-3">
          <h4 className="h4 mb-4 border-b border-zinc-500/50 px-4 font-semibold">
            People
          </h4>
          <div className="relative h-full w-full">
            {!loading ? (
              people.length > 0 ? (
                people.map((item) => (
                  <PersonCard
                    key={item.id || item._id}
                    person={item}
                    className="hover:bg-zinc-100/70"
                  />
                ))
              ) : (
                <div className="body-2 min-h-[10rem] text-center font-semibold text-zinc-700/50">
                  No people found
                </div>
              )
            ) : (
              <FeedsSkeleton />
            )}
          </div>
        </div>
      )}

      <div className="flex h-full flex-col bg-zinc-200 px-4 py-8">
        <h4 className="h4 mb-4 border-b border-zinc-500/50 px-4 font-semibold">
          Posts
        </h4>
        <div className="relative h-full w-full">
          {!loading ? (
            posts.length > 0 ? (
              posts.map((item) => (
                <PostCard key={item.id || item._id} post={item} />
              ))
            ) : (
              <h4 className="body-2 min-h-[7rem] w-full text-center font-semibold text-zinc-700/50">
                No posts found
              </h4>
            )
          ) : (
            <FeedsSkeleton />
          )}
        </div>
      </div>
    </>
  );
};

export default Feeds;
