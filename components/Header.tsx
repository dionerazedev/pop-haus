"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

const nav = [
  ["Home", "#home"], ["Rentals", "#rentals"], ["Balloon Decor", "#balloons"], ["Packages", "#packages"],
  ["Gallery", "#gallery"], ["About Us", "#about"], ["Contact Us", "#contact"]
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = nav.map(([, href]) => document.querySelector(href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(`#${visible.target.id}`);
    }, { rootMargin: "-25% 0px -65%", threshold: [0, .1, .5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return <>
    <div className="topbar">
      <div className="site-container topbar-inner">
        <span><Icon name="pin" size={15}/>Charlotte, NC</span>
        <span className="language">We speak English, Español &amp; Português!</span>
        <div className="topbar-links">
          {/* TODO: Replace these disabled controls with Pop Haus's real social profile URLs. */}
          <button type="button" disabled aria-label="Pop Haus Instagram link coming soon"><Icon name="instagram" size={16}/></button>
          <button type="button" disabled aria-label="Pop Haus Facebook link coming soon"><Icon name="facebook" size={16}/></button>
          <a href="tel:+17049169682"><Icon name="phone" size={15}/>(704) 916-9682</a>
        </div>
      </div>
    </div>
    <header className="header">
      <div className="site-container header-inner">
        <a href="#home" className="wordmark" aria-label="Pop Haus home">
          <strong>POP HAUS</strong><span>RENTALS · BALLOONS · EVENTS</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => <a key={href} href={href} className={active === href ? "active" : ""}>{label}</a>)}
        </nav>
        <a className="button button-small desktop-book" href="#contact">Book Now</a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>
          <Icon name={open ? "close" : "menu"} size={25}/>
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${open ? "open" : ""}`} aria-label="Mobile navigation">
        {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<Icon name="arrow"/></a>)}
        <a className="button" href="#contact" onClick={() => setOpen(false)}>Book Now</a>
      </nav>
    </header>
  </>;
}
