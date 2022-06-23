import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/uploadActions";
function PostShare() {
  const loading = useSelector((state) => state.postReducer.uploading);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const desc = useRef();
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  // handle Image Change
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //post data
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    // if there is a imge with post
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(uploadPost(newPost));
    resetShare();
  };

  const resetShare = () => {
    setImage(null);
    desc.current.value = "";
  };

  return (
    <div className="PostShare">
      <img src={user.profilePicture? serverPublic + user.profilePicture : ProfileImage} alt="profile" />
      <div>
        <input
          required
          ref={desc}
          type="text"
          placeholder="What's happening?"
        />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div
            className="option"
            style={{ color: "var(--video)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilPlayCircle />
            Video
          </div>
          <div
            className="option"
            style={{ color: "var(--location)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilLocationPoint />
            Location
          </div>
          <div
            className="option"
            style={{ color: "var(--schedule)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button" onClick={handleSubmit} disabled={loading}>
            {loading ? "Uploading..." : "Share"}
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt={image} />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostShare;
