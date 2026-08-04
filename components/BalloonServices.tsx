import Image from "next/image";
import { bouquets, garlands, installations, type BalloonService } from "@/data/balloonServices";
import { Icon } from "./Icon";

const balloonExamples = [
  {
    title: "Balloons & Backdrops",
    label: "Baby Shower Balloon Backdrop",
    src: "/images/balloon-oh-baby.jpg",
    alt: "Blush pink and white Oh Baby balloon backdrop by Pop Haus Balloon Co.",
    className: "example-oh-baby"
  },
  {
    title: "Custom Birthday Decor",
    label: "18th Birthday Balloon Setup",
    src: "/images/balloon-18th-birthday.jpg",
    alt: "Pink and gold 18th birthday balloon backdrop by Pop Haus Balloon Co.",
    className: "example-18th"
  },
  {
    title: "First Birthday Decor",
    label: "First Trip Around the Sun",
    src: "/images/balloon-first-trip-sun.jpg",
    alt: "Colorful first birthday balloon setup with marquee number one by Pop Haus Balloon Co.",
    className: "example-sun"
  }
];

function ServiceList({ title, items }: { title: string; items: BalloonService[] }) {
  return <div className="balloon-list reveal"><h3>{title}</h3>{items.map(item => <div className="balloon-row" key={item.name}><div><strong>{item.name}</strong>{item.detail && <span>{item.detail}</span>}</div>{item.price && <b>{item.price}</b>}</div>)}</div>;
}

export function BalloonServices() {
  return <section id="balloons" className="balloon-section section" aria-labelledby="balloons-title">
    <div className="site-container">
      <div className="balloon-opening">
        <div className="balloon-photo reveal">
          <Image src="/images/balloon-18th-birthday.jpg" alt="Pink and gold 18th birthday balloon backdrop by Pop Haus Balloon Co." fill sizes="(max-width: 850px) 100vw, 42vw"/>
          <span>18th Birthday Balloon Setup</span>
        </div>
        <div className="balloon-intro">
          <Image className="section-brand-logo" src="/images/pop-haus-balloon-logo.png" alt="Pop Haus Balloon Co. logo" width={92} height={92}/>
          <h2 id="balloons-title" className="section-title">Balloon Services</h2>
          <p>From pickup-ready garlands to custom installations, every design is shaped around your palette, space and reason to celebrate.</p>
          <ServiceList title="Balloon Installations" items={installations}/>
        </div>
      </div>
      <div className="balloon-columns"><ServiceList title="Balloon Garlands" items={garlands}/><ServiceList title="Balloon Bouquets" items={bouquets}/></div>
      <div className="balloon-examples" aria-label="Pop Haus Balloon Co. real event examples">
        {balloonExamples.map((example) => <figure className={`balloon-example ${example.className} reveal`} key={example.src}>
          <Image src={example.src} alt={example.alt} fill sizes="(max-width: 700px) 100vw, 32vw"/>
          <figcaption><span>{example.title}</span><strong>{example.label}</strong></figcaption>
        </figure>)}
      </div>
      <div className="grab-go reveal">
        <div><h3>Grab &amp; Go Garlands</h3><p>Our Grab &amp; Go Garlands are pre-assembled and ready for pickup — perfect for quick, stylish setups without the need for full installation.</p><p>Just grab, hang, and enjoy.</p><div className="perfect-for"><strong>Perfect for</strong><span>Birthdays</span><span>Cake tables</span><span>Backdrops</span><span>Photoshoots</span><span>Intimate events</span></div></div>
        <div className="garland-size-image"><Image src="/images/grab-and-go-garland-sizes.png" alt="Pop Haus Grab and Go balloon garland sizes from 3 feet to 10 feet" width={1195} height={295} sizes="(max-width: 900px) calc(100vw - 48px), 55vw"/></div>
        <div className="size-picker"><span>Available sizes</span><div>{["3 ft", "4 ft", "6 ft", "8 ft", "10 ft"].map(size => <b key={size}>{size}</b>)}</div><a className="button" href="#contact">Order Now <Icon name="arrow"/></a></div>
      </div>
      <div className="custom-design reveal">
        <div><h3>Custom Designs</h3><p>Looking for something truly unforgettable?</p></div>
        <div><p>Our custom installations are designed to make a bold, one-of-a-kind statement. We’ll explore creative concepts and tailor every detail to your space and style — pushing boundaries to create balloon art that leaves a lasting impression.</p><a className="text-link light" href="mailto:pophausballoonco@gmail.com">pophausballoonco@gmail.com <Icon name="arrow"/></a></div>
        <dl><div><dt>Consultation</dt><dd>Required</dd></div><div><dt>Local booking minimum</dt><dd>$1,200</dd></div><div><dt>Lead time</dt><dd>Inquire 1 month ahead</dd></div></dl>
        <a className="button button-light" href="#contact">Inquire About a Custom Design</a>
      </div>
    </div>
  </section>;
}
