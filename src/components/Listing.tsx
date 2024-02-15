import Image from "next/image";
import React from "react";

export default function Listing() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden">
      <ListItem
        provider="EMIRATES"
        image={"/images/EmiratesImg.png"}
        fromLocation={"JFK"}
        toLocation={"BOM"}
        startTime={"13:00"}
        endTime={"14:20"}
        duration={"11H 20M"}
        variant={"NON-STOP"}
        price={"$1,572"}
      />
      <ListItem
        provider="QATAR AIRWAYS"
        image={"/images/QuatarImg.png"}
        fromLocation={"JFK"}
        toLocation={"BOM"}
        startTime={"13:00"}
        endTime={"14:20"}
        duration={"11H 20M"}
        variant={"NON-STOP"}
        price={"$2,072"}
      />
      <ListItem
        provider="LUFTHANSA"
        image={"/images/LuftImg.png"}
        fromLocation={"JFK"}
        toLocation={"BOM"}
        startTime={"13:00"}
        endTime={"14:20"}
        duration={"11H 20M"}
        variant={"NON-STOP"}
        price={"$1,872"}
      />
      <ListItem
        provider="EMIRATES"
        image={"/images/EmiratesImg.png"}
        fromLocation={"JFK"}
        toLocation={"BOM"}
        startTime={"13:00"}
        endTime={"14:20"}
        duration={"11H 20M"}
        variant={"NON-STOP"}
        price={"$1,872"}
        noBorder
      />
    </div>
  );
}

function ListItem({
  image,
  fromLocation,
  toLocation,
  startTime,
  endTime,
  duration,
  variant,
  price,
  provider,
  noBorder,
}: {
  image: string;
  fromLocation: string;
  toLocation: string;
  startTime: string;
  endTime: string;
  duration: string;
  variant: string;
  price: string;
  provider: string;
  noBorder?: boolean;
}) {
  const afterStyling =
    "after:content-[''] after:absolute after:w-[30px] after:h-[30px] after:-bottom-4 after:-right-4 after:bg-cust-teal-50 after:rounded-full";
  const beforeStyling =
    "before:content-[''] before:absolute before:w-[30px] before:h-[30px] before:-bottom-4 before:-left-4 before:bg-cust-teal-50 before:rounded-full";
  return (
    <div
      className={`relative flex gap-3  justify-between text-cust-teal-100 font-bold px-10 ${
        noBorder ? "" : "border-b-2 border-dashed border-cust-teal-50"
      } ${noBorder ? "" : afterStyling} ${noBorder ? "" : beforeStyling}`}
    >
      <div className="relative overflow-hidden w-[130px] h-[130px]">
        <Image
          src={image}
          className="object-contain object-center"
          alt={provider}
          fill
          sizes="(min-width: 768px) 100vw, 100vw"
        />
      </div>

      <span className="flex flex-col gap-3 items-center justify-center">
        <h1 className="text-2xl 2xl:text-3xl font-medium">{fromLocation}</h1>
        <p className="font-medium">{startTime}</p>
      </span>
      <span className="flex flex-col items-center justify-center">
        <p className="text-xs text-center font-medium">{provider}</p>
        <p className="text-cust-yellow-200 text-lg text-center">{duration}</p>
        <p className="font-medium">{variant}</p>
      </span>
      <span className="flex flex-col gap-3 items-center justify-center">
        <p className="text-2xl 2xl:text-3xl font-medium ">{toLocation}</p>
        <p className="font-medium">{endTime}</p>
      </span>
      <span className="flex flex-col gap-3 items-end justify-center">
        <p>{price}</p>
        <button className="rounded-3xl text-xs text-white bg-cust-yellow-200 py-3 px-5">
          BOOK NOW
        </button>
      </span>
    </div>
  );
}
