
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const Message = ({ messageDetails }) => {
  const messageRef = useRef(null);
  const { userProfile, selectedUser } = useSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  
  const formattedTime = moment(messageDetails?.createdAt).format("hh:mm A");

  return (
    <div
      ref={messageRef}
      className={`chat ${
        userProfile?._id === messageDetails?.senderId
          ? "chat-end"
          : "chat-start"
      }`}
    >
      {/* Avatar */}
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="user avatar"
            src={
              userProfile?._id === messageDetails?.senderId
                ? userProfile?.avatar
                : selectedUser?.avatar
            }
          />
        </div>
      </div>

      {/* Time */}
      <div className="chat-header">
        <time className="text-xs opacity-50">{formattedTime}</time>
      </div>

      {/* Message bubble */}
      <div className="chat-bubble">{messageDetails?.message}</div>
    </div>
  );
};

export default Message;
