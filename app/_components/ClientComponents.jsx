"use client";

import SmoothScroll from "./SmoothScroll";
import NavbarLinkHandler from "./NavbarLinkHandler";

export default function ClientComponents({ children }) {
  return (
    <SmoothScroll>
      <NavbarLinkHandler />
      {children}
    </SmoothScroll>
  );
}
