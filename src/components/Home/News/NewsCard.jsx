import React from "react";
import {
  BsBookmark,
  BsShare,
  BsStarFill,
  BsStarHalf,
  BsStar,
} from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import moment from "moment";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, rating, total_view, title, author, image_url, details } = news;

  return (
    <div className="w-full h-fit border-2 ">
      {/* card header */}
      <div className="h-fit w-full flex justify-between items-center py-3 bg-gray-200 px-4">
        <div className="flex items-center gap-4">
          <img src={author?.img} className="h-14 w-14 rounded-full" alt="" />
          <div>
            <h4 className="font-semibold text-lg">
              {author?.name || "Anonymous"}
            </h4>
            <span>
              {moment(author?.published_date).format("yyyy-MM-D") ||
                "Date not found"}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <BsBookmark></BsBookmark>
          <BsShare></BsShare>
        </div>
      </div>
      {/* card body */}
      <div className="h-fit px-4 w-full ">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <div className="h-auto w-full my-2">
          <img className="object-cover h-full w-full" src={image_url} alt="" />
        </div>
        <p>
          {details?.slice(0, 1000)}...{" "}
          <Link
            to={`/news/${_id}`}
            className="text-orange-500 font-semibold hover:underline "
          >
            Read More
          </Link>
        </p>
      </div>
      {/* card footer */}
      <div className="h-16 w-full flex justify-between items-center border-t-2  px-4">
        <div className="flex items-center gap-3 ">

          <Rating
            placeholderRating={rating?.number}
            emptySymbol={<BsStar />}
            placeholderSymbol={<BsStarFill />}
            fullSymbol={<BsStarHalf />}
          />
          <span>{rating?.number}</span>
        </div>
        <div className="flex items-center gap-2">
          <AiFillEye></AiFillEye> {total_view || "No views"}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
