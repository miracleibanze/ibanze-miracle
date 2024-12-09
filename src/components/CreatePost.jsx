import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Button from "./design/Button";
import { plusSvg, userSvg } from "../assets";
import { postFeeling, postIcons } from "../features/utils/constants";
import Loader from "./skeletons/Loader";
import axiosInstance from "../features/utils/axiosInstance";
import { AppContext } from "../features/utils/AppContext";

const CreatePost = () => {
  const context = useContext(AppContext);
  if (!context) return <Loader />;
  const { user, usePageTitle } = context;
  usePageTitle("Create Post } IMConnect");
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [postPartToEdit, setPostPartToEdit] = useState("myPost");
  const [feeling, setFeeling] = useState("");
  const { text } = useParams();
  const [uploadStatus, setUploadStatus] = useState(false);
  const [images, setImages] = useState([]);
  const [myDescription, setMyDescription] = useState(``);

  const savePost = async () => {
    const myPostObject = {
      user: user._id,
      images: images,
      feeling: `feeling ${feeling}`,
      description: myDescription, // Save raw text
    };
    try {
      const response = await axiosInstance.post("/posts", myPostObject);
      if (response.data.message) {
        navigate("/dash");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const result = reader.result;
        setUploadStatus(true);
        setImagePreview(reader.result);
        images.push(reader.result);
      };
    }
  };

  useEffect(() => {
    if (postPartToEdit === "image") {
      setUploadStatus(false);
      setWaitResult(false);
    }
  }, [location]);

  return (
    <>
      <div className="flex-center-both h-full w-full rounded-md bg-zinc-100">
        <div className="relative h-[32rem] min-h-max w-full max-w-lg border bg-zinc-50 p-3 shadow-2xl shadow-zinc-500">
          <p className="body-1 font-semibold">Create a Post</p>
          <div className="flex-between-hor mt-4 gap-3">
            <img
              src={user?.image ? user.image : userSvg}
              alt="profile"
              className="object-fit h-10 w-10 border border-zinc-200 bg-zinc-200/50 object-top"
            />
            <div className="h-full w-full">
              <p className="font-semibold">
                {user.names}
                {feeling && ` is feeling ${feeling}`}
              </p>
              <p className="body-2">
                {new Date().getHours()}:{new Date().getMinutes()}
                &nbsp;
                {new Date().getDay()}/{new Date().getMonth()}/
                {new Date().getFullYear()}
              </p>
            </div>
          </div>
          {uploadStatus && (
            <div className="flex w-full items-center gap-2 border p-2">
              {images.map((item, index) => (
                <img
                  src={item}
                  alt={"image" + (index + 1)}
                  className={`h-10 w-10 rounded-md object-cover`}
                  key={index}
                />
              ))}
              <label className="flex-center-both h-10 w-10 rounded-md border border-zinc-300 bg-zinc-200">
                <img
                  src={plusSvg}
                  className="h-6 w-6 rounded-full border p-1"
                />
                <input
                  type="file"
                  name="image"
                  accept="image"
                  className="h-0 w-0"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          )}
          <div
            className={`my-3 w-full rounded-md border border-zinc-300 p-3 ${
              !uploadStatus ? "h-[15rem]" : "h-[10rem]"
            } relative`}
          >
            <textarea
              className="h-full w-full resize-none bg-transparent outline-none"
              placeholder="Description.."
              onChange={(event) => setMyDescription(event.target.value)}
              defaultValue={text && text !== "content" ? text : ""}
            ></textarea>
          </div>

          <div className="absolute bottom-2 left-0 right-0 p-4">
            <div className="flex items-center gap-3">
              <label className="body-2 flex-center-hor relative gap-1 font-semibold">
                <img src={postIcons[0].icon} className="h-5 w-5" />{" "}
                {postIcons[0].name}
                <input
                  type="file"
                  name="image"
                  accept="image"
                  className="h-0 w-0"
                  onChange={handleImageChange}
                />
              </label>
              <div className="relative">
                <span
                  className="body-2 flex-center-hor gap-1 font-semibold"
                  onClick={() => {
                    setPostPartToEdit(postIcons[1].name);
                  }}
                >
                  <img src={postIcons[1].icon} className="h-5 w-5" />{" "}
                  {postIcons[1].name}
                </span>
                {postPartToEdit === "feeling" && (
                  <ul className="scroll-design absolute bottom-full left-1/2 z-[100] h-auto w-max overflow-y-scroll border border-zinc-200 bg-zinc-50 p-3">
                    {postFeeling.map((item) => (
                      <li
                        onClick={() => {
                          setFeeling(item);
                          setPostPartToEdit("myPost");
                        }}
                        className="cursor-pointer px-4 py-2 font-semibold hover:bg-zinc-200"
                      >
                        feeling {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="flex w-full justify-end py-3">
              <Button blue onClick={savePost}>
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
