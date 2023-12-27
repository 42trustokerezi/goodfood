import Image from "next/image";
import React from "react";
import { MdStar } from "react-icons/md";

const FoodCard = ({ image }) => {
  return (
    <div className="bg-[#F6F5F6] w-[450px] md:w-full rounded-[4rem] h-fit relative">
      <div className=" bg-[#2c5ebe] text-center rounded-full mt-10 leading-6 text-white absolute left-[85%] w-6 h-6">
        i
      </div>
      <div className="w-full bg-white h-[10rem] flex justify-center rounded-t-[4rem]">
        <Image
          className="py-5"
          src={image}
          width={200}
          height={200}
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="p-7">
        <div className="flex justify-between mt-3">
          <h2 className="text-xl md:text-3xl font-semibold">Burger</h2>
          <h2 className="text-xl md:text-3xl font-semibold">$150</h2>
        </div>
        <p className="md:text-xl mt-2">American Burgers</p>
        <div className=" flex mt-5 text-xl">
          <MdStar style={{ color: "#fed602" }} />
          5.0
        </div>
        <button className="text-sm md:text-xl font-semibold text-[#2c5ebe] w-full py-3 mt-3 rounded-full border-2 border-[#2c5ebe]">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
