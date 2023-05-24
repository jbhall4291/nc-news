import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  //   if (modal) {
  //     document.body.classList.add("active-modal");
  //   } else {
  //     document.body.classList.remove("active-modal");
  //   }

  return (
    <>
      {/* <button onClick={toggleModal} className="btn-modal">
        Open
      </button> */}

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Welcome to NewsBuzz!</h2>
            <p>
              NewsBuzz is a social-news aggregation app in the style of Reddit,
              with the following features:
            </p>
            <ul>
              <li>
                🔍 View all articles, or view articles by topic
              </li>
              <li>📬 Post a new article & delete an article</li>
              <li>❔ Filter, sort and/or order articles</li>
              <li>💬 View, post & delete article comments</li>
              <li>👍 Upvote an article</li>
            </ul>
            <p>
              You are currently logged in as user Peter Messy, with the username
              cooljmessy. Any posted articles/comments will be made under this
              username, and you will only be able to delete articles/comments
              authored by you. You can switch to another user by clicking the
              profile icon on the navbar.
            </p>
            <p>
              Have fun, and check out my other projects at <a href="https://johnny-hall.dev">johnny-hall.dev</a>
            </p>
            <button className="close-modal" onClick={toggleModal}>
            <b>CLOSE</b>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
