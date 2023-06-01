import React from "react";

const FoodCard = ({item}) => {
    const {name, image, price, category, recipe} = item;
  return (
    <>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full h-56 object-cover "
              src={image}
              alt="Food Item"
            />
          </figure>
          <span className="bg-slate-800 text-white absolute right-3 top-3 px-3 py-1 rounded">$ {price}</span>
          <div className="card-body justify-center items-center">
            <h2 className="card-title font-bold">{name}</h2>
            <p className="w-5/6 text-center">
              {recipe}
            </p>
            <div className="card-actions ">
              <button className="btn btn-outline bg-slate-200 border-0 border-b-4 border-orange-500 my-3">Add To Cart</button>
            </div>
          </div>
        </div>
    </>
  );
};

export default FoodCard;
