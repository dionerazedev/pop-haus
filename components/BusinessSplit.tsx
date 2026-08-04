import Image from "next/image";
import { Icon } from "./Icon";

const rentalServices = ["Tents", "Tables & Chairs", "Concessions", "Linens", "Games & More"];
const balloonServices = ["Garlands", "Backdrops", "Bouquets", "Grab & Go", "Custom Designs"];

export function BusinessSplit() {
  return <section className="business-section section" aria-labelledby="business-title">
    <div className="site-container">
      <h2 id="business-title" className="section-title centered">Two Businesses.<br/><em>One Party Destination.</em></h2>
      <div className="business-spread">
        <article className="business-panel rental-panel reveal">
          <div className="business-image">
            {/* Placeholder rental scene source: replace with real Pop Haus rental setup photography when available. */}
            <Image src="/images/rental-tent.png" alt="White event tent with rows of rental tables and white chairs on a green lawn" fill sizes="(max-width: 800px) 100vw, 60vw"/>
          </div>
          <div className="business-content">
            <Image className="business-logo rental-logo" src="/images/pop-haus-party-rentals-logo.png" alt="Pop Haus Party Rentals logo" width={92} height={92}/>
            <h3>Pop Haus Party Rentals</h3>
            <p>Tents, tables, chairs, concessions, games and everything in between.</p>
            <ul>{rentalServices.map(service => <li key={service}>{service}</li>)}</ul>
            <a className="text-link" href="#rentals">View Rentals <Icon name="arrow"/></a>
          </div>
        </article>
        <article className="business-panel balloon-panel reveal">
          <div className="business-image">
            <Image src="/images/balloon-oh-baby.jpg" alt="Blush pink and white Oh Baby balloon backdrop by Pop Haus Balloon Co." fill sizes="(max-width: 800px) 100vw, 38vw"/>
          </div>
          <div className="business-content">
            <Image className="business-logo balloon-logo" src="/images/pop-haus-balloon-logo.png" alt="Pop Haus Balloon Co. logo" width={86} height={86}/>
            <h3>Pop Haus Balloon Co.</h3>
            <p>Custom balloon garlands, backdrops, bouquets and stunning event designs.</p>
            <ul>{balloonServices.map(service => <li key={service}>{service}</li>)}</ul>
            <a className="text-link" href="#balloons">View Balloon Decor <Icon name="arrow"/></a>
          </div>
        </article>
      </div>
    </div>
  </section>;
}
