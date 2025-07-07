import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserProfileThunk } from "./store/slice/user/user.thunk";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfileThunk());
  }, [dispatch]);

  return (
    <>
      <Toaster position="top-center" />
      <Outlet /> {/* 👈 yahi se login/signup/home render hoga */}
    </>
  );
};

export default App;
