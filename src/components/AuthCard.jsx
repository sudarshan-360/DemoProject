import React from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField.jsx";
import PasswordField from "./PasswordField.jsx";
import GoogleButton from "./GoogleButton.jsx";
import FacebookButton from "./FacebookButton.jsx";
import { Lock } from "lucide-react";

export default function AuthCard({ activeTab = "signin" }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg px-6 md:px-10 py-6 md:py-8 w-full max-w-[420px]">
      {/* Tabs */}
      <div className="flex justify-center gap-10 mt-2 mb-4 relative">
        <Link
          to="/signin"
          className={`relative text-[19px] font-semibold transition-colors no-underline decoration-transparent hover:decoration-transparent focus:decoration-transparent ${
            activeTab === "signin"
              ? "text-[#7a57d1] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#7A57D1]"
              : "text-gray-600"
          }`}
        >
          Sign In
        </Link>
        <Link
          to="/join"
          className={`relative text-[19px] font-semibold transition-colors no-underline decoration-transparent hover:decoration-transparent focus:decoration-transparent ${
            activeTab === "joinin"
              ? "text-[#7a57d1] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#7A57D1]"
              : "text-gray-600"
          }`}
        >
          Join In
        </Link>
      </div>

      {/* Social Login Buttons - UI only */}
      <div className="space-y-3 mb-6">
        <GoogleButton />
        <FacebookButton />
      </div>

      {/* OR CONNECT WITH divider */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="text-sm text-gray-600 font-semibold">
          Or connect with
        </span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      {/* Form - UI only, uncontrolled */}
      <div className="space-y-4">
        <InputField type="email" placeholder="Email" />

        <PasswordField
          placeholder="Password"
          showStrength={activeTab === "joinin"}
        />

        {activeTab === "signin" && (
          <div className="flex items-center justify-between mt-3 mb-4 px-1">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-[5px] border-[#7A57D1] text-purple-600 focus:ring-purple-500"
              />
              Remember me
            </label>
            <a
              href="#"
              className="flex items-center gap-1 text-sm text-[#7a57d1]"
            >
              <Lock className="w-4 h-4" />
              Forgot password?
            </a>
          </div>
        )}

        {activeTab === "joinin" && (
          <p className="text-xs text-gray-600">
            By continuing, you agree to our{" "}
            <a href="#" className="text-[#7a57d1]">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#7a57d1]">
              Privacy Policy
            </a>
            .
          </p>
        )}

        <button
          type="button"
          className="w-full bg-[#7A57D1] text-white text-[17px] font-semibold rounded-xl py-3 mt-2 hover:bg-[#6a47c1] focus:bg-[#6a47c1] active:bg-[#6540c0] active:scale-[0.99] transition"
          onClick={() => console.log("Submit clicked (UI only)")}
        >
          {activeTab === "joinin" ? "Agree and Continue" : "Continue"}
        </button>
      </div>
    </div>
  );
}
