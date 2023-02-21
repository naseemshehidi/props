import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1 style={{ color: "blue" }}>{fullName}</h1>
      <h2>{profession}</h2>
      <p>{bio}</p>
      <img src={children} alt="profile" />
      <button onClick={() => handleName(fullName)}>Show Name</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "Nassim Chehidi",
  bio: "",
  profession: "Software engineer",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.node.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;