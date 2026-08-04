export type BalloonService = {
  name: string;
  price?: string;
  detail?: string;
};

export const installations: BalloonService[] = [
  { name: "Balloon Arches", price: "Starting at $300" },
  { name: "Balloons on Marquees", price: "Starting at $500" },
  { name: "Balloons & Backdrops", price: "Starting at $450" },
  { name: "Custom Designs", price: "Starting minimum $1,200", detail: "For local bookings; consultation required" }
];

export const garlands: BalloonService[] = [
  { name: "Deluxe Garland", price: "Starting at $25/ft", detail: "5\", 12\", 16\" and 24\" balloons · 12 ft minimum" },
  { name: "Deluxe Starburst", price: "Starting at $27/ft", detail: "Mixed balloon sizes with starburst foil accents · 12 ft minimum" },
  { name: "Deluxe Floral", price: "Starting at $30/ft", detail: "Mixed balloon sizes with premium florals · 12 ft minimum" }
];

export const bouquets: BalloonService[] = [
  { name: "Balloon Bouquets & Centerpieces", price: "Starting at $30" },
  { name: "Deluxe Balloon Bouquet", price: "Starting at $125" },
  { name: "Balloon Columns", price: "Starting at $125" }
];
