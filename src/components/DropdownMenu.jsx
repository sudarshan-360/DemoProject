import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function DropdownMenu({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={
          "flex items-center gap-2 whitespace-nowrap font-medium text-gray-700 hover:text-purple-600 transition-colors no-underline decoration-transparent hover:decoration-transparent focus:decoration-transparent"
        }
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[240px] bg-white border border-gray-200 rounded-xl shadow-[0_6px_24px_rgba(0,0,0,0.12)] py-3 z-50">
          {items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-5 py-2.5 text-[15px] font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer no-underline decoration-transparent hover:decoration-transparent focus:decoration-transparent"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
