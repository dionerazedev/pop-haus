"use client";

import { FormEvent, useState } from "react";
import { Icon } from "./Icon";

const categories = ["Tables & Chairs", "Tents", "Concessions", "Outdoor Games", "Linens", "Balloon Decor", "Custom Installation"];

export function BookingForm() {
  const [fulfillment, setFulfillment] = useState("Pickup");
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return <section id="contact" className="booking-section section" aria-labelledby="booking-title"><div className="site-container booking-layout">
    <div className="booking-copy"><h2 id="booking-title" className="section-title">Plan Your Event</h2><p>We’re happy to help with your event rentals and balloon decor.</p><div className="booking-note"><Icon name="calendar"/><p>Availability, pricing and delivery fees are confirmed after review. Your date is secured once a deposit is received.</p></div><a href="tel:+17049169682">Prefer to talk? <strong>(704) 916-9682</strong></a></div>
    <form className="booking-form" onSubmit={submit}>
      <div className="form-grid">
        <label><span>First Name</span><input name="firstName" autoComplete="given-name" required/></label>
        <label><span>Last Name</span><input name="lastName" autoComplete="family-name" required/></label>
        <label><span>Email</span><input name="email" type="email" autoComplete="email" required/></label>
        <label><span>Phone Number</span><input name="phone" type="tel" autoComplete="tel" required/></label>
        <label className="full"><span>Home Address</span><input name="homeAddress" autoComplete="street-address"/></label>
        <label><span>City</span><input name="city" autoComplete="address-level2"/></label>
        <label><span>State</span><input name="state" defaultValue="NC" autoComplete="address-level1"/></label>
        <label><span>ZIP Code</span><input name="zip" inputMode="numeric" autoComplete="postal-code"/></label>
        <label><span>Event Date</span><input name="eventDate" type="date" required/></label>
      </div>
      <fieldset><legend>Pickup or Delivery</legend><div className="choice-row">{["Pickup", "Delivery"].map(option => <label className="choice" key={option}><input type="radio" name="fulfillment" value={option} checked={fulfillment === option} onChange={() => setFulfillment(option)}/><span>{option}</span></label>)}</div></fieldset>
      {fulfillment === "Delivery" && <label className="delivery-field"><span>Delivery Address</span><input name="deliveryAddress" autoComplete="street-address" required/></label>}
      <fieldset><legend>What can we help with?</legend><div className="choice-row service-choice">{["Party Rentals", "Balloon Decor", "Both"].map(option => <label className="choice" key={option}><input type="radio" name="service" value={option} required/><span>{option}</span></label>)}</div></fieldset>
      <fieldset><legend>Select categories</legend><div className="category-choices">{categories.map(option => <label className="checkbox-choice" key={option}><input type="checkbox" name="categories" value={option}/><span><Icon name="check"/>{option}</span></label>)}</div></fieldset>
      <label className="notes"><span>Tell us about your event</span><textarea name="notes" rows={5} placeholder="Guest count, colors, venue, quantities and anything else we should know."/></label>
      {submitted && <div className="form-success" role="status"><Icon name="check"/><p><strong>Your request is ready.</strong><span>This demo form is frontend-only. Connect your preferred service in the submit handler to deliver inquiries.</span></p></div>}
      <button className="button submit-button" type="submit">Send Event Request <Icon name="arrow"/></button>
    </form>
  </div></section>;
}
