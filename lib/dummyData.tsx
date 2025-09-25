import { socialLinksTypes } from "@/types";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

export const SocialLinks: socialLinksTypes[] = [
  {
    id: 1,
    title: "LinkedIn",
    icon: <FiLinkedin />,
    onClick: () => {},
  },
  {
    id: 2,
    title: "twitter",
    icon: <FiTwitter />,
    onClick: () => {},
  },
  {
    id: 3,
    title: "facebook",
    icon: <FiFacebook />,
    onClick: () => {},
  },
];
