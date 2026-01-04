"use client";

import { useEffect } from "react";

export default function NavbarLinkHandler() {
  useEffect(() => {
    // Function to handle navbar link clicks
    const handleNavLinkClick = (e) => {
      // Check if the clicked element is a navbar link with a hash
      const isNavLink =
        e.target.tagName === "A" &&
        e.target.getAttribute("href")?.startsWith("#") &&
        e.target.closest("nav");

      if (isNavLink) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement && window.lenis) {
          // Scroll to the target element using Lenis
          window.lenis.scrollTo(targetElement, {
            offset: 0, // You can adjust this offset if needed
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    // Add event listener to the document
    document.addEventListener("click", handleNavLinkClick);

    // Clean up
    return () => {
      document.removeEventListener("click", handleNavLinkClick);
    };
  }, []);

  return null; // This component doesn't render anything
}
