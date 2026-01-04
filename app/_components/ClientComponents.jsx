"use client";

import { useState } from "react";
import SmoothScroll from "./SmoothScroll";
import NavbarLinkHandler from "./NavbarLinkHandler";

export default function ClientComponents({ children }) {
  // Add client-side only rendering
  const [mounted, setMounted] = useState(true);

  // Only render client components after mounting on the client
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <SmoothScroll>
      <NavbarLinkHandler />
      {children}
    </SmoothScroll>
  );
}
