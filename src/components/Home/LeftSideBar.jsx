import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ActiveLink from "../ActiveLink";

const LeftSideBar = () => {
  const [catagories, setcatagories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/catagories")
      .then((res) => res.json())
      .then((catagories) => setcatagories(catagories))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-full col-span-2">
      <div className="text-lg">All Category</div>
      <div className="">
        <ul>
          {catagories &&
            catagories?.map((category) => (
              <NavLink
                to={`/categories/${category.id}`}
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellow-500 py-3 px-2 block text-center"
                    : "py-3 px-2 block text-center"
                }
                key={category.id}
              >
                {category.name}
              </NavLink>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSideBar;
