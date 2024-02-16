import Image from "next/image";
import React from "react";

type Props = {
  image: string;
};

/**
 * User avatar on the sidebar
 */
export default function Avatar({ image }: Props) {
  return (
    <div className="w-[90px] h-[90px] rounded-full border-2 border-cust-yellow-200 flex justify-center items-center">
      <div className="relative overflow-hidden w-[75px] h-[75px] rounded-full">
        <Image
          src={image}
          alt="avatar"
          className="object-cover object-center bg-white"
          fill
          priority
          sizes="(max-width: 768px) 70vw, 100vw"
        />
      </div>
    </div>
  );
}
