import "./navbar.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxEnvelopeClosed } from "react-icons/rx";
import { useEffect, useState } from "react";

const Navbar = ({ socket }) => {
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    // take the event from the server
    socket.on("getNotification", (data) => {
      setNotification((prev) => [...prev, data]);
      // console.log([data]);
    });
  }, [socket]);

  console.log(notification);

  const displayNotification = ({senderName, type}) => {
    let action;
    if (type === 1) {
      action = "liked";
    } else if (type === 2) {
      action = "commented";
    } else {
      action = "shared";
    }

    return (
      <span className="notification">{`${senderName} ${action} your post`}</span>
    );
  };

  return (
    <div className="navbar">
      <span className="logo">Appu jare</span>
      <div className="icons">
        <div className="icon">
          {/* <img src="" alt="" className="iconImg" /> */}
          <IoMdNotificationsOutline className="iconImg" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          {/* <img src="" alt="" className="iconImg" /> */}
          <RxEnvelopeClosed className="iconImg" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <IoMdNotificationsOutline className="iconImg" />
          <div className="counter">2</div>
        </div>
      </div>
      <div className="notifications">
        {notification.map((n) => displayNotification(n))}
      </div>
    </div>
  );
};

export default Navbar;
