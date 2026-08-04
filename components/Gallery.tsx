import Image from "next/image";

const images = [
  { src: "/images/balloon-18th-birthday.jpg", alt: "Pink and gold 18th birthday balloon backdrop by Pop Haus Balloon Co.", caption: "18th Birthday Balloon Setup", className: "gallery-tall crop-18" },
  { src: "/images/balloon-oh-baby.jpg", alt: "Blush pink and white Oh Baby balloon backdrop by Pop Haus Balloon Co.", caption: "Baby Shower Balloon Backdrop", className: "gallery-standard crop-oh-baby" },
  { src: "/images/balloon-first-trip-sun.jpg", alt: "Colorful first birthday balloon setup with marquee number one by Pop Haus Balloon Co.", caption: "First Trip Around the Sun", className: "gallery-standard crop-sun" },
  { src: "/images/pop-haus-hero.png", alt: "Complete outdoor party setup with tent, tables, chairs and balloons", caption: "Full Party Setup", className: "gallery-wide crop-left" },
  { src: "/images/rental-tent.png", alt: "Large white rental tent with tables and chairs", caption: "Tent, Tables & Chairs", className: "gallery-standard" },
  { src: "/images/balloon-installation.png", alt: "Blush and champagne balloon detail around an arched backdrop", caption: "Neutral Balloon Installation", className: "gallery-standard crop-top" }
];

export function Gallery() {
  return <section id="gallery" className="gallery-section section" aria-labelledby="gallery-title"><div className="site-container"><h2 id="gallery-title" className="section-title centered">Magic in Every Setup</h2><div className="gallery-grid">{images.map((item, index) => <figure className={`${item.className} reveal`} key={index}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 50vw"/><figcaption>{item.caption}</figcaption></figure>)}</div></div></section>;
}
