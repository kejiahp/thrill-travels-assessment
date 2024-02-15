import Depiction from "@/components/Depiction";
import Filter from "@/components/Filter";
import Listing from "@/components/Listing";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <>
      <SideBar />
      <section className="ml-[280px] p-10">
        <TopBar />
        <Filter />

        <div className="flex gap-5">
          <div className="w-[65%]">
            <Listing />
          </div>
          <div className="w-[35%]">
            <Depiction />
          </div>
        </div>
      </section>
    </>
  );
}
