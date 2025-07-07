import React from "react";
import User from "./User";
import Message from "./Message";
import { IoIosSend } from "react-icons/io";

function MessageContainer() {
  return (
    <div className="h-screen w-full flex flex-col bg-gradient-to-tr from-[#0d0c1d] via-[#1e1b32] to-[#11101c] text-white">
      {/* Header */}
      <div className="p-4 border-b border-white/10 bg-[#1e1b32] shadow-lg">
        <User />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-6 custom-scroll mix-blend-lighten bg-gradient-to-b from-[#1e1b32] via-[#15131f] to-[#0f0e17]">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>

      {/* Input Box */}
      <div className="px-5 py-3 bg-[#1e1b32] border-t border-white/10">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Type your message..."
            className="input input-bordered w-full bg-white/10 text-white placeholder:text-white/40 border-white/10 focus:outline-none focus:ring focus:ring-violet-600"
          />
          <button className="btn btn-primary min-w-[3.5rem] h-[2.7rem] text-xl px-4 shadow-md hover:scale-105 hover:shadow-violet-600/30 transition duration-200">
            <IoIosSend />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessageContainer;

// import React from "react";
// import User from "./User";
// import Message from "./Message";
// import { IoIosSend } from "react-icons/io";

// function MessageContainer() {
//   return (
//     <div className="h-screen w-full flex flex-col">
//       {/* Header */}
//       <div className="p-3 border-b border-b-white/10">
//         <User />
//       </div>

//       {/* Message Area */}
//       <div className="flex-1 overflow-y-auto p-3 custom-scroll">
//         <Message />
//       </div>

//       {/* Input Box */}
//       <div className="w-full px-3 py-2 bg-base-100 border-t border-white/10">
//         <div className="flex items-center gap-2">
//           <input
//             type="text"
//             placeholder="Type your message..."
//             className="input input-bordered input-primary w-full"
//           />
//           <button className="btn btn-primary min-w-[3.5rem] h-[2.4rem] text-xl px-4 shadow-lg hover:scale-105 transition-transform duration-200">
//             <IoIosSend />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MessageContainer;
