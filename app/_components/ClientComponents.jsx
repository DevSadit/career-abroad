"use client";

import SmoothScroll from "./SmoothScroll";
import NavbarLinkHandler from "./NavbarLinkHandler";
import AIMentorWidget from "./AIMentorWidget";

export default function ClientComponents({ children }) {
  return (
    <>
      <SmoothScroll>
        <NavbarLinkHandler />
        {children}
      </SmoothScroll>
      <AIMentorWidget />
    </>
  );
}
