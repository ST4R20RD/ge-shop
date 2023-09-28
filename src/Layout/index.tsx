import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export function Layout() {
  return (
    <section>
      <Navbar />
      <Outlet />
    </section>
  );
}
