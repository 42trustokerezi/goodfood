import ChooseUs from "@/components/chooseUs";
import Explore from "@/components/explore";
import Navbar from "@/components/navbar";
import Search from "@/components/search";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="">
        <div className="w-[100%] h-[450px] rounded-b-3xl md:w-[65%] md:h-[800px] bg-[#be2b99] md:ml-[5%] md:absolute">
          <div className=" px-5 py-10  md:ml-36 md:mt-64 text-white">
            <h1 className="text-4xl font-extrabold ml:text-7xl md:w-[45rem]">
              Best Food Served Just for You.
            </h1>
            <p className="mt-7 md:text-xl">
              Explore a world of flavors and convenience.
            </p>
            <p className="md:text-xl">Order your favourite dishes online.</p>
            <button className="mt-10 px-5 py-2 md:px-10 md:py-4 rounded-full md:text-xl text-white bg-[#2c5ebe]">
              Order Now
            </button>
          </div>
        </div>
        <Navbar />
        <Image
          src="/salad.png"
          width={600}
          height={600}
          className="absolute top-[22rem] md:top-[20rem] md:left-[40rem]"
        />
      </div>
      <Search />
      <Explore />
      <ChooseUs />
    </main>
  );
}
