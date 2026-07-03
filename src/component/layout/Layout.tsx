import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className={`min-h-screen ${isHome ? "" : "pt-20"}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;