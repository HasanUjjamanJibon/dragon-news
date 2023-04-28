import React from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Spinner";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log("private Route", location);
  const { user, loading, setLoading } = useContext(AuthContext);
  if (loading) {
    return <Spinner></Spinner>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
