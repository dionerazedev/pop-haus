"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { instagramCtaUrl } from "@/data/reels";
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
          <a href={instagramCtaUrl} target="_blank" rel="noreferrer" aria-label="Pop Haus Instagram reels"><Icon name="instagram" size={16}/></a>
          <span aria-label="Pop Haus Facebook profile pending"><Icon name="facebook" size={16}/></span>
          <a href="tel:+17049169682"><Icon name="phone" size={15}/>(704) 916-9682</a>
        </div>
      </div>
    </div>
    <header className="header">
      <div className="site-container header-inner">
        <a href="#home" className="wordmark" aria-label="Pop Haus home">
          <Image src="/images/pop-haus-party-rentals-logo.png" alt="Pop Haus Party Rentals logo" width={64} height={64} priority/>
          <span><strong>POP HAUS</strong><small>RENTALS · BALLOONS · EVENTS</small></span>
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
        <div className="mobile-nav-brand" aria-hidden="true">
          <Image src="/images/pop-haus-party-rentals-logo.png" alt="" width={54} height={54}/>
          <Image src="/images/pop-haus-balloon-logo.png" alt="" width={46} height={46}/>
        </div>
        {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<Icon name="arrow"/></a>)}
        <a className="button" href="#contact" onClick={() => setOpen(false)}>Book Now</a>
      </nav>
    </header>
  </>;
}
