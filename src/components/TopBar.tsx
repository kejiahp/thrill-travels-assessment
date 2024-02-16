import React from "react";
import { MdLocationOn } from "react-icons/md";
import { LuArrowLeftRight } from "react-icons/lu";
import { IoCalendarOutline, IoPersonSharp } from "react-icons/io5";
import { MdChair } from "react-icons/md";

/**
 * Details bar at the top of the screen
 */
export default function TopBar() {
  return (
    <nav className="p-5 rounded-3xl bg-white font-bold text-xs text-cust-teal-100 grid grid-cols-4 grid-rows-2 gap-5 ">
      <div className="rounded-3xl bg-cust-teal-50 p-2 col-span-2 flex justify-evenly items-center">
        <button className="flex gap-3 items-center">
          <MdLocationOn size={18} /> NEW YORK (JFK)
        </button>
        <button>
          <LuArrowLeftRight className="text-white text-3xl bg-cust-teal-200 rounded-full p-1" />
        </button>
        <button className="flex gap-3 items-center">
          <MdLocationOn size={18} /> MUMBAI (BOM)
        </button>
      </div>
      <div className="rounded-3xl bg-cust-teal-50 p-2 flex justify-center gap-3 items-center">
        <IoCalendarOutline size={18} />
        <p>29 JULY 2019</p>
      </div>
      <div className="rounded-3xl bg-cust-teal-50 p-2  flex justify-center gap-3 items-center">
        <IoPersonSharp size={18} />
        <p>2 TRAVELLER</p>
      </div>

      <div className="rounded-3xl bg-cust-teal-50 p-1 col-span-2 row-start-2 flex items-center gap-3">
        <button className="text-white flex-1 h-[100%] flex justify-center items-center bg-cust-teal-200 rounded-3xl">
          ONE WAY
        </button>
        <button className="flex-1 h-[100%] rounded-3xl flex justify-center items-center">
          ROUND TRIP
        </button>
        <button className="flex-1 h-[100%] rounded-3xl flex justify-center items-center">
          MUlTI CITY
        </button>
      </div>
      <div className="rounded-3xl bg-cust-teal-50 p-2 row-start-2 flex justify-center gap-3 items-center">
        <MdChair size={18} />
        <p>FIRST CLASS</p>
      </div>
      <button className="rounded-3xl text-white bg-cust-yellow-200 p-2 row-start-2 flex justify-center items-center font-medium">
        SEARCH
      </button>
    </nav>
  );
}
