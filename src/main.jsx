import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CatagoriesNews from "./components/CatagoriesNews.jsx";
import About from "./components/About.jsx";
import Career from "./components/Career.jsx";
import NewsLayout from "./components/Home/News/NewsLayout.jsx";
import News from "./components/Home/News/News.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import Login from "./components/Login/Login.jsx";
import Registration from "./components/Registration/Registration.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <CatagoriesNews />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "career",
        element: <Career />,
      },
      {
        path: "/categories/:id",
        element: <CatagoriesNews></CatagoriesNews>,
        loader: ({ params }) =>
          fetch(
            `https://my-news-server-hasanujjamanjibon.vercel.app/catagories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "news",
    element: (
      <PrivateRoute>
        <NewsLayout></NewsLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "news",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
      },
      {
        path: ":id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(
            `https://my-news-server-hasanujjamanjibon.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "registration",
    element: <Registration />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
