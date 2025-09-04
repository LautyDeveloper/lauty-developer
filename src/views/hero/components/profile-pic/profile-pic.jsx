import React from "react";
import "./profile-pic.css";
import profilePic from "./media/profile-pic.jpeg";

export default function ProfilePic() {
  return (
    <div className="profile-pic-container">
      <img src={profilePic} alt="Profile" className="profile-pic" />
    </div>
  );
}
