import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ChevronDown,
  Star,
  Bookmark,
  Bell,
  ShoppingCart,
  Menu,
  Compass,
} from "lucide-react";
import DropdownMenu from "./DropdownMenu.jsx";

export default function Header() {
  const exploreItems = [
    "People - Community",
    "Places - Venues",
    "Programs - Events",
    "Products - Store",
    "Blogs",
  ];

  const hobbiesItems = [
    "All Hobbies",
    "Art & Design",
    "Sports & Fitness",
    "Music & Dance",
    "Cooking & Baking",
    "Gardening",
    "Reading & Writing",
  ];

  // Mobile interactive states
  const [openSearch, setOpenSearch] = useState(false);
  const [openBell, setOpenBell] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const searchRef = useRef(null);
  const bellRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target) &&
        bellRef.current &&
        !bellRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setOpenSearch(false);
        setOpenBell(false);
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="py-3 px-4 md:py-4 md:px-6 w-full max-w-7xl mx-auto relative">
        <div className="flex items-center justify-between">
          {/* Left Side: Logo */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 no-underline decoration-transparent hover:decoration-transparent focus:decoration-transparent"
            >
              <img
                src="/Screenshot%202025-11-06%20at%2012.56.48%20PM.png"
                alt="hobbycue — Your Hobby, Your Community"
                className="h-12 lg:h-14 w-auto select-none pointer-events-none"
                draggable="false"
              />
            </Link>
          </div>

          {/* Center: Search Bar (desktop/tablet) */}
          <div className="hidden md:flex flex-1 justify-center md:px-6">
            <div className="flex items-center w-[300px] h-[42px] bg-[#F7F8FA] border border-[#E6E7EB] rounded-full overflow-hidden shadow-sm">
              <input
                type="text"
                placeholder="Search here..."
                className="flex-1 h-full px-5 text-gray-600 text-[15px] outline-none placeholder:text-gray-400"
              />
              <button className="w-14 h-full bg-[#8164A3] flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Right Side: Navigation */}
          <div className="hidden md:flex items-center gap-8 md:gap-6 lg:gap-8 md:flex-nowrap">
            <DropdownMenu
              title={
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#8164A3]">
                    <Compass className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[16px] font-medium text-gray-800">
                    Explore
                  </span>
                </div>
              }
              items={exploreItems}
            />

            <DropdownMenu
              title={
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#8164A3]">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[16px] font-medium text-gray-800">
                    Hobbies
                  </span>
                </div>
              }
              items={hobbiesItems}
            />

            <div className="flex items-center">
              <Bookmark className="w-6 h-6 text-[#8164A3]" />
            </div>
            <div className="flex items-center">
              <Bell className="w-6 h-6 text-[#8164A3]" />
            </div>
            <div className="flex items-center">
              <ShoppingCart className="w-6 h-6 text-[#8164A3]" />
            </div>

            <Link
              to="/signin"
              className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors flex items-center no-underline decoration-transparent hover:decoration-transparent focus:decoration-transparent"
            >
              Sign In
            </Link>
          </div>
          {/* Mobile icons */}
          <div className="flex md:hidden items-center gap-6">
            <button
              aria-label="Open search"
              onClick={() => {
                setOpenSearch((v) => !v);
                setOpenBell(false);
                setOpenMenu(false);
              }}
              className="p-1"
            >
              <Search className="w-6 h-6 text-[#6A4BBC]" />
            </button>
            <button
              aria-label="Open notifications"
              onClick={() => {
                setOpenBell((v) => !v);
                setOpenSearch(false);
                setOpenMenu(false);
              }}
              className="p-1"
            >
              <Bell className="w-6 h-6 text-[#6A4BBC]" />
            </button>
            <button
              aria-label="Open menu"
              onClick={() => {
                setOpenMenu((v) => !v);
                setOpenSearch(false);
                setOpenBell(false);
              }}
              className="p-1"
            >
              <Menu className="w-6 h-6 text-[#6A4BBC]" />
            </button>
          </div>
        </div>

        {/* Mobile search panel */}
        {openSearch && (
          <div
            ref={searchRef}
            className="md:hidden absolute left-4 right-4 top-full mt-3 z-50"
          >
            <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-[6px] shadow-sm">
              <input
                type="text"
                placeholder="Search here..."
                className="flex-1 text-sm text-gray-700 outline-none placeholder:text-gray-400"
              />
              <button className="bg-[#8A2BE2] text-white p-2 rounded-full flex items-center justify-center w-9 h-9 ml-2">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile notifications panel */}
        {openBell && (
          <div
            ref={bellRef}
            className="md:hidden absolute right-4 top-full mt-3 w-64 bg-white border border-gray-200 rounded-xl shadow-[0_6px_24px_rgba(0,0,0,0.12)] py-3 z-50"
          >
            <div className="px-4 py-2 text-sm text-gray-700">
              No notifications
            </div>
          </div>
        )}

        {/* Mobile menu panel */}
        {openMenu && (
          <div
            ref={menuRef}
            className="mobile-menu md:hidden absolute right-4 top-full mt-3 w-72 md:w-[380px] bg-white border border-gray-200 rounded-xl shadow-[0_6px_24px_rgba(0,0,0,0.12)] py-2 z-50"
          >
            <div className="px-4 pt-2 pb-1 text-sm text-gray-500 font-semibold uppercase tracking-wide">
              Explore
            </div>
            {exploreItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block py-2.5 px-4 text-[18px] font-medium text-gray-800 transition no-underline decoration-none hover:no-underline focus:no-underline hover:text-[#7A57D1]"
              >
                {item}
              </a>
            ))}
            <div className="px-4 pt-2 pb-1 text-sm text-gray-500 font-semibold uppercase tracking-wide mt-2">
              Hobbies
            </div>
            {hobbiesItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block py-2.5 px-4 text-[18px] font-medium text-gray-800 transition no-underline decoration-none hover:no-underline focus:no-underline hover:text-[#7A57D1]"
              >
                {item}
              </a>
            ))}
            <div className="border-t border-gray-200 my-2" />
            <Link
              to="/signin"
              className="block py-2.5 px-4 text-[18px] font-medium text-gray-800 transition no-underline decoration-none hover:no-underline focus:no-underline hover:text-[#7A57D1]"
              onClick={() => setOpenMenu(false)}
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
