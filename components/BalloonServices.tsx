import Image from "next/image";
import { bouquets, garlands, installations, type BalloonService } from "@/data/balloonServices";
import { Icon } from "./Icon";

function ServiceList({ title, items }: { title: string; items: BalloonService[] }) {
  return <div className="balloon-list reveal"><h3>{title}</h3>{items.map(item => <div className="balloon-row" key={item.name}><div><strong>{item.name}</strong>{item.detail && <span>{item.detail}</span>}</div>{item.price && <b>{item.price}</b>}</div>)}</div>;
}

export function BalloonServices() {
  return <section id="balloons" className="balloon-section section" aria-labelledby="balloons-title">
    <div className="site-container">
      <div className="balloon-opening">
        <div className="balloon-photo reveal"><Image src="/images/balloon-installation.png" alt="Organic blush, cream and gold Pop Haus-style balloon installation" fill sizes="(max-width: 850px) 100vw, 42vw"/><span className="media-note">Sample imagery</span></div>
        <div className="balloon-intro"><h2 id="balloons-title" className="section-title">Balloon Services</h2><p>From pickup-ready garlands to custom installations, every design is shaped around your palette, space and reason to celebrate.</p><ServiceList title="Balloon Installations" items={installations}/></div>
      </div>
      <div className="balloon-columns"><ServiceList title="Balloon Garlands" items={garlands}/><ServiceList title="Balloon Bouquets" items={bouquets}/></div>
      <div className="grab-go reveal">
        <div><h3>Grab &amp; Go Garlands</h3><p>Pre-assembled and ready for pickup — perfect for quick, stylish setups without a full installation. Just grab, hang, and enjoy.</p><div className="perfect-for"><strong>Perfect for</strong><span>Birthdays</span><span>Cake tables</span><span>Backdrops</span><span>Photoshoots</span><span>Intimate events</span></div></div>
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
