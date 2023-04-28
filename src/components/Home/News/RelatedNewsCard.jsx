import moment from "moment/moment";
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const RelatedNewsCard = ({ news }) => {
  const { _id, title, author, image_url } = news;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/news/${_id}`)}
      className="w-full h-fit cursor-pointer"
    >
      <div className="h-auto w-full">
        <img className="object-cover h-full w-full" src={image_url} alt="" />
      </div>
      <h1 className="text-base font-semibold">{title}</h1>

      <h2 className="inline-flex items-center gap-3 mt-6">
        <AiOutlineCalendar />
        {moment(author?.published_date).format("yyyy-MM-D") ||
          "Date not found"}
      </h2>
    </div>
  );
};

export default RelatedNewsCard;
