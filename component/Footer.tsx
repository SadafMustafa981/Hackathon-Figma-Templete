
import React from 'react';

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center gap-6 px-5 w-full bg-white py-6">
      {/* Intro Section */}
      <div className="w-full flex flex-wrap items-start justify-between gap-6">
        <div className="intro flex flex-col gap-2 w-full lg:w-auto">
          <h2 className="text-[#3563e9] text-2xl lg:text-3xl font-bold text-center lg:text-left">MORENT</h2>
          <p className="text-gray-500 text-center lg:text-left max-w-[300px]">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-6 justify-center lg:justify-between w-full lg:w-auto lg:mr-10">
          {/* About Section */}
          <div className="about">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-lg">About</li>
              <li className="text-gray-600">How it works</li>
              <li className="text-gray-600">Featured</li>
              <li className="text-gray-600">Partnership</li>
              <li className="text-gray-600">Business Relation</li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="community">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-lg">Community</li>
              <li className="text-gray-600">Events</li>
              <li className="text-gray-600">Blog</li>
              <li className="text-gray-600">Podcast</li>
              <li className="text-gray-600">Invite a friend</li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="socials">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-lg">Socials</li>
              <li className="text-gray-600">Discord</li>
              <li className="text-gray-600">Instagram</li>
              <li className="text-gray-600">Facebook</li>
              <li className="text-gray-600">Twitter</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="w-full border-t border-[#e7eef6]" />

      {/* Footer Bottom Section */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4">
        {/* Copyright */}
        <div className="text-center lg:text-left w-full lg:w-auto">
          <p className="font-bold text-sm">©2022 MORENT. All rights reserved</p>
        </div>

        {/* Policy Links */}
        <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4 w-full lg:w-auto">
          <a href="#" className="font-bold text-sm text-gray-600 hover:text-[#3563e9]">
            Privacy & Policy
          </a>
          <a href="#" className="font-bold text-sm text-gray-600 hover:text-[#3563e9]">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}







