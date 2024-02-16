import React from "react";
import Avatar from "./Avatar";
import AllActiveUsers from "./ActiveUser";
import AllNavBtns from "./NavBtn";
import Image from "next/image";

/**
 * Side bar containing all the navigation links, user avatar and info on all active users.
 */
export default function SideBar() {
  return (
    <aside className="list_container w-[280px] overflow-hidden fixed top-0 left-0 h-full bg-cust-teal-100 rounded-tr-[50px] rounded-br-[50px]">
      <section className="item_direction py-[40px] px-[30px] bg-cust-teal-200 text-white flex  flex-col items-center justify-center">
        <Avatar image="/images/Avatar.png" />
        <h1 className="text-xl mt-3">ALEX JOHNSON</h1>
        <p className="text-xs">alex.johnson@gmail.com</p>
      </section>

      <section className="item_direction pl-3 pt-7">
        <AllNavBtns />
      </section>

      <section className="item_direction px-[32px] my-8">
        <AllActiveUsers />
      </section>

      <section className="item_direction pr-[10px]">
        <div className="relative overflow-hidden w-full h-[150px]">
          <Image
            src="/images/SideBarNav.png"
            alt="side bar map"
            fill
            sizes="(min-width: 768px) 100vw, 10vw"
            className="object-contain object-center"
          />
        </div>
      </section>
    </aside>
  );
}
