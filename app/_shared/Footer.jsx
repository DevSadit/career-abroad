import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 pb-2 md:grid-cols-2 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)_minmax(0,1.45fr)_minmax(0,1fr)] lg:gap-x-8 lg:gap-y-8">
          <div className="space-y-1">
            <Image
              src="/unnamed.png"
              width={200}
              height={200}
              alt="Career Abroad logo"
            />
            <p className="whitespace-nowrap text-sm italic leading-relaxed text-gray-600 sm:text-base">
              Turning Dreams into Reality
            </p>
          </div>

          <div>
            <h3
              className="mb-4 text-lg font-semibold"
              style={{ color: primaryColor }}
            >
              HELPFUL LINKS
            </h3>
            <ul className="space-y-3">
              {helpfulLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-600 transition-colors duration-200 hover:text-gray-900"
                  >
                    <span style={{ color: primaryColor }}>&rsaquo;</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              GET IN TOUCH
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((contact) => (
                <li key={contact.text} className="flex items-start space-x-2">
                  <contact.icon
                    className="mt-0.5 h-5 w-5"
                    style={{ color: primaryColor }}
                  />
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-gray-600 transition-colors duration-200 hover:text-gray-900 lg:whitespace-nowrap"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-gray-600">{contact.text}</span>
                  )}
                </li>
              ))}
            </ul>

            <Link
              href="https://language.ahsansuny.com/"
              target="_blank"
              rel="noreferrer"
              className="group mt-5 inline-flex max-w-full rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-2.5 transition-colors duration-200 hover:border-emerald-200 hover:bg-emerald-50"
            >
              <div className="flex items-center gap-2.5">
                <Image
                  src="/Language_Coach_logo.png"
                  width={56}
                  height={56}
                  alt="Language Coach logo"
                  className="h-14 w-14 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="text-lg font-semibold leading-tight text-slate-900 transition-colors duration-200 group-hover:text-emerald-900">
                    Language Coach
                  </p>
                  <p className="mt-0.5 text-sm leading-snug text-emerald-800">
                    Our Language Learning Platform
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              CONNECT WITH US
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <Link
                    target="_blank"
                    href={social.href}
                    className="group flex items-center space-x-3 text-gray-600 transition-colors duration-200 hover:text-gray-900"
                  >
                    <social.icon
                      className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
                      style={{ color: primaryColor }}
                    />
                    <span>{social.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-2">
          <p className="text-center text-sm text-gray-600">
            Copyright &copy; 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
