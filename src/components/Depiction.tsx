import Image from "next/image";
import React from "react";

export default function Depiction() {
  return (
    <div className="bg-cust-teal-100 h-full rounded-3xl text-white text-xs flex flex-col justify-between gap-3 overflow-hidden">
      <div className="p-5 h-[60%]">
        <div className="flex justify-between">
          <div className="text-left">
            <span>FROM</span>
            <p className="text-2xl">JFK</p>
          </div>

          <p className="self-end">NON-STOP</p>

          <div className="text-right">
            <span>TO</span>
            <p className="text-2xl">BOM</p>
          </div>
        </div>

        <div className="relative overflow-hidden w-full h-[100%]">
          <Image
            src="/images/FromToImg.png"
            alt="from location to location"
            fill
            className="object-contain object-center"
            sizes="(min-width: 768px) 100vw, 100vw"
          />
        </div>
      </div>

      <div className="p-5 bg-cust-teal-200 h-[40%]">
        <div className="flex items-center gap-3 justify-between">
          <button className="rounded-3xl px-2 py-2 bg-cust-yellow-200">
            NON STOP
          </button>
          <button className="rounded-3xl px-2 py-2">ONE STOP</button>
          <button className="rounded-3xl px-2 py-2">MORE STOP</button>
        </div>

        <div className="my-5">
          <p>PRICE</p>
          <div className="relative flex justify-between my-5 after:content-[''] after:w-[100%] after:absolute after:bottom-[15px] after:h-[1px] after:bg-cust-teal-50">
            <div className="bg-cust-yellow-200 w-[30px] h-[30px] rounded-full ml-5 relative z-10">
              <span className="tooltip_arrow bg-cust-yellow-200 px-3 py-1 rounded-3xl absolute -bottom-10 -left-[10px]">
                $500
              </span>
            </div>
            <div className="bg-cust-yellow-200 w-[30px] h-[30px] rounded-full mr-5 relative z-10">
              <span className="tooltip_arrow bg-cust-yellow-200 px-3 py-1 rounded-3xl absolute -bottom-10 -left-[10px]">
                $2500
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
