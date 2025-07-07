import React from "react";
import User from "./User";
import { IoSearch } from "react-icons/io5";

function UserSidebar() {
  return (
    <div className="max-w-[20rem] w-full h-screen flex flex-col bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white shadow-lg border-r border-white/10">
      {/* Logo */}
      <h1 className="text-center mt-6 mb-4 text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg">
        Chatgram
      </h1>

      {/* Search */}
      <div className="px-4 pb-4">
        <label className="flex items-center gap-3 bg-white/10 rounded-full px-4 py-2 backdrop-blur-md focus-within:ring-2 ring-primary transition">
          <IoSearch className="text-lg text-white/70" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none w-full text-sm placeholder-white/50 text-white"
          />
        </label>
      </div>

      {/* User List */}
      <div className="flex-1 overflow-y-auto px-4 space-y-3 custom-scroll">
        <User />
        <User />
        <User />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t border-white/10 bg-white/5 backdrop-blur-md">
        <div className="avatar">
          <div className="w-10 rounded-full border-2 border-purple-400 shadow-lg hover:scale-105 transition-transform duration-200">
            <img
              src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
              alt="User Avatar"
              className="object-cover"
            />
          </div>
        </div>
        <button className="btn btn-sm bg-gradient-to-r from-purple-600 to-pink-500 text-white border-0 shadow-md hover:scale-105 transition-transform duration-200">
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserSidebar;

//
//
// import React from "react";
// import User from "./User";
// import { IoSearch } from "react-icons/io5";

// function UserSidebar() {
//   return (
//     <div className="max-w-[20rem] w-full h-screen flex flex-col border-r border-white/10 bg-base-100">
//       <h1 className="text-center mx-3 mt-4 mb-2 text-2xl font-bold text-primary">
//         Chatgram
//       </h1>

//       <div className="px-4 pb-4">
//         <label className="input input-bordered flex items-center gap-2 w-full">
//           <input type="text" className="grow" placeholder="Search" />
//           <IoSearch />
//         </label>
//       </div>

//       <div className="h-full overflow-y-auto px-4 space-y-2">
//         <User />
//         <User />
//         <User />
//       </div>

//       <div className="flex items-center justify-between p-4 border-t border-white/10">
//         <div className="avatar">
//           <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//             <img
//               src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
//               alt="User Avatar"
//             />
//           </div>
//         </div>
//         <button className="btn btn-primary btn-sm px-4">Logout</button>
//       </div>
//     </div>
//   );
// }

// export default UserSidebar;

// import React from "react";
// import User from "./User";
// import { IoSearch } from "react-icons/io5";

// function UserSidebar() {
//   return (
//     <div className="max-w-[22rem] w-full h-screen flex flex-col border-r border-white/10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-xl shadow-2xl">
//       <h1 className="text-center mx-4 mt-6 mb-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent tracking-wide">
//         Chatgram
//       </h1>

//       <div className="px-4 pb-5">
//         <label className="input input-bordered flex items-center gap-2 w-full bg-base-200 backdrop-blur-md shadow-md">
//           <IoSearch className="text-xl text-gray-400" />
//           <input
//             type="text"
//             className="grow bg-transparent outline-none text-white placeholder:text-gray-400"
//             placeholder="Search users..."
//           />
//         </label>
//       </div>

//       <div className="flex-1 overflow-y-auto px-4 space-y-3 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent pr-2">
//         <User />
//         <User />
//         <User />
//         <User />
//       </div>

//       <div className="flex items-center justify-between p-4 border-t border-white/10 bg-white/5 backdrop-blur-lg">
//         <div className="flex items-center gap-3">
//           <div className="avatar">
//             <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//               <img
//                 src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
//                 alt="User Avatar"
//               />
//             </div>
//           </div>
//           <div>
//             <p className="text-white font-semibold text-sm">Your Name</p>
//             <p className="text-xs text-gray-400">Online</p>
//           </div>
//         </div>
//         <button className="btn btn-sm btn-error hover:scale-105 transition duration-300">
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

// export default UserSidebar;

// import React from "react";
// import User from "./User";
// import { IoSearch } from "react-icons/io5";

// function UserSidebar() {
//   return (
//     <div className="max-w-[20rem] w-full h-screen flex flex-col border-r border-white/10 bg-base-100 custom-scroll overflow-y-auto">
//       {/* Logo */}
//       <h1 className="text-center mx-3 mt-4 mb-3 text-3xl font-bold text-primary tracking-wide drop-shadow-[0_0_6px_#9333ea]">
//         Chatgram
//       </h1>

//       {/* Search Box */}
//       <div className="px-4 pb-4">
//         <label className="input input-bordered flex items-center gap-2 w-full shadow-md">
//           <input
//             type="text"
//             className="grow bg-transparent"
//             placeholder="Search users..."
//           />
//           <IoSearch className="text-xl text-primary" />
//         </label>
//       </div>

//       {/* User List */}
//       <div className="h-full px-4 space-y-3 pb-4">
//         <User />
//         <User />
//         <User />
//       </div>

//       {/* Footer */}
//       <div className="flex items-center justify-between p-4 border-t border-white/10 mt-auto">
//         <div className="avatar">
//           <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//             <img src="https://i.pravatar.cc/150?img=32" alt="User Avatar" />
//           </div>
//         </div>
//         <p className="text-white font-medium hover:text-primary hover:drop-shadow-[0_0_6px_#9333ea] cursor-pointer transition">
//           Vishal Mishra
//         </p>
//         <button className="btn btn-sm btn-primary px-4 shadow-lg hover:shadow-purple-500/50 transition">
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

// export default UserSidebar;

// import React from "react";
// import User from "./User";
// import { IoSearch } from "react-icons/io5";

// function UserSidebar() {
//   return (
//     <div className="max-w-[22rem] w-full h-screen flex flex-col bg-[#0f0f0f] text-white custom-scroll overflow-y-auto shadow-xl border-r border-purple-800/30 backdrop-blur-md">
//       {/* Logo */}
//       <h1 className="text-center mt-6 mb-4 text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
//         Chatgram
//       </h1>

//       {/* Search Box */}
//       <div className="px-6 mb-5">
//         <label className="input input-bordered flex items-center gap-3 bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 shadow-md">
//           <input
//             type="text"
//             className="bg-transparent outline-none grow placeholder:text-gray-300"
//             placeholder="Search users..."
//           />
//           <IoSearch className="text-xl text-purple-400" />
//         </label>
//       </div>

//       {/* User List */}
//       <div className="h-full px-4 space-y-3">
//         <User />
//         <User />
//         <User />
//       </div>

//       {/* Footer */}
//       <div className="flex items-center justify-between p-4 mt-auto bg-white/5 border-t border-purple-700/20">
//         <div className="avatar">
//           <div className="w-11 rounded-full ring ring-pink-500 ring-offset-base-100 ring-offset-2">
//             <img src="https://i.pravatar.cc/150?img=68" alt="User Avatar" />
//           </div>
//         </div>
//         <p className="font-semibold text-white hover:text-pink-400 hover:drop-shadow-[0_0_6px_#ec4899] transition cursor-pointer">
//           Vishal
//         </p>
//         <button className="btn btn-sm bg-gradient-to-r from-pink-500 to-purple-600 text-white border-none hover:scale-105 hover:shadow-[0_0_15px_#c084fc] transition">
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

// export default UserSidebar;
