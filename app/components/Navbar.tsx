"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home",       path: "/" },
  { label: "About",      path: "/about" },
  { label: "Project",    path: "/project" },
  { label: "Analysis",   path: "/analysis" },
  { label: "Interviews", path: "/interviews" },
  { label: "Impact",     path: "/impact" },
  { label: "Gallery",    path: "/gallery" },
  { label: "Videos",     path: "/videos" },
  { label: "Contact",    path: "/contact" },
];

export default function Navbar() {
  const pathname    = usePathname();
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [isDesktop,  setIsDesktop]  = useState(false);
  const [isMobile,   setIsMobile]   = useState(false);
  const [navHeight,  setNavHeight]  = useState(0);
  const navRef = useRef<HTMLElement>(null);

  const measure = () => {
    if (navRef.current) setNavHeight(navRef.current.offsetHeight);
  };

  // Close menu and re-measure when route changes
  useEffect(() => {
    setMenuOpen(false);
    // Wait for the 0.35s CSS close transition to finish, then remeasure
    const t = setTimeout(measure, 400);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setIsDesktop(w >= 1024);
      setIsMobile(w < 640);
      if (w >= 1024) setMenuOpen(false);
    };

    update();
    setTimeout(measure, 50);

    const onScroll = () => setScrolled(window.scrollY > 8);
    const onResize = () => { update(); setTimeout(measure, 50); };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Remeasure whenever menu toggles — after transition completes
  useEffect(() => {
    const t = setTimeout(measure, 400);
    return () => clearTimeout(t);
  }, [menuOpen, isDesktop]);

  // Responsive values
  const logoSize     = isDesktop ? 68 : isMobile ? 40 : 48;
  const logo2Size    = isDesktop ? 72 : isMobile ? 42 : 52;
  const titleSize    = isDesktop ? 18 : isMobile ? 13 : 15;
  const subtitleSize = isDesktop ? 12 : isMobile ? 10 : 11;
  const stripPadding = isDesktop ? "10px 32px" : isMobile ? "8px 12px" : "8px 20px";
  const logoGap      = isMobile ? 10 : 14;
  const dividerHeight = isDesktop ? 52 : 36;

  return (
    <>
      {/* Spacer — height tracks closed nav only */}
      <div style={{ height: navHeight }} aria-hidden="true" />

      <nav
        ref={navRef}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.18)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* ── Logo strip ── */}
        <div style={{ backgroundColor: "#faf8f4", borderBottom: "1px solid #f0d08a" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: stripPadding }}>

            {/* ── MOBILE LAYOUT (< 640px) ── */}
            {isMobile ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>

                {/* Top row: Logos + Hamburger */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: logoGap }}>
                    <Image src="/logo1.png" alt="Logo 1" width={logoSize} height={logoSize}
                      style={{ objectFit: "contain", width: logoSize, height: logoSize }} />
                    <Image src="/logo2.png" alt="Logo 2" width={logo2Size} height={logo2Size}
                      style={{ objectFit: "contain", width: logo2Size, height: logo2Size }} />
                    <Image src="/logo3.svg" alt="Logo 3" width={logoSize} height={logoSize}
                      style={{ objectFit: "contain", width: logoSize, height: logoSize }} />
                  </div>

                  <button
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                      display: "flex", flexDirection: "column", gap: 5,
                      padding: "8px 6px", background: "none", border: "none",
                      cursor: "pointer", borderRadius: 6, flexShrink: 0,
                    }}
                  >
                    <span style={{ display: "block", width: 24, height: 2, backgroundColor: "#7a3b00", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
                    <span style={{ display: "block", width: 24, height: 2, backgroundColor: "#7a3b00", borderRadius: 2, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
                    <span style={{ display: "block", width: 24, height: 2, backgroundColor: "#7a3b00", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
                  </button>
                </div>

                {/* Bottom row: Divider + Title */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 3, height: 32, backgroundColor: "#e8c87a", borderRadius: 2, flexShrink: 0 }} />
                  <div style={{ lineHeight: 1.35 }}>
                    <h1 style={{ margin: 0, fontSize: titleSize, fontWeight: 700, color: "#7a3b00", letterSpacing: "-0.2px", lineHeight: 1.3 }}>
                      Bhagabata Tungi Digital Archive
                    </h1>
                    <p style={{ margin: "2px 0 0", fontSize: subtitleSize, fontWeight: 500, color: "#b45309", lineHeight: 1.4 }}>
                      Preserving Sacred &amp; Cultural Heritage of Odisha
                    </p>
                  </div>
                </div>

              </div>
            ) : (
              /* ── TABLET / DESKTOP LAYOUT ── */
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, minWidth: 0, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: logoGap, flexShrink: 0 }}>
                    <Image src="/logo1.png" alt="Logo 1" width={logoSize} height={logoSize}
                      style={{ objectFit: "contain", width: logoSize, height: logoSize }} />
                    <Image src="/logo2.png" alt="Logo 2" width={logo2Size} height={logo2Size}
                      style={{ objectFit: "contain", width: logo2Size, height: logo2Size }} />
                    <Image src="/logo3.svg" alt="Logo 3" width={logoSize} height={logoSize}
                      style={{ objectFit: "contain", width: logoSize, height: logoSize }} />
                  </div>

                  <div style={{ width: 1, height: dividerHeight, backgroundColor: "#e8c87a", flexShrink: 0 }} />

                  <div style={{ lineHeight: 1.35, minWidth: 0 }}>
                    <h1 style={{ margin: 0, fontSize: titleSize, fontWeight: 700, color: "#7a3b00", letterSpacing: "-0.2px", whiteSpace: "nowrap", lineHeight: 1.2 }}>
                      Bhagabata Tungi Digital Archive
                    </h1>
                    <p style={{ margin: "3px 0 0", fontSize: subtitleSize, fontWeight: 500, color: "#b45309", whiteSpace: "nowrap", lineHeight: 1.4 }}>
                      Preserving Sacred &amp; Cultural Heritage of Odisha
                    </p>
                  </div>
                </div>

                {!isDesktop && (
                  <button
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                      display: "flex", flexDirection: "column", gap: 5,
                      padding: "8px 6px", background: "none", border: "none",
                      cursor: "pointer", borderRadius: 6, flexShrink: 0,
                    }}
                  >
                    <span style={{ display: "block", width: 24, height: 2, backgroundColor: "#7a3b00", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
                    <span style={{ display: "block", width: 24, height: 2, backgroundColor: "#7a3b00", borderRadius: 2, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
                    <span style={{ display: "block", width: 24, height: 2, backgroundColor: "#7a3b00", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ── Desktop nav bar ── */}
        {isDesktop && (
          <div style={{ backgroundColor: "#7a3b00" }}>
            <div style={{
              maxWidth: 1280, margin: "0 auto", padding: "0 32px",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    style={{
                      position: "relative", display: "inline-block",
                      padding: "14px 22px", fontSize: 13.5, fontWeight: 600,
                      letterSpacing: "0.3px", textDecoration: "none", whiteSpace: "nowrap",
                      color: isActive ? "#7a3b00" : "#fde8c4",
                      backgroundColor: isActive ? "#faf8f4" : "transparent",
                      transition: "background-color 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#8f4700";
                        (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                        (e.currentTarget as HTMLAnchorElement).style.color = "#fde8c4";
                      }
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, backgroundColor: "#f59e0b" }} />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Mobile/tablet dropdown ── */}
        {!isDesktop && (
          <div style={{
            backgroundColor: "#7a3b00", overflow: "hidden",
            maxHeight: menuOpen ? 600 : 0,
            opacity: menuOpen ? 1 : 0,
            transition: "max-height 0.35s ease, opacity 0.25s ease",
            borderTop: "1px solid #a05000",
          }}>
            <div style={{ padding: "10px 16px 14px", display: "flex", flexDirection: "column", gap: 3 }}>
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "flex", alignItems: "center", gap: 10,
                      padding: "11px 14px", borderRadius: 8,
                      fontSize: 14, fontWeight: 600, textDecoration: "none",
                      color: isActive ? "#7a3b00" : "#fde8c4",
                      backgroundColor: isActive ? "#faf8f4" : "transparent",
                      transition: "background-color 0.2s",
                    }}
                  >
                    {isActive && (
                      <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#f59e0b", flexShrink: 0 }} />
                    )}
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
