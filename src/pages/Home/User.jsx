import React from "react";

function User() {
  return (
    <div className="flex items-center gap-4 p-2 rounded-xl hover:bg-white/5 cursor-pointer transition group">
      <div className="relative">
        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-500 group-hover:ring-pink-500 transition">
          <img
            src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
            alt="user"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-[#1e293b] animate-ping"></span>
        <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-[#1e293b]"></span>
      </div>

      <div className="flex-1 min-w-0">
        <h2 className="text-sm font-semibold text-white truncate group-hover:text-purple-400 transition">
          Obi-Wan Kenobi
        </h2>
        <p className="text-xs text-white/50 group-hover:text-white/70 truncate">
          obiwan_kenobi
        </p>
      </div>
    </div>
  );
}

export default User;


// import React from 'react'

// function User() {
//   return (
//     <div className="flex gap-5 items-center">
//       <div className="avatar online">
//         <div className="w-12 rounded-full">
//           <img
//             src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"/>
//         </div>
//       </div>
//       <div>
//         <h2 className ="line-clamp-1" >Full name</h2>
//         <p className='text-xs'>Username</p>
//       </div>
//     </div>
//   );
// }

// export default User
