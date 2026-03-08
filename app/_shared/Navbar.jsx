"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Course Contents", href: "/course-content" },
  {
    name: "Faq",
    href: "faq",
    dropdown: [
      { name: "France", href: "/faq/france" },
      { name: "Italy", href: "/faq/italy" },
      { name: "Belgium", href: "/faq/belgium" },
      { name: "Hungary", href: "/faq/hungary" },
      { name: "Estonia", href: "/faq/estonia" },
    ],
  },
];

const contactUrl = "https://wa.me/34613593236";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const scrollFrameRef = useRef(null);

  useEffect(() => {
    const controlNavbar = () => {
      if (scrollFrameRef.current !== null) return;

      scrollFrameRef.current = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollYRef.current;

        if (currentScrollY <= 24 || menuOpen) {
          setVisible(true);
        } else if (delta > 10 && currentScrollY > 80) {
          setVisible(false);
        } else if (delta < -10) {
          setVisible(true);
        }

        lastScrollYRef.current = currentScrollY;
        scrollFrameRef.current = null;
      });
    };

    lastScrollYRef.current = window.scrollY;
    window.addEventListener("scroll", controlNavbar, { passive: true });

    return () => {
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setOpenMobileDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setOpenMobileDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((current) => {
      if (current) {
        setOpenMobileDropdown(null);
      }
      return !current;
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 md:py-4 bg-white backdrop-blur-[2px] shadow-sm transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src="/unnamed.png"
            width={100}
            height={100}
            alt="Career Abroad logo"
          />
        </Link>

        <div className="flex items-center md:hidden">
          <Link
            target="_blank"
            rel="noreferrer"
            href={contactUrl}
            className="mr-3 bg-[#364bc5] px-3 py-1.5 rounded text-sm text-white transition-transform duration-300 hover:shadow-md"
          >
            Contact Us!
          </Link>

          <button
            ref={buttonRef}
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-950 focus:outline-none"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${menuOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${menuOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => {
            const hasDropdown =
              Array.isArray(link.dropdown) && link.dropdown.length > 0;
            const isDesktopOpen = openDesktopDropdown === link.name;

            if (!hasDropdown) {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-black relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </Link>
              );
            }

            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setOpenDesktopDropdown(link.name)}
                onMouseLeave={() => setOpenDesktopDropdown(null)}
                onFocusCapture={() => setOpenDesktopDropdown(link.name)}
                onBlurCapture={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setOpenDesktopDropdown(null);
                  }
                }}
              >
                <button
                  type="button"
                  aria-expanded={isDesktopOpen}
                  className="text-black relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                  onClick={() =>
                    setOpenDesktopDropdown((current) =>
                      current === link.name ? null : link.name,
                    )
                  }
                >
                  {link.name}
                </button>

                <div
                  className={`absolute left-0 top-full pt-3 transition-all duration-200 ${
                    isDesktopOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="min-w-56 rounded-xl border border-gray-200 bg-white shadow-lg p-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors"
                        onClick={() => setOpenDesktopDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <Link
            target="_blank"
            rel="noreferrer"
            href={contactUrl}
            className="bg-[#364bc5] px-4 py-2 rounded text-xl text-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            Contact Us!
          </Link>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`
          absolute left-0 right-0 top-full z-20 w-full bg-white border-b border-gray-900 md:hidden
          transform transition-all duration-500 ease-in-out overflow-hidden backdrop-blur-sm
          ${
            menuOpen
              ? "max-h-96 opacity-100 scale-y-100"
              : "max-h-0 opacity-0 scale-y-95"
          }
        `}
      >
        <div className="px-2 py-4 space-y-3 flex flex-col items-center">
          {navLinks.map((link, index) => {
            const hasDropdown =
              Array.isArray(link.dropdown) && link.dropdown.length > 0;
            const isOpen = openMobileDropdown === link.name;

            if (!hasDropdown) {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    block px-5 py-2.5 text-base font-medium text-gray-900 hover:text-black
                    hover:bg-[#f9004d]/20 rounded-md transition-all duration-300
                    ${menuOpen ? "animate-fadeIn" : ""}
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                    opacity: menuOpen ? 1 : 0,
                    transition: `transform 400ms ease ${
                      index * 50
                    }ms, opacity 400ms ease ${index * 50}ms`,
                  }}
                  onClick={() => {
                    setMenuOpen(false);
                    setOpenMobileDropdown(null);
                  }}
                >
                  {link.name}
                </Link>
              );
            }

            return (
              <div
                key={link.name}
                className="w-full flex flex-col items-center"
              >
                <button
                  type="button"
                  className={`
                    block px-5 py-2.5 text-base font-medium text-gray-900 hover:text-black
                    hover:bg-[#f9004d]/20 rounded-md transition-all duration-300 w-fit
                    ${menuOpen ? "animate-fadeIn" : ""}
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                    opacity: menuOpen ? 1 : 0,
                    transition: `transform 400ms ease ${
                      index * 50
                    }ms, opacity 400ms ease ${index * 50}ms`,
                  }}
                  onClick={() =>
                    setOpenMobileDropdown((current) =>
                      current === link.name ? null : link.name,
                    )
                  }
                >
                  {link.name}
                </button>

                <div
                  className={`w-full max-w-xs overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors"
                        onClick={() => {
                          setMenuOpen(false);
                          setOpenMobileDropdown(null);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
