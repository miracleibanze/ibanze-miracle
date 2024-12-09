import { memo, useContext, useEffect, useState } from "react";
import Loader from "./skeletons/Loader";
import { userSvg } from "../assets";
import axiosInstance from "../features/utils/axiosInstance";
import { AppContext } from "../features/utils/AppContext";

const Sidebar2 = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const context = useContext(AppContext);

  if (!context) return <Loader />;

  const { user } = context;

  useEffect(() => {
    const handlePeople = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axiosInstance.get(`/users/friends/${user?._id}`);
        setPeople(response.data);
      } catch (error) {
        console.error("Error fetching friends:", error);
        setError("Failed to fetch friends. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (user?._id) handlePeople();
  }, [user?._id]);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex-between-vert flex w-full flex-col rounded-md bg-zinc-100 p-2 pt-16">
      <div className="mb-4 h-full w-full">
        <p className="body-2 mb-2 h-5 font-bold">Friends</p>
        <div className="h- relative w-full">
          {!loading ? (
            people.length > 0 ? (
              people.map((person, index) => (
                <a
                  href={`/dash/people/person/${person?.username || "username"}`}
                  className="flex items-center gap-1"
                  key={person?._id || index}
                >
                  <img
                    src={person.image || userSvg}
                    className="h-8 w-8 rounded-md border object-cover object-top p-1"
                  />
                  <p className="caption cursor-pointer leading-none hover:underline">
                    {person?.names || "unknown"}
                  </p>
                </a>
              ))
            ) : (
              <div className="flex-center-both min-h-32 w-full rounded-md bg-zinc-200 text-center font-semibold text-zinc-500/50">
                No connected friends yet
              </div>
            )
          ) : (
            <div className="skeleton-loader rounded-md bg-zinc-100 p-3">
              <div className="skeleton-loader mb-3 h-8 w-full rounded-md bg-zinc-200" />
              <div className="skeleton-loader mb-3 h-8 w-full rounded-md bg-zinc-200" />
              <div className="skeleton-loader mb-3 h-8 w-full rounded-md bg-zinc-200" />
              <div className="skeleton-loader mb-3 h-8 w-full rounded-md bg-zinc-200" />
              <div className="skeleton-loader mb-3 h-8 w-full rounded-md bg-zinc-200" />
            </div>
          )}
        </div>
      </div>

      <a
        href="https://ibanze.vercel.app/"
        className="group cursor-pointer text-end"
      >
        <span className="group-hover:text-blue-800">IBANZE Miracle</span>
        <br />
        <span>&copy;{new Date().getFullYear()},&nbsp;All rights reserved.</span>
        <br />
      </a>
    </div>
  );
};

export default memo(Sidebar2);
