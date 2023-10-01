import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export function Layout() {
  return (
    <section className="">
      <Navbar />
      <section className="flex justify-center max-w-screen-xl m-auto mt-16">
        <Outlet />
      </section>
    </section>
  );
}
