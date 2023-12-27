import React from "react";
import Card from "./foodcard";


const Explore = () => {
  return (
    <div className="w-[80%] mx-auto pb-36">
      <div className="w-[100%] mx-auto ">
        <h1 className=" text-2xl md:text-5xl font-extrabold text-center">
          Explore our Best Foods
        </h1>
        <p className="md:text-xl pt-5 w-[80%] mx-auto text-center">
          Embark on a culinary journey and explore the excellence of our best
          foods.
        </p>
      </div>
      <div className="flex w-full gap-6 mt-16">
            <Card image= "/burger.png"/>
            {/* <Card image= "/salad.png" /> */}
            {/* <Card image="/spaghetti.jpg" /> */}
        </div>
        <button className="px-10 py-3 text-xl font-semibold text-center mx-auto">Load More</button>
    </div>
  );
};

export default Explore;
