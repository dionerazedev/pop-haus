import Image from "next/image";

const images = [
  { src: "/images/pop-haus-hero.png", alt: "Complete outdoor party setup with tent, tables, chairs and balloons", className: "gallery-wide" },
  { src: "/images/balloon-installation.png", alt: "First birthday balloon installation with marquee number", className: "gallery-tall" },
  { src: "/images/rental-tent.png", alt: "Large white rental tent with tables and chairs", className: "gallery-standard" },
  { src: "/images/pop-haus-hero.png", alt: "Styled dining tables and white rental chairs on a green lawn", className: "gallery-standard crop-left" },
  { src: "/images/balloon-installation.png", alt: "Blush and champagne balloon detail around an arched backdrop", className: "gallery-wide crop-top" }
];

// TODO: Replace the generated demonstration gallery set below with approved Pop Haus photography.

export function Gallery() {
  return <section id="gallery" className="gallery-section section" aria-labelledby="gallery-title"><div className="site-container"><h2 id="gallery-title" className="section-title centered">Magic in Every Setup</h2><p className="gallery-media-note">Sample imagery — replace with approved Pop Haus photography.</p><div className="gallery-grid">{images.map((item, index) => <figure className={`${item.className} reveal`} key={index}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 50vw"/></figure>)}</div></div></section>;
}
