"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "./Icon";

type Reel = { title: string; kind: "local" | "external" | "instagram"; src?: string; image: string; position?: string };

// Replace src values with local MP4 files, external MP4 URLs or real Instagram Reel URLs.
// Demo MP4 source: https://www.pexels.com/video/enchanting-outdoor-wedding-ceremony-set-up-29956460/
const reels: Reel[] = [
  { title: "Full Party Setup", kind: "local", src: "/videos/full-party-setup.mp4", image: "/images/pop-haus-hero.png", position: "58% center" },
  { title: "Birthday Setup", kind: "instagram", image: "/images/balloon-installation.png", position: "center" },
  { title: "Baptism Decor", kind: "instagram", image: "/images/balloon-installation.png", position: "72% center" },
  { title: "First Birthday", kind: "instagram", image: "/images/balloon-installation.png", position: "30% center" },
  { title: "Balloon Installation", kind: "external", image: "/images/balloon-installation.png", position: "center" },
  { title: "Behind the Scenes", kind: "instagram", image: "/images/rental-tent.png", position: "center" }
];

export function VideoReels() {
  const [playing, setPlaying] = useState<string | null>(null);
  return <section className="reels-section section" aria-labelledby="reels-title">
    <div className="site-container reels-header"><div><h2 id="reels-title" className="section-title">Watch Our Magic<br/><em>in Action</em></h2><p>See how we bring events to life.</p></div>{/* TODO: Enable when the real Pop Haus Instagram URL is available. */}<button className="button button-outline" type="button" disabled>Watch More on Instagram</button></div>
    <div className="reel-track" aria-label="Event setup videos">
      {reels.map((reel, index) => <article className="reel-card" key={`${reel.title}-${index}`}>
        {playing === reel.title && reel.kind === "local" && reel.src ? <video src={reel.src} controls autoPlay playsInline aria-label={reel.title} poster={reel.image}/> : <>
          <Image src={reel.image} alt={`${reel.title} video preview`} fill sizes="270px" style={{objectPosition: reel.position}}/>
          <button className="reel-play" onClick={() => reel.kind === "local" ? setPlaying(reel.title) : undefined} aria-label={reel.kind === "local" ? `Play ${reel.title} video` : `${reel.title} — add a reel URL to enable playback`}><Icon name="play" size={25}/></button>
        </>}
        <div className="reel-label"><span>{reel.title}</span><small>{reel.kind === "local" ? "Video slot" : "Reel ready"}</small></div>
      </article>)}
    </div>
  </section>;
}
