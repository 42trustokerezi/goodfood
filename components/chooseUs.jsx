import React from "react";
import Servicecard from "./servicecard";
import { MdRoomService, MdLocalShipping, MdPayment } from "react-icons/md";
import Image from "next/image";

const ChooseUs = () => {
  return (
    <div className="w-full pt-20 bg-[#f7f0f5] pb-20">
      <div className="absolute -top-[-110rem] -left-[15rem] w-[525px] h-[525px] border border-[#be2b99] rounded-full">
        <Image
          src="/pizza.png"
          width={500}
          height={500}
          className="mt-6"
        />
      </div>

      <div className="w-[35%] mx-auto text-center">
        <h1 className="text-5xl font-extrabold">Why Choose Us?</h1>
        <p className="text-xl pt-5">
          Explore excellence in dining with us-diverse menus, prompt devilery,
          and personalized service await.
        </p>
      </div>
      <div className="w-[80%] mx-auto mt-20 flex gap-5 ">
        <Servicecard
          image=<MdRoomService
            style={{
              width: "3rem",
              height: "3rem",
              marginLeft: "1rem",
              marginTop: "0.75rem",
              color: "#be2b99",
            }}
          />
          title="Fresh Food"
        />
        <Servicecard
          image=<MdLocalShipping
            style={{
              width: "3rem",
              height: "3rem",
              marginLeft: "1rem",
              marginTop: "0.75rem",
              color: "#be2b99",
            }}
          />
          title="Fast Delivery"
        />
        <Servicecard
          image=<MdPayment
            style={{
              width: "3rem",
              height: "3rem",
              marginLeft: "1rem",
              marginTop: "0.75rem",
              color: "#be2b99",
            }}
          />
          title="Pay with ease"
        />
      </div>
    </div>
  );
};

export default ChooseUs;
