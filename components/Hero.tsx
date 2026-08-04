import Image from "next/image";
import { Icon } from "./Icon";

const trusts = [
  ["Quality You Can Trust", "Clean, stylish & event-ready equipment."],
  ["Custom & Flexible", "Decor and rentals tailored to your vision."],
  ["Made for Memorable", "We handle the setup, you enjoy the moment."]
];

export function Hero() {
  return <section id="home" className="hero" aria-labelledby="hero-title">
    <div className="hero-grid site-container">
      <div className="hero-copy">
        <h1 id="hero-title">Your Party.<br/>Our Setup.<br/><em>Let’s Make It Pop!</em></h1>
        <p>Party rentals, tents, tables, chairs, concessions, games, and custom balloon decor — all in one place for unforgettable celebrations in Charlotte, NC.</p>
        <div className="hero-actions">
          <a className="button" href="#rentals">Browse Rentals <Icon name="arrow"/></a>
          <a className="button button-outline" href="#balloons">Explore Balloon Decor</a>
        </div>
      </div>
      <div className="hero-media">
        {/* Placeholder hero source: replace with real Pop Haus event photography showing rentals plus balloon decor. */}
        <Image src="/images/pop-haus-hero.png" alt="Elegant outdoor Pop Haus event with a large white tent, white chairs, linen-covered tables, cocktail tables and a blush balloon backdrop" priority fill sizes="(max-width: 900px) 100vw, 62vw"/>
        <div className="hero-caption"><span>Rentals</span><span>Styling</span><span>Setup</span></div>
      </div>
    </div>
    <div className="trust-strip site-container">
      {trusts.map(([title, copy]) => <div className="trust-item" key={title}><Icon name="check"/><p><strong>{title}</strong><span>{copy}</span></p></div>)}
    </div>
  </section>;
}
