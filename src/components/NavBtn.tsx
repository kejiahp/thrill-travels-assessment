import React from "react";
import { IconType } from "react-icons";
import {
  IoHomeOutline,
  IoWalletOutline,
  IoNewspaperOutline,
  IoPieChartOutline,
} from "react-icons/io5";
import { SlPlane } from "react-icons/sl";
import { BsGear } from "react-icons/bs";

export default function AllNavBtns() {
  return (
    <>
      <NavBtn
        href="#dashboard"
        id="dashboard"
        title="DASHBOARD"
        icon={IoHomeOutline}
      />
      <NavBtn href="#flight" id="flight" title="FLIGHTS" icon={SlPlane} />
      <NavBtn
        href="#wallet"
        id="wallet"
        title="WALLET"
        icon={IoWalletOutline}
      />
      <NavBtn
        href="#reports"
        id="reports"
        title="REPORTS"
        icon={IoNewspaperOutline}
      />
      <NavBtn
        href="#stats"
        id="stats"
        title="STATISTICS"
        icon={IoPieChartOutline}
      />
      <NavBtn href="#settings" id="settings" title="SETTINGS" icon={BsGear} />
    </>
  );
}

function NavBtn({
  icon: Icon,
  title,
  href,
  id,
}: {
  icon: IconType;
  title: string;
  href: string;
  id: string;
}) {
  return (
    <a
      href={href}
      id={id}
      className="nav_item relative group flex gap-3 items-center p-5 bg-transparent target:bg-cust-teal-50 w-full rounded-l-full after:content-[''] after:w-[40px] after:h-[80px] after:absolute after:right-0 after:-top-[80px]  after:rounded-br-[30px] before:content-[''] before:w-[40px] before:h-[80px] before:absolute before:-bottom-[80px] before:right-0 before:rounded-tr-[30px] after:shadow-[0_30px_0_0_rgba(225,236,235,0)] target:after:shadow-[0_30px_0_0_rgba(225,236,235,1)] before:shadow-[0_-30px_0_0_rgba(225,236,235,0)] target:before:shadow-[0_-30px_0_0_rgba(225,236,235,1)]"
    >
      <Icon size={25} className="text-cust-yellow-200" />
      <p className="text-white group-target:text-cust-teal-100">{title}</p>
    </a>
  );
}
