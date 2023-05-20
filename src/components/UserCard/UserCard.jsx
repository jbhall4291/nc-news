import React from "react";
import "./UserCard.css";

const UserCard = ({ user, loggedInUser, setLoggedInUser }) => {
  return (
    <div className="UserCard__div">
      <p>{user.username}</p>
      <img src={user.avatar_url} alt={user.username}></img>
      <p>{user.name}</p>
      <button onClick={() => setLoggedInUser(user.username)}>
        click to log in
      </button>
    </div>
  );
};

export default UserCard;
