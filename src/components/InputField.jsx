import React from "react";
import { Mail } from "lucide-react";

export default function InputField({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
}) {
  return (
    <div
      className={`flex items-center h-12 rounded-xl px-4 bg-[#F3F4F6] md:bg-white md:border md:border-gray-300 shadow-sm focus-within:ring-2 focus-within:ring-purple-500 ${className}`}
    >
      {type === "email" && (
        <Mail className="w-5 h-5 text-gray-500 mr-3 shrink-0" />
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 h-full border-0 outline-none bg-transparent text-[16px] leading-none text-gray-700 placeholder:text-gray-500"
      />
    </div>
  );
}
