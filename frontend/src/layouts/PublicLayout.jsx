import { Outlet } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import SearchBar from "@/components/common/SearchBar";
import { ToastContainer } from "react-toastify";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <SearchBar />

      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Outlet />
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default PublicLayout;
