import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

export function Layout() {
  return (
    <section className="bg-zinc-100">
      <Navbar />
      <section className="flex justify-center m-auto mt-16 bg-stone-300">
        <Outlet />
      </section>
      <Footer />
    </section>
  );
}
