import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const primaryColor = "#364bc5";

  const helpfulLinks = [
    { name: "Programs", href: "#courses" },
    { name: "Privacy policy", href: "#privacy" },
    { name: "Refund Policy", href: "#refund" },
    { name: "Terms & Conditions", href: "#terms" },
  ];

  const contactInfo = [
    {
      icon: MdEmail,
      text: "mentors.career.abroad26@gmail.com",
      href: "mailto:mentors.career.abroad26@gmail.com",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebook,
      href: "https://www.facebook.com/AhsanSunyOfficial",
    },
    {
      name: "Youtube",
      icon: FaYoutube,
      href: "https://www.youtube.com/@AhsanSuny",
    },
    {
      name: "Linkedin",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/career-abroad-mentor",
    },
    {
      name: "Telegram",
      icon: FaTelegram,
      href: "https://t.me/+XqNJTqNTww04YTRk",
    },
    {
      name: "Whatsapp",
      icon: FaWhatsapp,
      href: "https://chat.whatsapp.com/Lcbi3XgUSko1HEoBpgoKor?mode=ems_copy_t",
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-2">
          {/* Logo and Tagline Section */}
          <div className="space-y-1">
            <Image
              src="/unnamed.png"
              width={200}
              height={200}
              alt="Career Abroad logo"
            />
            <p className="text-base italic leading-relaxed text-gray-600">
              Where global education journey starts
            </p>
          </div>

          {/* Helpful Links Section */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: primaryColor }}
            >
              HELPFUL LINKS
            </h3>
            <ul className="space-y-3">
              {helpfulLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span style={{ color: primaryColor }}>›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              GET IN TOUCH
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <contact.icon
                    className="w-5 h-5 mt-0.5"
                    style={{ color: primaryColor }}
                  />
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 break-all"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-gray-600">{contact.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect with Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              CONNECT WITH US
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <Link
                    target="_blank"
                    href={social.href}
                    className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
                  >
                    <social.icon
                      className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                      style={{ color: primaryColor }}
                    />
                    <span>{social.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className=" pt-2 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">Copyright © 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
