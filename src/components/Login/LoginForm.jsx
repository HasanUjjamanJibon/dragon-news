import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Login Route", location);
  const from = location?.state?.from?.pathname || "/";
  const { loginUser } = useContext(AuthContext);

  const formOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        alert("successfully login");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.code);
        console.error(error.message);
      });
  };
  return (
    <div className="flex min-h-[calc(100vh-7rem)] justify-center items-center w-full ">
      <div className="w-[36rem] space-y-7 bg-white px-12 py-8">
        <h2 className="text-center border-b-2 py-10 font-bold  text-3xl">
          Login Your Account
        </h2>
        <form action="#" className="w-full space-y-3" onSubmit={formOnSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="emailInput">Email </label>
            <input
              type="email"
              name="email"
              id="emailInput"
              className="bg-gray-100 py-3 px-2 rounded-md focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="passwordInput">Password </label>
            <input
              type="password"
              name="password"
              id="passwordInput"
              className="bg-gray-100 py-3 px-2 rounded-md focus:outline-0"
            />
          </div>

          <label className="flex items-center gap-2" htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              className="checkbox checkbox-xs"
            />
            Show Passowrd
          </label>

          <button className="btn btn-primary w-full">Login</button>
        </form>
        <div>
          <span>Not a member?</span>
          <Link to="/registration" className="btn btn-link capitalize">
            Click here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
