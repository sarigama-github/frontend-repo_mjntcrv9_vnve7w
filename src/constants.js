export const PRODUCT = {
  id: "premium-backpack-v1",
  name: "Premium Multi-Utility All-Weather Backpack",
  tagline: "Meet the Backpack Built for Every Journey.",
  subtitle: "Weatherproof. Durable. Smartly Designed.",
  price: 5999,
  currency: "INR",
  benefits: [
    "All-weather resistant",
    "Premium zippers & materials",
    "Multi-compartment smart organization",
    "Lightweight yet rugged",
    "Anti-theft pockets",
    "Perfect for Travel / Work / Gym"
  ],
  colors: [
    { name: "Obsidian Black", value: "#0b0b0b" }
  ],
  highlights: {
    material: "600D recycled ballistic nylon with TPU coating",
    waterproof: "IPX4 weatherproof rated – protects against heavy rain",
    laptop: "Padded sleeve fits up to 16\" laptops",
    weight: "1.1 kg (empty)",
    capacity: "28L core, expandable to 34L"
  },
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1200&auto=format&fit=crop",
      alt: "Backpack in outdoor setting"
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
      alt: "Backpack in office"
    },
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
      alt: "Backpack travel scenario"
    },
    {
      src: "https://images.unsplash.com/photo-1528921581519-52b9d779df2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYWNrcGFjayUyMHRyYXZlbCUyMHNjZW5hcmlvfGVufDB8MHx8fDE3NjMxMzYyNTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
      alt: "Gym and road trip setup"
    }
  ],
  reviews: {
    count: 2000,
    items: [
      { name: "Aarav S.", rating: 5, quote: "Finally a bag that survives monsoons and boardrooms." },
      { name: "Maya R.", rating: 5, quote: "Pockets everywhere, yet it looks minimal. Love it!" },
      { name: "Kunal P.", rating: 4, quote: "Solid build, super comfy straps. Worth it." }
    ]
  },
  faqs: [
    { q: "What material is used?", a: "600D recycled ballistic nylon with a TPU weatherproof coating and YKK zippers." },
    { q: "Do you offer a warranty?", a: "Yes, 12-month limited warranty against manufacturing defects." },
    { q: "Return & refund policy?", a: "7-day no-questions-asked return. Full refund after quality check." },
    { q: "How long does shipping take?", a: "3–5 business days across India. Free shipping included." },
    { q: "What is the storage capacity?", a: "28L core capacity, expandable to 34L with the roll-top." },
    { q: "Laptop size support?", a: "Fits up to 16\" laptops in a padded sleeve." },
    { q: "What is the bag weight?", a: "Approx. 1.1 kg when empty." },
    { q: "Is it weatherproof?", a: "IPX4 rating. Withstands heavy rain; not submersible." },
    { q: "Are there different sizes?", a: "Currently one universal size optimized for daily carry and travel." },
    { q: "How to clean it?", a: "Wipe with a damp cloth. Avoid harsh detergents or machine washing." }
  ],
  variants: [
    {
      id: "v1-obsidian",
      name: "Variant 1 – Obsidian",
      price: 5999,
      colorOptions: [{ name: "Obsidian Black", value: "#0b0b0b" }],
      images: [
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
      ]
    }
  ]
}

export function formatPrice(amount, currency = "INR") {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency }).format(amount)
}
