import React from "react";
import { DiscordIcon, FacebookIcon, GitHubIcon, TwitterIcon } from "./svgImages";

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
      <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
        <GitHubIcon />
        <span className="sr-only">GitHub account</span>
      </a>
      {/* Add more icons as needed */}
    </>
  );
};
