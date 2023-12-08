/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ filteredItems }) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12 shadow-sm">
      {filteredItems.map(({ id, title, category, price, image }) => (
        <div key={id}>
          <Link to={`/shop/${id}`}>
            <img
              src={image}
              alt=""
              className="mx-auto w-full hover:scale-105 transition-all duration-300"
            />
          </Link>
          <div className="mt-4 px-4">
            <h4 className="text-base font-semibold mb-2">{title}</h4>
            <div className="flex justify-between">
              <p className="text-black/50">{category}</p>
              <p className="font-bold">${price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
