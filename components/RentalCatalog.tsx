"use client";

import Image from "next/image";
import { useState } from "react";
import { augustSpecial, gamePackages, rentalGroups } from "@/data/rentals";
import { Icon } from "./Icon";

export function RentalCatalog() {
  const [active, setActive] = useState(rentalGroups[0].category);
  const group = rentalGroups.find(item => item.category === active)!;

  return <section id="rentals" className="rentals-section section" aria-labelledby="rentals-title">
    <div className="site-container">
      <div className="section-heading-row">
        <div><Image className="section-brand-logo" src="/images/pop-haus-party-rentals-logo.png" alt="Pop Haus Party Rentals logo" width={92} height={92}/><h2 id="rentals-title" className="section-title">Everything You Need<br/><em>for the Perfect Event</em></h2><p>Thoughtfully maintained essentials, transparent pricing and a team that makes setup simple.</p></div>
        <a className="button button-outline" href="#contact">Request Availability</a>
      </div>
      <div className="catalog-shell reveal">
        <div className="catalog-tabs" role="tablist" aria-label="Rental categories">
          {rentalGroups.map(item => <button key={item.category} role="tab" aria-selected={active === item.category} onClick={() => setActive(item.category)}>{item.category}</button>)}
        </div>
        <div className="catalog-body" role="tabpanel">
          <div className="catalog-intro"><h3>{group.category}</h3><p>{group.description}</p></div>
          <div className="price-list">
            {group.items.map(item => <div className="price-row" key={item.name}><div><strong>{item.name}</strong>{item.detail && <span>{item.detail}</span>}</div><b>{item.price}</b></div>)}
          </div>
        </div>
      </div>
      <div id="packages" className="package-grid">
        <article className="games-package reveal"><div><h3>Make room for play.</h3><p>Bundle our oversized lawn games and give every guest a reason to join in.</p></div><dl>{gamePackages.map(item => <div key={item.games}><dt>{item.games}</dt><dd>{item.price}</dd></div>)}</dl></article>
        <article className="promo-card reveal">
          <div className="promo-meta"><span>Limited-time offer</span><h3>{augustSpecial.title}</h3></div>
          <ul>{augustSpecial.includes.map(item => <li key={item}><Icon name="check"/>{item}</li>)}</ul>
          <div className="promo-price"><span>Original value <s>{augustSpecial.original}</s></span><strong>{augustSpecial.price}</strong><small>{augustSpecial.note}</small></div>
          <a className="button button-light" href="#contact">Reserve the Special</a>
        </article>
      </div>
    </div>
  </section>;
}
