import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export function Layout() {
  return (
    <section className="bg-zinc-100">
      <Navbar />
      <section className="flex justify-center m-auto mt-16">
        <Outlet />
      </section>
    </section>
  );
}
