"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { instagramCtaUrl } from "@/data/reels";
import { Icon } from "./Icon";

const links = [["Home", "#home"], ["Rentals", "#rentals"], ["Balloon Decor", "#balloons"], ["Packages", "#packages"], ["Gallery", "#gallery"], ["About Us", "#about"], ["Contact Us", "#contact"]];

export function Footer() {
  const [newsletterMessage, setNewsletterMessage] = useState("");
  function handleNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNewsletterMessage("Newsletter signup is ready to connect to your email platform.");
  }

  return <footer className="footer"><div className="site-container">
    <div className="footer-main">
      <div className="footer-brand"><div className="footer-logos"><Image src="/images/pop-haus-party-rentals-logo.png" alt="Pop Haus Party Rentals logo" width={82} height={82}/><Image src="/images/pop-haus-balloon-logo.png" alt="Pop Haus Balloon Co. logo" width={68} height={68}/></div><p>Two businesses. One goal:<br/><em>Make your celebration unforgettable.</em></p><div className="social-links"><a href={instagramCtaUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram"/></a><span aria-label="Facebook profile"><Icon name="facebook"/></span></div></div>
      <div className="footer-contact"><h2>Contact</h2><a href="tel:+17049169682">(704) 916-9682</a><span>Charlotte, NC</span><a href="mailto:pophausballoonco@gmail.com">pophausballoonco@gmail.com</a></div>
      <div className="footer-links"><h2>Quick Links</h2>{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div>
      <div className="newsletter"><h2>Stay in the Loop</h2><p>Get updates, special offers and event ideas.</p><form onSubmit={handleNewsletter}><label><span className="sr-only">Email address</span><input type="email" placeholder="Email address" required/></label><button type="submit" aria-label="Prepare newsletter signup"><Icon name="arrow"/></button></form>{newsletterMessage && <small role="status">{newsletterMessage}</small>}</div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Pop Haus. All rights reserved.</span><div><span>Terms &amp; Support</span><span>Privacy Policy</span></div></div>
  </div></footer>;
}
