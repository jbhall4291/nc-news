import React from "react";
import "./UserCard.css";

const UserCard = ({ user, loggedInUser, setLoggedInUser }) => {
  return (
    <li
      className={`UserCard__li ${
        loggedInUser === user.username ? "UserCard__li--logged-in-user" : ""
      }`}
    >
      <p>{user.name}</p>
      <img src={user.avatar_url} alt={user.username}></img>
      <p>username:</p>
      <p>{user.username}</p>
      <button id="button"
        className="UserCard__button"
        onClick={() => setLoggedInUser(user.username)}
      >
        <b>{loggedInUser === user.username ? `SIGNED IN` : `SIGN IN`}</b>
      </button>
    </li>
  );
};

export default UserCard;
