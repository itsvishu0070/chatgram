import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Signup = () => {
  const [signupdata, setsignupdata] = useState({
    fullname: "",
    username: "",
    password: "",
    ConfirmPassword:"",
  });
  const handleInputChange = (e) => {
    setsignupdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(signupdata)

  const handleSignup = async () => {
    // const response = await dispatch(SignupUserThunk(SignupData));
    // if (response?.payload?.success) {
    //   navigate("/");
    // }
  };

  return (
    <div className="flex justify-center items-center p-6 min-h-screen">
      <div className="max-w-[40rem] w-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold">Please Signup..!!</h2>

        <label className="input input-bordered flex items-center gap-2">
          <FaUser />
          <input
            type="text"
            name="fullname"
            className="grow"
            placeholder="Full Name"
            onChange={handleInputChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <FaUser />
          <input
            type="text"
            name="username"
            className="grow"
            placeholder="Username"
            onChange={handleInputChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <IoKeySharp />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="grow"
            onChange={handleInputChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <IoKeySharp />
          <input
            type="password"
            name="ConfirmPassword"
            placeholder="Confirm Password"
            className="grow"
            onChange={handleInputChange}
          />
        </label>

        <button onClick={handleSignup} className="btn btn-primary">
          Signup
        </button>
        <p>
          already have an account?
          <Link to="/login" className="text-blue-400 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
