import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageThunk } from "../../store/slice/message/message.thunk";

const SendMessage = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!message.trim()) return;
    dispatch(
      sendMessageThunk({
        recieverId: selectedUser?._id,
        message,
      })
    );
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="w-full px-4 py-3 bg-[#101218] border-t border-white/10">
      <div className="flex items-center gap-3 rounded-full bg-[#1a1c23] border border-[#2a2d3a] px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-[#7480FF] transition-all">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 bg-transparent text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSendMessage}
          className="p-2 rounded-full bg-[#7480FF] hover:bg-[#8a96ff] transition-all duration-200 shadow-md active:scale-95"
        >
          <IoIosSend className="text-white text-lg" />
        </button>
      </div>
    </div>
  );
};

export default SendMessage;


