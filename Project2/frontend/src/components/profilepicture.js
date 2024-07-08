import React, { useEffect, useState } from "react";
import axios from "axios";
const ProfilePicture = () => {
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  useEffect(() => {
    axios
      .get("/api/profile-picture")
      .then((response) => {
        setProfilePictureUrl(response.data.url);
      })
      .catch((error) => {
        console.error("Error fetching profile picture:", error);
      });
  }, []);
  return (
    <div className="position-fixed top-0 end-0 p-2">
      <img
        id="profile-picture"
        className="img-fluid rounded-circle"
        src={profilePictureUrl}
        alt="ProfilePicture"
      />
    </div>
  );
};
export default ProfilePicture;
