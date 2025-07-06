import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { loginuserthunk } from "./store/slice/user/user.thunk";

function App() {
  
  return (
    <>
      <h1 className="bg-black text-white">app</h1>
    </>
  );
}

export default App;
