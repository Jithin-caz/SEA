import React from "react";
import { FaInstagram, FaRegEnvelope } from "react-icons/fa";

export const SocialIcons: React.FC = () => {
  return (
    <>
      <a href="mailto:space.eng.asc@gmail.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
        <FaRegEnvelope />
        <span className="sr-only">Mail</span>
      </a>
      <a href="https://www.instagram.com/aarohan_sea" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
        <FaInstagram />
        <span className="sr-only">Instagram account</span>
      </a>
      {/* Add more icons as needed */}
    </>
  );
};
