"use client";

import { useEffect } from "react";
import { instagramCtaUrl, instagramReels, type InstagramReel } from "@/data/reels";
import { Icon } from "./Icon";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

function ReelCard({ reel }: { reel: InstagramReel }) {
  const fallbackStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(58,20,55,.2), rgba(58,20,55,.92)), url("${reel.fallbackImage}")`,
    backgroundPosition: reel.fallbackPosition
  };

  return <article className="reel-card" aria-label={reel.ariaLabel}>
    <blockquote
      className="instagram-media reel-embed"
      data-instgrm-permalink={reel.url}
      data-instgrm-version="14"
    >
      <a href={reel.url} target="_blank" rel="noreferrer" aria-label={reel.ariaLabel} style={fallbackStyle}>
        <span className="reel-fallback-play"><Icon name="play" size={25}/></span>
        <span className="reel-fallback-title">{reel.title}</span>
        <small>Open on Instagram</small>
      </a>
    </blockquote>
  </article>;
}

export function VideoReels() {
  useEffect(() => {
    const existing = document.getElementById("instagram-embed-script") as HTMLScriptElement | null;
    if (existing) {
      window.instgrm?.Embeds?.process();
      return;
    }

    const script = document.createElement("script");
    script.id = "instagram-embed-script";
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => window.instgrm?.Embeds?.process();
    document.body.appendChild(script);
  }, []);

  return <section className="reels-section section" aria-labelledby="reels-title">
    <div className="site-container reels-header"><div><h2 id="reels-title" className="section-title">Watch Our Magic<br/><em>in Action</em></h2><p>See how Pop Haus brings real events to life.</p></div><a className="button button-outline" href={instagramCtaUrl} target="_blank" rel="noreferrer">View More on Instagram <Icon name="arrow"/></a></div>
    <div className="reel-track" aria-label="Event setup videos">
      {instagramReels.map((reel) => <ReelCard reel={reel} key={reel.url}/>)}
    </div>
  </section>;
}
