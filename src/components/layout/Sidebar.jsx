"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaProductHunt } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { TfiDashboard } from "react-icons/tfi";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

const Sidebar = ({ open, setOpen }) => {
  const pathname = usePathname();

  return (
    <div
      className={`
        bg-black text-white min-h-screen flex flex-col transition-all ease-in 
        sm:${open ? "w-64" : "w-20"} 
        md:${!open ? "w-64" : "w-20"} 
      `}
    >
      {/* Header */}
      <div className="text-center mt-4 text-xl font-bold border-b border-gray-300 p-3 flex justify-center items-center gap-3">
        <FaProductHunt className="text-2xl" />

        {open && (
          <span className="block md:hidden transition-all  ease-in ">
            ProductBoard
          </span>
        )}

        {!open && (
          <span className="hidden md:block transition-all  ease-in  ">
            ProductBoard
          </span>
        )}
      </div>

      {/* Navigation */}
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-2 mt-3">
          {/*  Dashboard */}
          <Link
            href={"/dashboard"}
            className={`flex items-center gap-4 m-3 py-3 px-2 rounded-md 
              ${pathname === "/dashboard" ? "bg-white text-black" : ""}
            `}
          >
            <RxDashboard className="text-2xl" />

            {open && (
              <h3 className="block text-xl md:hidden transition-all  ease-in ">
                Dashboard
              </h3>
            )}

            {!open && (
              <h3 className="hidden text-xl md:block transition-all  ease-in  ">
                Dashboard
              </h3>
            )}
          </Link>
          {/* Products */}
          <Link
            href={"/dashboard/products"}
            className={`flex items-center gap-4 m-3 py-3 px-2 rounded-md 
              ${pathname === "/dashboard/products" ? "bg-white text-black" : ""}
            `}
          >
            <AiOutlineProduct className="text-2xl" />

            {open && (
              <h3 className="block text-xl md:hidden transition-all  ease-in ">
                Products
              </h3>
            )}

            {!open && (
              <h3 className="hidden text-xl md:block transition-all  ease-in  ">
                Products
              </h3>
            )}
          </Link>
          {/* Users */}
          <Link
            href={"/dashboard/users"}
            className={`flex items-center gap-4 m-3 py-3 px-2 rounded-md 
              ${pathname === "/dashboard/users" ? "bg-white text-black" : ""}
            `}
          >
            <FaUsers className="text-2xl" />

            {open && (
              <h3 className="text-xl md:hidden transition-all  ease-in ">
                Users
              </h3>
            )}

            {!open && (
              <h3 className="hidden text-xl md:block transition-all  ease-in  ">
                Users
              </h3>
            )}
          </Link>
          <Link
            href={"/dashboard/carts"}
            className={`flex items-center gap-4 m-3 py-3 px-2 rounded-md 
              ${pathname === "/dashboard/carts" ? "bg-white text-black" : ""}
            `}
          >
            <PiShoppingCartSimpleFill className="text-2xl" />

            {open && (
              <h3 className="text-xl md:hidden transition-all  ease-in ">
                Carts
              </h3>
            )}

            {!open && (
              <h3 className="hidden text-xl md:block transition-all  ease-in ">
                Carts
              </h3>
            )}
          </Link>
          <Link
            href={"/dashboard/settings"}
            className={`flex items-center gap-4 m-3 py-3 px-2 rounded-md 
              ${pathname === "/dashboard/settings" ? "bg-white text-black" : ""}
            `}
          >
            <IoSettings className="text-2xl" />

            {open && (
              <h3 className="text-xl md:hidden transition-all  ease-in ">
                Setting
              </h3>
            )}

            {!open && (
              <h3 className="hidden text-xl md:block transition-all  ease-in  ">
                Setting
              </h3>
            )}
          </Link>
        </div>

        {/* Logout */}
        <div className="flex items-center gap-4 m-4 cursor-pointer">
          <LuLogOut className="text-2xl" />

          {open && (
            <h3 className="text-xl md:hidden transition-all  ease-in ">
              Logout
            </h3>
          )}

          {!open && (
            <h3 className="hidden text-xl md:block transition-all  ease-in ">
              Logout
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
