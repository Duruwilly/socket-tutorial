import "./card.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { useState } from "react";

const Card = ({ post, socket, user }) => {
  const [liked, setLiked] = useState(false);
  // why type was use here is because, when we click on type button, like will be type 1

  // when we click on the button, we send an event and out socket send the event to the user
  const handleNotification = (type) => {
    setLiked(true);
    // this send an event to the server when the user carry out an notification functionality
    socket.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type
    });
  };

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interaction">
        {liked ? (
          <AiFillHeart className="cardIcon" />
        ) : (
          <AiOutlineHeart
            className="cardIcon"
            onClick={() => handleNotification(1)}
          />
        )}
        {/* <img src="" alt="" className="cardIcon" /> */}
        <FaRegComment
          className="cardIcon"
          onClick={() => handleNotification(2)}
        />
        <IoMdShareAlt
          className="cardIcon"
          onClick={() => handleNotification(3)}
        />
      </div>
    </div>
  );
};

export default Card;
