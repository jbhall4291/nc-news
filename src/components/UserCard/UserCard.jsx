import React from "react";
import "./UserCard.css";

const UserCard = ({ user, loggedInUser, setLoggedInUser }) => {
  return (
    <li className="UserCard__li">
      <p>{user.username}</p>
      <img src={user.avatar_url} alt={user.username}></img>
      <p>{user.name}</p>
      <button
        className="UserCard__button"
        onClick={() => setLoggedInUser(user.username)}
      >
        {loggedInUser === user.username
          ? `signed in as ${user.username}`
          : `sign in as ${user.username}`}
      </button>
    </li>
  );
};

export default UserCard;
