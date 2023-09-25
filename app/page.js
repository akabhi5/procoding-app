import FullWCard from "./components/FullWCard/FullWCard";
import SideBar from "./components/SideBar/SideBar";

export default function Home() {
  return (
    <>
      <section class="grid grid-cols-12 gap-4 mt-4 px-3">
        <aside className="hidden md:block col-span-3 content-center">
          <div className="top-20 sticky">
            <SideBar />
          </div>
        </aside>
        <div className="col-span-12 md:col-span-6">
          <FullWCard />
          <FullWCard />
          <FullWCard />
          <FullWCard />
          <FullWCard />
          <FullWCard />
          <FullWCard />
          <FullWCard />
          <FullWCard />
          <FullWCard />
          <FullWCard />
          <FullWCard />
          <FullWCard />
          <FullWCard />
        </div>
        <aside className="hidden md:block col-span-3">
          <SideBar />
        </aside>
      </section>
      {/* bottom sidebar */}
      <aside className="block md:hidden px-3 my-4">
        <SideBar />
      </aside>
    </>
  );
}
