import React from "react";
import { BsCheck2All } from "react-icons/bs";

function Message() {
  return (
    <div className="flex flex-col gap-8 px-6 py-4 h-full overflow-y-auto custom-scroll bg-gradient-to-br from-[#1e1e2f] via-[#151523] to-[#0f0f1a] text-white">
      {/* Incoming Message */}
      <div className="flex items-end gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-pink-500 shadow-md hover:scale-110 transition">
          <img
            src="https://i.ibb.co/k3wMWWf/avatar2.png"
            alt="sender"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-xs text-pink-400 mb-1 flex items-center gap-1">
            Obi-Wan <span className="text-white/40">• 12:45 PM</span>
          </div>
          <div className="bg-gradient-to-br from-pink-500/20 to-pink-700/10 px-4 py-2 rounded-2xl max-w-xs shadow-md border border-pink-500/30 backdrop-blur-md">
            You were the Chosen One!
          </div>
          <div className="text-[10px] mt-1 text-white/40">Delivered</div>
        </div>
      </div>

      {/* Outgoing Message */}
      <div className="flex items-end justify-end gap-3 self-end text-right">
        <div>
          <div className="text-xs text-blue-400 mb-1 flex justify-end gap-1">
            You <span className="text-white/40">• 12:46 PM</span>
          </div>
          <div className="bg-gradient-to-br from-blue-600/70 to-purple-700/70 px-4 py-2 rounded-2xl max-w-xs text-white shadow-lg border border-purple-500/40 backdrop-blur-md">
            I hate you!
          </div>
          <div className="text-[10px] mt-1 opacity-70 flex justify-end items-center gap-1 text-white/60">
            Seen <BsCheck2All className="text-blue-400 text-xs" />
          </div>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 shadow-md hover:scale-110 transition">
          <img
            src="https://i.ibb.co/k3wMWWf/avatar2.png"
            alt="you"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Message;

// import React from "react";

// function Message() {
//   return (
//     <>
//       <div className="chat chat-start">
//         <div className="chat-image avatar">
//           <div className="w-10 rounded-full">
//             <img
//               alt="Tailwind CSS chat bubble component"
//               src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
//             />
//           </div>
//         </div>
//         <div className="chat-header">
//           Obi-Wan Kenobi
//           <time className="text-xs opacity-50">12:45</time>
//         </div>
//         <div className="chat-bubble">You were the Chosen One!</div>
//         <div className="chat-footer opacity-50">Delivered</div>
//       </div>
//       <div className="chat chat-end">
//         <div className="chat-image avatar">
//           <div className="w-10 rounded-full">
//             <img
//               alt="Tailwind CSS chat bubble component"
//               src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
//             />
//           </div>
//         </div>
//         <div className="chat-header">
//           Anakin
//           <time className="text-xs opacity-50">12:46</time>
//         </div>
//         <div className="chat-bubble">I hate you!</div>
//         <div className="chat-footer opacity-50">Seen at 12:46</div>
//       </div>
//     </>
//   );
// }

// export default Message;

// import React from "react";
// import { BsCheck2All } from "react-icons/bs";

// const Message = () => {
//   return (
//     <div className="flex flex-col gap-8 px-6 py-4 h-full overflow-y-auto custom-scroll bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white">
//       {/* Incoming Message */}
//       <div className="flex items-end gap-3">
//         <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500 shadow-lg hover:scale-110 transition">
//           <img
//             src="https://i.ibb.co/kB0cwL4/avatar1.png"
//             alt="sender"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div>
//           <div className="text-xs opacity-60 mb-1">Obi-Wan • 12:45 PM</div>
//           <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl max-w-xs shadow-md border border-white/10">
//             You were the Chosen One!
//           </div>
//           <div className="text-[10px] mt-1 opacity-50">Delivered</div>
//         </div>
//       </div>

//       {/* Outgoing Message */}
//       <div className="flex items-end justify-end gap-3 self-end text-right">
//         <div>
//           <div className="text-xs opacity-60 mb-1">You • 12:46 PM</div>
//           <div className="bg-purple-600 text-white px-4 py-2 rounded-2xl max-w-xs shadow-lg border border-purple-400">
//             I hate you!
//           </div>
//           <div className="text-[10px] mt-1 opacity-70 flex justify-end items-center gap-1">
//             Seen <BsCheck2All className="text-blue-400 text-xs" />
//           </div>
//         </div>
//         <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg hover:scale-110 transition">
//           <img
//             src="https://i.ibb.co/k3wMWWf/avatar2.png"
//             alt="you"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Message;
