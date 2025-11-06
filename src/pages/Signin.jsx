import React from "react";
import AuthCard from "../components/AuthCard.jsx";

export default function SignIn() {
  return (
    <div className="min-h-screen bg-[#f4f1fa]">
      <div className="container mx-auto px-4 py-10 md:py-12 mt-6 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-3 md:space-y-6">
            <h1 className="text-2xl md:text-5xl font-semibold text-gray-800 leading-snug md:leading-tight">
              Explore your <span className="text-[#00A8D2]">hobby</span> or {""}
              <span className="text-[#7A57D1]">passion</span>
            </h1>

            <p className="text-[15px] md:text-lg text-gray-600 leading-relaxed">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities...
            </p>

            <p className="text-[15px] md:text-lg text-gray-600 leading-relaxed">
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>

            {/* Illustration */}
            <div className="mt-10 px-4 md:px-0 flex justify-center">
              <img
                src="/hero-illustration.png"
                alt="People enjoying hobbies"
                className="w-full h-auto max-w-[820px] md:max-w-[90%] md:mx-auto lg:max-w-[820px] drop-shadow-xl select-none pointer-events-none"
                draggable="false"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Section - Auth Card */}
          <div className="flex justify-center lg:justify-end md:max-w-[480px] md:mx-auto">
            <AuthCard activeTab="signin" />
          </div>
        </div>
      </div>
    </div>
  );
}
