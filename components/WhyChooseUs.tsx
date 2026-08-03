import { Icon } from "./Icon";

const benefits = [
  ["On-Time & Professional", "We show up, set up and make it stress-free."],
  ["Clean & Well-Maintained", "All rentals are cleaned and inspected."],
  ["Bilingual Support", "We speak English, Español & Português!"],
  ["Local & Trusted", "Proudly serving Charlotte, NC and surrounding areas."]
];

export function WhyChooseUs() {
  return <section className="why-section"><div className="site-container why-grid"><div><h2 className="section-title">Why Choose<br/><em>Pop Haus?</em></h2><p>One attentive local team from first question through final setup.</p></div><div className="benefit-list">{benefits.map(([title, copy]) => <article key={title}><div><h3>{title}</h3><p>{copy}</p></div><Icon name="spark"/></article>)}</div></div></section>;
}
