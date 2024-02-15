import Filter from "@/components/Filter";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <>
      <SideBar />
      <section className="ml-[280px] p-10">
        <TopBar />
        <Filter />
      </section>
    </>
  );
}
