import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const RegsiterForm = () => {
  const { createUser } = useContext(AuthContext);
  //  form submit handler
  const formOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, url, email, password);
    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        updateProfile(newUser, {
          displayName: name,
          photoURL: url,
        })
          .then((result) => {
            alert("successfully user created");
          })
          .catch((error) => {
            console.error(error.code);
            console.error(error.message);
          });
        // console.log(newUser);
      })
      .catch((error) => {
        console.error(error.code);
        console.error(error.message);
      });
  };

  return (
    <div className="flex min-h-[calc(100vh-7rem)] justify-center items-center w-full ">
      <div className="w-[36rem] space-y-4 bg-white px-12 py-8 rounded-md">
        <h2 className="text-center border-b-2 py-10 font-bold  text-3xl">
          Register Your Account
        </h2>
        <form action="#" className="w-full space-y-3" onSubmit={formOnSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="nameInput">Name </label>
            <input
              type="text"
              name="name"
              id="nameInput"
              className="bg-gray-100 py-3 px-2 rounded-md focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="textInput">Photo URL </label>
            <input
              type="url"
              name="url"
              id="urlInput"
              className="bg-gray-100 py-3 px-2 rounded-md focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="textInput">Email </label>
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

          <button className="btn btn-primary w-full">Register</button>
        </form>
        <div>
          <span>Already have an account?</span>
          <Link to="/login" className="btn btn-link capitalize">
            Click here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegsiterForm;
