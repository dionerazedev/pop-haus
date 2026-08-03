import { Icon } from "./Icon";

export function About() {
  return <section id="about" className="about-section section" aria-labelledby="about-title"><div className="site-container about-layout">
    <div className="about-mark"><span>PH</span><small>Charlotte<br/>North Carolina</small></div>
    <div><h2 id="about-title" className="section-title">Meet Hector</h2><p className="about-lead">Hi, I’m Hector — the balloon guy behind Pop Haus Balloon Co!</p><p>I believe parties should be exciting, not exhausting. I take care of the setup, styling and details so you can actually enjoy the celebration.</p><p>Using high-quality balloons and bold designs, I help bring your vision to life — whether it’s a birthday, baby shower, baptism or any reason worth celebrating.</p><a className="text-link" href="#contact">Plan with Hector <Icon name="arrow"/></a></div>
  </div></section>;
}
