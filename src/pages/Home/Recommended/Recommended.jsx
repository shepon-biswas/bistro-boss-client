import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Recommended = () => {
  return (
    <>
      <SectionTitle
        subHeading={"Should Try"}
        heading={"check recommends"}
      ></SectionTitle>
      {/* Item Card */}
      <div className="my-10 md: grid grid-cols-3 gap-5">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
            <img
            className="w-full h-56 object-cover "
              src="https://i.ibb.co/KXGdWXb/featured.jpg"
              alt="Food Item"
            />
            </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title font-bold">Dessert</h2>
            <p className="w-5/6 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quo aliquam aut iusto harum nemo.</p>
            <div className="card-actions ">
              <button className="btn btn-primary my-3">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
            <img
            className="w-full h-56 object-cover "
              src="https://i.ibb.co/D9phNnZ/banner.jpg"
              alt="Food Item"
            />
            </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title font-bold">Drinks</h2>
            <p className="w-5/6 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quo aliquam aut iusto harum nemo.</p>
            <div className="card-actions ">
              <button className="btn btn-primary my-3">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
            <img
            className="w-full h-56 object-cover "
              src="https://i.ibb.co/wLCxffj/chef-service.jpg"
              alt="Food Item"
            />
            </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title font-bold">Saalad</h2>
            <p className="w-5/6 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quo aliquam aut iusto harum nemo.</p>
            <div className="card-actions ">
              <button className="btn btn-primary my-3">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommended;
