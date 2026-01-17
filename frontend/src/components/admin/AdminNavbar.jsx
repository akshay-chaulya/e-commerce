import { assets } from "@/assets/assets.js";

const AdminNavbar = () => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img src={assets.logo} alt="" />
      <button className="cursor-pointer b g-gray-600 text-white px-5 py-2 sm:px-7 rounded-full text-xs sm:text-base">
        Logo
      </button>
    </div>
  );
};

export default AdminNavbar;
