import Image from "next/image";
import { Icon } from "./Icon";

export function About() {
  return <section id="about" className="about-section section" aria-labelledby="about-title"><div className="site-container about-layout">
    <figure className="about-photo"><Image src="/images/hector-pop-haus.png.png" alt="Hector from Pop Haus Balloon Co." width={333} height={461} sizes="(max-width: 700px) 100vw, 360px"/></figure>
    <div><h2 id="about-title" className="section-title">Meet Hector</h2><p className="about-lead">Hi, I’m Hector — the balloon guy behind Pop Haus Balloon Co.</p><p>I believe parties should be exciting, not exhausting.</p><p>I take care of the setup, styling, and little details so clients can actually enjoy the celebration.</p><p>Using high-quality balloons and bold designs, I help bring each vision to life — whether it’s a birthday, baby shower, baptism, or any reason worth celebrating.</p><a className="text-link" href="#contact">Plan with Hector <Icon name="arrow"/></a></div>
  </div></section>;
}
