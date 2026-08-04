export type InstagramReel = {
  title: string;
  url: string;
  ariaLabel: string;
  fallbackImage: string;
  fallbackPosition: string;
};

export const instagramReels: InstagramReel[] = [
  {
    title: "Balloon Setup",
    url: "https://www.instagram.com/reel/DXcNLlRETnA/",
    ariaLabel: "Watch Pop Haus balloon setup on Instagram",
    fallbackImage: "/images/balloon-18th-birthday.jpg",
    fallbackPosition: "42% center"
  },
  {
    title: "Birthday Decor",
    url: "https://www.instagram.com/reel/DWPEx1NEdnT/",
    ariaLabel: "Watch Pop Haus birthday decor on Instagram",
    fallbackImage: "/images/balloon-first-trip-sun.jpg",
    fallbackPosition: "center"
  },
  {
    title: "Event Transformation",
    url: "https://www.instagram.com/reel/DGQwgToJ30F/",
    ariaLabel: "Watch Pop Haus event transformation on Instagram",
    fallbackImage: "/images/balloon-oh-baby.jpg",
    fallbackPosition: "44% center"
  },
  {
    title: "Behind the Scenes",
    url: "https://www.instagram.com/reel/CvKnkSWO0EE/",
    ariaLabel: "Watch Pop Haus behind the scenes on Instagram",
    fallbackImage: "/images/pop-haus-hero.png",
    fallbackPosition: "58% center"
  }
];

export const instagramCtaUrl = instagramReels[0].url;
