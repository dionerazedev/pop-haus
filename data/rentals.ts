export type RentalCategory = "Tables & Chairs" | "Tents" | "Add-ons" | "Concessions" | "Outdoor Games";

export type RentalItem = {
  name: string;
  price: string;
  detail?: string;
};

export type RentalGroup = {
  category: RentalCategory;
  description: string;
  items: RentalItem[];
};

export const rentalGroups: RentalGroup[] = [
  {
    category: "Tables & Chairs",
    description: "Clean essentials for seated dinners, cocktail hours and everything between.",
    items: [
      { name: "Standard Foldable Chair", price: "$2" },
      { name: "Resin Chair White", price: "$4" },
      { name: "6 ft Folding Table", price: "$10" },
      { name: "60 inch Round Foldable Table", price: "$14", detail: "Fits 8–10 people" },
      { name: "32 inch Specialty Cocktail Table", price: "$15", detail: "Includes black or white tablecloth" },
      { name: "Chair Covers", price: "$1", detail: "Available in multiple colors" },
      { name: "Disposable Table Cover", price: "$2", detail: "Not a rental — customer keeps it" },
      { name: "Table Linen", price: "$8", detail: "Pressed and cleaned" }
    ]
  },
  {
    category: "Tents",
    description: "Flexible shelter options for intimate gatherings and larger celebrations.",
    items: [
      { name: "10x10 Pop-up Tent", price: "$50" },
      { name: "10x20 Pop-up Tent", price: "$100" },
      { name: "10x30 Pop-up Tent", price: "$150" },
      { name: "20x20 Tent Rental", price: "$185" },
      { name: "20x30 Tent Rental", price: "$260" },
      { name: "20x40 Tent Rental", price: "$345" }
    ]
  },
  {
    category: "Add-ons",
    description: "Comfort and atmosphere upgrades that keep the celebration going.",
    items: [
      { name: "Fan Rental", price: "$35" },
      { name: "Heaters", price: "$75 each" },
      { name: "String Lights", price: "$30" }
    ]
  },
  {
    category: "Concessions",
    description: "Party favorites, available as machine-only rentals or with select supplies.",
    items: [
      { name: "Popcorn Machine", price: "$50 / $75", detail: "Machine only / with supplies" },
      { name: "Cotton Candy Machine", price: "$50 / $75", detail: "Machine only / with supplies" },
      { name: "Hot Dog Roller Machine", price: "$50", detail: "Machine only — supplies not included" },
      { name: "Snow Cone Machine", price: "$50 / $75", detail: "Machine only / with supplies" }
    ]
  },
  {
    category: "Outdoor Games",
    description: "Oversized classics that make mingling easy for every age group.",
    items: [
      { name: "Giant Jenga", price: "$20" },
      { name: "Giant Connect Four", price: "$20" },
      { name: "Giant Cup Pong", price: "$20" },
      { name: "Giant Tic Tac Toe", price: "$20" }
    ]
  }
];

export const gamePackages = [
  { games: "2 Games", price: "$45" },
  { games: "3 Games", price: "$65" },
  { games: "4 Games", price: "$85" },
  { games: "5 Games", price: "$100" }
];

// Remove this object and the <AugustSpecial /> call when the promotion ends.
export const augustSpecial = {
  title: "August Special",
  includes: ["10x10 Pop-Up Tent", "16 Standard White Chairs", "2 6ft Tables"],
  original: "$102",
  price: "$90",
  note: "Delivery not included."
};
