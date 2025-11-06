import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordField({
  placeholder = "Password",
  value,
  onChange,
  showStrength = false,
  className = "",
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [internalValue, setInternalValue] = useState("");

  const currentPassword = value !== undefined ? value : internalValue;

  const handleChange = (e) => {
    if (onChange) onChange(e);
    if (value === undefined) setInternalValue(e.target.value);
  };

  const calculateStrength = (password) => {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    // Map to 0-3 bars
    return Math.min(3, Math.max(0, score - 1));
  };

  const strength = showStrength ? calculateStrength(currentPassword) : 0;

  return (
    <div>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value !== undefined ? value : internalValue}
          onChange={handleChange}
          className={`w-full h-12 px-4 pr-12 rounded-xl shadow-sm text-[16px] leading-5 text-gray-700 placeholder:text-gray-500 bg-[#F3F4F6] md:bg-white md:border md:border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>
      {showStrength && (
        <div className="mt-2 flex items-center justify-between">
          <div className="flex gap-1">
            <div
              className={`w-5 h-1 rounded ${
                strength >= 1 ? "bg-[#7a57d1]" : "bg-gray-300"
              }`}
            ></div>
            <div
              className={`w-5 h-1 rounded ${
                strength >= 2 ? "bg-[#7a57d1]" : "bg-gray-300"
              }`}
            ></div>
            <div
              className={`w-5 h-1 rounded ${
                strength >= 3 ? "bg-[#7a57d1]" : "bg-gray-300"
              }`}
            ></div>
          </div>
          <span className="text-xs text-gray-500">Password strength</span>
        </div>
      )}
    </div>
  );
}
