import React from "react";
import EventImage from "../assets/event_image.svg";
import Calendar from "../assets/calendar.svg";
import Location from "../assets/location.svg";
import Arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <div className="flex flex-col pb-10">
      <main className="container flex flex-col md:h-full p-16 px-4 mx-auto lg:grid lg:grid-cols-2 lg:gap-x-2">
        <div className="h-full mb-5">
          <div className="h-1/2 w-full lg:hidden">
            <img
              src={EventImage}
              alt="event"
              className="object-cover mx-auto lg:hidden"
            ></img>
          </div>
          <div className="px-5 md:px-36  flex flex-col gap-y-5 lg:self-center">
            <div>
              <h1 className="font-bold text-primaryOne my-2 text-3xl md:text-5xl leading-none">
                Title
              </h1>
              <p className="font-light text-slate-500">
                Hosted by <strong className="font-bold">Victor</strong>
              </p>
            </div>
            <div>
              <div className="flex items-center relative">
                <img src={Calendar} className="mr-5" alt="icon1" />
                <div className="flex flex-col">
                  <p className="font-bold text-primaryOne">18 August 6:00PM</p>
                  <p className="font-medium text-neutralOne">
                    to 19 August 1:00PM UTC +10
                  </p>
                </div>
                <img src={Arrow} className="absolute right-5" alt="icon1" />
              </div>
              <div className="flex items-center relative">
                <img src={Location} className="mr-5" alt="icon1" />
                <div className="flex flex-col">
                  <p className="font-bold text-primaryOne">Street name</p>
                  <p className="font-medium text-neutralOne">
                    Suburb, State, Postcode
                  </p>
                </div>
                <img src={Arrow} className="absolute right-5" alt="icon1" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src={EventImage}
            alt="event"
            className="object-cover mx-auto hidden lg:block h-1/2"
          ></img>
          <hr />
          <div className="flex w-full justify-center items-center mt-3 px-2">
            <Link to="/create" className="flex-1">
              <button className="w-full flex-1">Edit</button>
            </Link>
            <Link to="/event" className="flex-1">
              <button
                type="submit"
                className="w-full p-3 md:p-4 md:text-1xl font-bold text-white rounded-md bg-gradient-to-r from-primaryThree to-primaryFour cursor-pointer"
              >
                Create Event
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Event;
