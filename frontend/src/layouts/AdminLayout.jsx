import { Outlet } from "react-router-dom";
import AdminNavbar from "@/components/admin/AdminNavbar";
import Sidebar from "@/components/admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <>
        <AdminNavbar />
        <hr />

        {/* Sidebar  */}
        <div className="flex w-full">
          <Sidebar />
        </div>

        <Outlet />
      </>
    </div>
  );
};

export default AdminLayout;
