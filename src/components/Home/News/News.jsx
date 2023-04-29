import React from "react";
import RightNav from "../RightNav";
import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect } from "react";
import { useState } from "react";
import RelatedNewsCard from "./RelatedNewsCard";

const News = () => {
  const newsDetails = useLoaderData();
  const [relatedNews, setRelatedNews] = useState([]);

  useEffect(() => {
    fetch("https://my-news-server-hasanujjamanjibon.vercel.app/news")
      .then((res) => res.json())
      .then((data) => {
        const categoryMatched = data?.filter(
          (news) => news.category_id === newsDetails.category_id
        );
        setRelatedNews(categoryMatched);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6 mb-14">
      <div className="col-span-10">
        <span className="font-bold text-3xl">Dragon News</span>
        <div className="p-4 border-2 border-gray-100 h-fit w-full my-4">
          <div className="h-auto w-full">
            <img
              className="object-cover h-full w-full"
              src={newsDetails?.image_url}
              alt=""
            />
          </div>
          <h1 className="text-3xl font-semibold my-4">{newsDetails?.title}</h1>
          <p>{newsDetails?.details}</p>
          <Link
            to={`/categories/${newsDetails?.category_id}`}
            className="bg-rose-700  w-fit flex items-center gap-4 mt-6 text-white font-semibold px-8 py-2"
          >
            <AiOutlineArrowLeft />
            All News Category
          </Link>
        </div>
        {/* other News */}
        <div>
          <span className="font-bold text-xl">Editors Insights</span>
          <div className="grid grid-cols-4 gap-6">
            {relatedNews &&
              relatedNews?.map((news) => (
                <RelatedNewsCard key={news._id} news={news}></RelatedNewsCard>
              ))}
            {/* 1st card */}
          </div>
        </div>
      </div>
      <RightNav></RightNav>
    </div>
  );
};

export default News;
