import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useSelector } from "react-redux";
import { uploadImage } from "../../actions/uploadActions";

function PostShare() {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const desc = useRef();
  const {user} = useSelector((state)=>state.authReducer.authData)
  const onImageChange = (e) => {
    if(e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage (img)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost =  {
      userId: user._id,
      desc: desc.current.value
    }
    if(image) {
      const data = new FormData()
      const filename = Date.now() + image.name
      data.append("name", filename)
      data.append("file", image)
      newPost.image = filename
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="profile" />
      <div>
        <input required ref= {desc} type="text" placeholder="What's happening?" />
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)"}} onClick={() => imageRef.current.click()}>
            <UilScenery /> 
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)"}} onClick={() => imageRef.current.click()}>
            <UilPlayCircle /> 
            Video
          </div>
          <div className="option" style={{ color: "var(--location)"}} onClick={() => imageRef.current.click()}>
            <UilLocationPoint /> 
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)"}} onClick={() => imageRef.current.click()}>
            <UilSchedule /> 
            Schedule
          </div>
          <button className="button ps-button"
          onClick={handleSubmit}>Share</button>
          <div style={{ display: "none"}}>
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
  )
}

export default PostShare