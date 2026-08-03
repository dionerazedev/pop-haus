import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pop Haus | Party Rentals & Balloon Decor in Charlotte, NC",
  description: "Tents, tables, chairs, concessions, games and custom balloon decor for unforgettable Charlotte celebrations.",
};

const designContract = `
THESIS: Pop Haus is the one Charlotte partner that supplies and styles the whole celebration; this page refuses the balloon-only hero and generic equal-card landing page.
OWN-WORLD: A garden-soirée service book in warm cream, deep plum, blush and champagne, with sharp serif headlines, precise sans-serif details, thin rules and photography-led editorial seams.
STORY: Visitors see the complete setup, compare transparent rental and balloon pricing, watch the work, then submit one event request.
FIRST VIEWPORT: Vertically commanding copy at left; a rental-dominant panoramic event scene at right; two actions at hand height and a three-part trust rail below.
FORM: Garden soirée service book, third grounded direction; seed a2c1cdb7; approved comp .impeccable/mocks/home-c.png.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><span className="design-contract" aria-hidden="true" dangerouslySetInnerHTML={{ __html: `<!-- ${designContract} -->` }}/>{children}</body></html>;
}
