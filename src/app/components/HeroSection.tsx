import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="flex items-center text-6xl px-32 flex-grow font-semibold justify-between">
      <div className="flex flex-col gap-6">
        <div>Unlock the World,</div>
        <div> One Word at a Time.</div>
        <button className="bg-blue-600 w-fit px-8 py-4 rounded-full text-white text-3xl hover:bg-blue-400">
          Get Started
        </button>
      </div>
      <Image
        className="w-1/3"
        width={600}
        height={600}
        quality={100}
        src="/Learning.jpg"
        alt=""
      ></Image>
    </section>
  );
};

export default HeroSection;
