import React from "react";
import { DiscordIcon, FacebookIcon, TwitterIcon } from "./svgImages";
import { FaInstagram } from "react-icons/fa";

export const SocialIcons: React.FC = () => {
  return (
    <>
      <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
        <FacebookIcon />
        <span className="sr-only">Facebook page</span>
      </a>
      <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
        <DiscordIcon />
        <span className="sr-only">Discord community</span>
      </a>
      <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
        <TwitterIcon />
        <span className="sr-only">Twitter page</span>
      </a>
      <a href="https://www.instagram.com/aarohan_sea" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
        <FaInstagram />
        <span className="sr-only">Instagram account</span>
      </a>
      {/* Add more icons as needed */}
    </>
  );
};
