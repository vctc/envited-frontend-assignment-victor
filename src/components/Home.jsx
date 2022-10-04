import React from "react";
import { Link } from "react-router-dom";
import Banner from "../assets/banner.svg";

const Home = () => {
  return (
    <main className="container flex flex-col h-full p-16 px-4 mx-auto lg:grid lg:grid-cols-2 lg :gap-x-8">
      <div className="hidden lg:block">
        <img
          className="relative object-cover mx-auto h-72 w-36 md:h-auto md:w-72 mb-5 drop-shadow-2xl lg:mx-12 md:mb-0"
          src={Banner}
          alt="banner"
        />
      </div>
      <div className="text-center mx-3 lg:mx-0 lg:text-right lg:self-center">
        <h1 className="mt-5 mx-auto text-3xl font-bold sm:w-2/3 md:w-2/3 lg:w-auto lg:mb-8 md:text-4xl lg:text-5xl  text-primaryOne">
          <span>Imagine if</span> <span className="specialText">Snapchat</span>{" "}
          <span>had events.</span>
        </h1>
        <p className=" mx-auto  mt-2 mb-5 lg:mb-12 text-neutralOne sm:w-2/3 md:w-2/3 lg:w-auto md:text-xl lg:text-3xl">
          Easily host and share events with your friends across any social
          media.
        </p>
        <img
          className="lg:hidden relative object-cover mx-auto h-72 w-36 md:h-auto md:w-72 mb-5 drop-shadow-2xl lg:mx-12 md:mb-0"
          src={Banner}
          alt="banner"
        />
        <Link to="/create">
          <button className="text-white text-bold md:text-xl w-1/2 p-2 md:p-4  rounded-lg bg-gradient-to-r from-primaryThree to-primaryFour ">
            <span className="mr-2" role="img" aria-label="img">
              🎉
            </span>
            Create my event
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
