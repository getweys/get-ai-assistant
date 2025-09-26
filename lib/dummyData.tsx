import { SocialLinksTypes } from "@/types";
import { SA, US } from "country-flag-icons/react/3x2";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

export const SocialLinks: SocialLinksTypes[] = [
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

export const languages = [
  {
    id: "en",
    language: "English",

    flag: <US title="United States" className="" />,
  },
  {
    id: "ar",
    language: "Arabic",
    flag: <SA title="Arabic" className="" />,
  },
];
