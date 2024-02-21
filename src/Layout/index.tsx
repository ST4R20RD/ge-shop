import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

export function Layout() {
  return (
    <section className="bg-zinc-100">
      <Navbar />
      <section className="flex justify-center m-auto mt-[88px] min-h-screen bg-stone-300 dark:bg-zinc-900">
        <Outlet />
      </section>
      <Footer />
    </section>
  );
}
