import React from "react";
import { IoChevronDown } from "react-icons/io5";

/**
 * Travel listing filter
 */
export default function Filter() {
  return (
    <div className="font-bold text-xs justify-between text-cust-teal-100 my-5 flex items-center ">
      <h1 className="text-lg">RESULT (25)</h1>

      <div className="flex items-center gap-3">
        <button className="rounded-3xl px-6 py-3 bg-white flex justify-evenly items-center">
          FILTER
        </button>
        <button className="rounded-3xl px-6 py-3 gap-3 bg-white flex justify-evenly items-center">
          TICKET OF CLASS
          <IoChevronDown size={20} />
        </button>
      </div>
    </div>
  );
}
