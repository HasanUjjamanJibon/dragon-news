import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./Home/News/NewsCard";
import { useEffect } from "react";
import { useState } from "react";

const CatagoriesNews = () => {
  
  const catergoryNews = useLoaderData();
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/catagories/0")
      .then((res) => res.json())
      .then((data) => setAllNews(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="w-full col-span-8">
      <h1>categories News : {catergoryNews?.length || allNews?.length}</h1>
      {/* card */}
      <div className="space-y-6">
        {catergoryNews?.length > 0
          ? catergoryNews?.map((news) => (
              <NewsCard key={news._id} news={news} />
            ))
          : allNews?.map((news) => <NewsCard key={news._id} news={news} />)}
      </div>
    </div>
  );
};

export default CatagoriesNews;
