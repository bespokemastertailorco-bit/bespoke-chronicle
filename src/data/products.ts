// Complete Product Catalog for The Bespoke Master
// 53 Products across 7 Collections

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  category: string;
  tags: string[];
  fabric_care?: string;
  shipping_returns?: string;
  badge?: string;
  status: "active" | "inactive";
}

// Size mappings for different garment types
export const SUIT_SIZES = [
  "UK 34 / US 34 / EU 44 / IN 34",
  "UK 36 / US 36 / EU 46 / IN 36",
  "UK 38 / US 38 / EU 48 / IN 38",
  "UK 40 / US 40 / EU 50 / IN 40",
  "UK 42 / US 42 / EU 52 / IN 42",
  "UK 44 / US 44 / EU 54 / IN 44",
  "CUSTOM FIT (Made to Measure)"
];

export const SHIRT_SIZES = [
  "UK 14 / US 14 / EU 35-36 / IN 35",
  "UK 14.5 / US 14.5 / EU 37 / IN 37",
  "UK 15 / US 15 / EU 38-39 / IN 39",
  "UK 15.5 / US 15.5 / EU 40-41 / IN 41",
  "UK 16 / US 16 / EU 42 / IN 42",
  "UK 16.5 / US 16.5 / EU 43-44 / IN 44",
  "CUSTOM (Bespoke Measurement)"
];

export const TROUSER_SIZES = [
  "Waist 28 / UK 28 / US 28 / EU 44 / IN 28",
  "Waist 30 / UK 30 / US 30 / EU 46 / IN 30",
  "Waist 32 / UK 32 / US 32 / EU 48 / IN 32",
  "Waist 34 / UK 34 / US 34 / EU 50 / IN 34",
  "Waist 36 / UK 36 / US 36 / EU 52 / IN 36",
  "Waist 38 / UK 38 / US 38 / EU 54 / IN 38",
  "CUSTOM FIT"
];

// ============================================
// COLLECTION: SUITS (10 products)
// ============================================
const suits: Product[] = [
  {
    id: "suit-001",
    name: "Bespoke Navy Wool Suit",
    price: 85000,
    description: "Crafted from a fine 120s Super Wool, this classic navy suit is a cornerstone of the modern gentleman's wardrobe. Hand-stitched lapels, floating canvas construction, and a clean two-button silhouette make it the perfect choice for boardroom to banquet. Available in single and double breasted. Fully bespoke — every detail made to your measure.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "suits",
    tags: ["Suits", "Bespoke", "Wool", "Navy"],
    fabric_care: "100% Super 120s wool. Dry clean only. Store on a proper hanger to maintain shape.",
    shipping_returns: "Bespoke items: 4–8 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days of delivery for unworn items.",
    status: "active"
  },
  {
    id: "suit-002",
    name: "Charcoal Herringbone Suit",
    price: 92000,
    description: "Woven in a timeless charcoal herringbone pattern from English Huddersfield wool, this suit commands respect in every room. The subtle texture adds visual depth while maintaining a strictly formal silhouette. Side vents, functioning sleeve buttons, and a half-lined jacket complete the tailoring pedigree.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "suits",
    tags: ["Suits", "Herringbone", "Wool", "Charcoal"],
    fabric_care: "English Huddersfield wool. Dry clean only. Brush regularly to maintain appearance.",
    shipping_returns: "Bespoke items: 4–8 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "suit-003",
    name: "Midnight Black Tuxedo Suit",
    price: 110000,
    description: "An impeccably constructed midnight black tuxedo with satin peak lapels and a single button fastening. Cut from a 110s wool barathea, it drapes with quiet authority. Includes matching flat-front trousers with a single satin side braid. The definitive black-tie statement.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "suits",
    tags: ["Suits", "Tuxedo", "Black Tie", "Wool"],
    badge: "Formal",
    fabric_care: "110s wool barathea with silk satin details. Professional dry clean only.",
    shipping_returns: "Bespoke items: 4–8 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "suit-004",
    name: "Light Grey Summer Suit",
    price: 72000,
    description: "A breathable light grey suit in a 100% Super 100s tropical wool — the ideal warm-weather companion for weddings, garden parties, and summer travel. Slim notch lapels, patch pockets, and an unlined jacket keep it relaxed yet refined.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "suits",
    tags: ["Suits", "Summer", "Tropical Wool", "Grey"],
    fabric_care: "100% Super 100s tropical wool. Dry clean recommended. Store in breathable garment bag.",
    shipping_returns: "Bespoke items: 4–8 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "suit-005",
    name: "Brown Tweed Country Suit",
    price: 78000,
    description: "Woven in a rich brown Harris Tweed, this country suit brings rustic sophistication to every occasion. Three-button single-breasted jacket with patch pockets and a half belt at the back. A nod to classic British tailoring heritage with contemporary Indian craftsmanship.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "suits",
    tags: ["Suits", "Tweed", "Harris Tweed", "Country"],
    fabric_care: "Harris Tweed wool. Dry clean only. Brush after each wear to remove dust.",
    shipping_returns: "Bespoke items: 4–8 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "suit-006",
    name: "Ivory Linen Suit",
    price: 65000,
    description: "Cut from pure Irish linen in warm ivory, this suit was designed for the man who makes an entrance. Ideal for destination weddings, resort events, and summer receptions. Single-breasted with a notch lapel and flap pockets — effortless, elegant, unmistakably bespoke.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "suits",
    tags: ["Suits", "Linen", "Ivory", "Summer"],
    badge: "Summer",
    fabric_care: "100% Irish linen. Dry clean recommended. Embrace natural creasing for character.",
    shipping_returns: "Bespoke items: 4–8 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "suit-007",
    name: "Chalk Stripe Navy Suit",
    price: 88000,
    description: "The chalk stripe suit is a power dressing icon revived with modern proportions. This navy flannel with thin chalk stripes carries old-world boardroom gravitas into the contemporary workspace. Hand-padded chest, pick-stitched lapels, and a strong shoulder line define its commanding presence.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "suits",
    tags: ["Suits", "Chalk Stripe", "Flannel", "Navy"],
    fabric_care: "Navy flannel wool. Dry clean only. Store with cedar blocks to protect from moths.",
    shipping_returns: "Bespoke items: 4–8 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "suit-008",
    name: "Double Breasted Blue Suit",
    price: 95000,
    description: "A 6x2 double-breasted suit in a rich cobalt blue that demands attention. Structured shoulders, wide peak lapels, and a slim-fit trouser create a silhouette rooted in 1930s British tailoring — reinterpreted for today's discerning gentleman. Lined in personalised bespoke silk.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "suits",
    tags: ["Suits", "Double Breasted", "Blue", "Silk Lined"],
    badge: "New",
    fabric_care: "Super 100s wool with silk lining. Dry clean only.",
    shipping_returns: "Bespoke items: 4–8 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "suit-009",
    name: "Pinstripe Business Suit",
    price: 82000,
    description: "Thin white pinstripes on a deep charcoal ground — a suit that has defined business formality for over a century. Constructed with a full canvas chest and hand-sewn buttonholes, the pinstripe suit from Bespoke Master is a career investment as much as a wardrobe one.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "suits",
    tags: ["Suits", "Pinstripe", "Business", "Charcoal"],
    fabric_care: "Premium worsted wool with full canvas construction. Dry clean only.",
    shipping_returns: "Bespoke items: 4–8 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "suit-010",
    name: "Three-Piece Wool Suit",
    price: 98000,
    description: "The three-piece suit remains the pinnacle of formal masculine dressing. This version in a rich dark charcoal wool features a six-button double-breasted waistcoat with welt pockets, a two-button jacket, and flat-front trousers. Impeccably structured for board meetings, weddings, and formal dinners.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "suits",
    tags: ["Suits", "Three Piece", "Waistcoat", "Charcoal"],
    badge: "Bespoke",
    fabric_care: "Dark charcoal wool. Dry clean only. Store waistcoat flat or on proper hanger.",
    shipping_returns: "Bespoke items: 4–8 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  }
];

// ============================================
// COLLECTION: BLAZERS (8 products)
// ============================================
const blazers: Product[] = [
  {
    id: "blazer-001",
    name: "Navy Hopsack Blazer",
    price: 42000,
    description: "The navy blazer is the most versatile garment in a gentleman's closet. Woven in a breathable Italian hopsack weave, this version is unlined for all-season comfort. Gold-tone buttons, patch pockets, and a clean two-button stance make it equally at home with grey flannel trousers or dark indigo denim.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "blazers",
    tags: ["Blazers", "Navy", "Hopsack", "Versatile"],
    fabric_care: "Italian hopsack wool, unlined. Dry clean recommended. Brush regularly.",
    shipping_returns: "Bespoke items: 4–8 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "blazer-002",
    name: "Camel Hair Blazer",
    price: 52000,
    description: "Luxuriously soft camel hair woven in England forms the basis of this timeless blazer. The warm tan-brown tone pairs beautifully with ivory trousers, grey flannels, or even dark jeans. A single-breasted three-button stance keeps it versatile across casual and business-casual contexts.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "blazers",
    tags: ["Blazers", "Camel Hair", "Luxury", "Tan"],
    badge: "Premium",
    fabric_care: "English camel hair. Dry clean only. Store with garment bag in dry conditions.",
    shipping_returns: "Bespoke items: 4–8 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "blazer-003",
    name: "Charcoal Wool Blazer",
    price: 38000,
    description: "A sharp charcoal wool blazer that bridges the gap between smart-casual and business formal. The medium-weight wool provides structure without stiffness, while the notch lapels and flap pockets keep the look modern. Pair with the matching trousers or contrast with navy or cream.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "blazers",
    tags: ["Blazers", "Charcoal", "Wool", "Business"],
    fabric_care: "Medium-weight wool. Dry clean only.",
    shipping_returns: "Bespoke items: 4–8 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "blazer-004",
    name: "Tan Linen Blazer",
    price: 34000,
    description: "Spun from Italian-sourced pure linen in a warm tan, this blazer is purpose-built for the summer season. A patch pockets design, soft unstructured shoulder, and half lining give it an easy, relaxed elegance suited to rooftop dinners and weekend afternoon events.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "blazers",
    tags: ["Blazers", "Linen", "Tan", "Summer"],
    badge: "Summer",
    fabric_care: "Italian linen, half-lined. Dry clean recommended. Embrace natural wrinkling.",
    shipping_returns: "Bespoke items: 4–8 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "blazer-005",
    name: "Black Evening Blazer",
    price: 48000,
    description: "A single-breasted black blazer cut for evening occasions — cocktail parties, intimate dinners, and cultural events. The wool-silk blend provides a subtle sheen under low light. Slim-cut with jetted pockets and a shawl or peak lapel option available on request.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "blazers",
    tags: ["Blazers", "Black", "Evening", "Wool-Silk"],
    badge: "Evening",
    fabric_care: "Wool-silk blend. Dry clean only. Store with tissue paper in pockets.",
    shipping_returns: "Bespoke items: 4–8 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "blazer-006",
    name: "Burgundy Velvet Blazer",
    price: 58000,
    description: "Reserved for men who understand that dressing is an art form, the burgundy velvet blazer is a statement of supreme confidence. Cotton-silk velvet with a rich pile, contrast satin lapels, and hand-sewn buttons make this the definitive festive-season jacket. Limited pieces crafted per season.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "blazers",
    tags: ["Blazers", "Velvet", "Burgundy", "Limited"],
    badge: "Limited",
    fabric_care: "Cotton-silk velvet with satin lapels. Professional dry clean only. Store flat.",
    shipping_returns: "Bespoke items: 4–8 weeks delivery. Limited pieces. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "blazer-007",
    name: "Grey Herringbone Blazer",
    price: 44000,
    description: "A mid-grey herringbone weave blazer that carries the understated elegance of English tailoring tradition. The soft structure and slightly suppressed waist give it a contemporary fit while the heritage weave maintains its timeless character. A cornerstone blazer for every serious wardrobe.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "blazers",
    tags: ["Blazers", "Herringbone", "Grey", "Classic"],
    fabric_care: "Herringbone wool. Dry clean only.",
    shipping_returns: "Bespoke items: 4–8 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "blazer-008",
    name: "Navy Double Breasted Blazer",
    price: 55000,
    description: "A 6x2 double-breasted navy blazer with wide peak lapels and polished gold buttons. Constructed in a medium-weight Super 100s wool, it provides structure and drape in equal measure. A powerful choice for formal occasions and business environments where presence matters.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "blazers",
    tags: ["Blazers", "Double Breasted", "Navy", "Formal"],
    badge: "New",
    fabric_care: "Super 100s wool with gold buttons. Dry clean only.",
    shipping_returns: "Bespoke items: 4–8 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  }
];

// ============================================
// COLLECTION: COATS (6 products)
// ============================================
const coats: Product[] = [
  {
    id: "coat-001",
    name: "Camel Cashmere Overcoat",
    price: 145000,
    description: "The finest garment in any winter wardrobe — a full-length camel cashmere overcoat of exceptional weight and warmth. Crafted from Grade A Scottish cashmere with a structured shoulder and clean notch lapel. Fly-front buttoning, deep side pockets, and a beautifully draped silhouette make this the coat every gentleman deserves.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "coats",
    tags: ["Coats", "Cashmere", "Camel", "Overcoat"],
    badge: "Luxury",
    fabric_care: "Grade A Scottish cashmere. Professional dry clean only. Store with cedar and moth protection.",
    shipping_returns: "Bespoke items: 6–10 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "coat-002",
    name: "Navy Wool Topcoat",
    price: 95000,
    description: "A versatile, structured navy topcoat in a 16oz Merino wool. The classic silhouette — straight cut, notch lapels, hidden button fly — works over suits, blazers, or casual knits with equal elegance. A coat for the urban professional who commutes between winter board meetings and evening engagements.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "coats",
    tags: ["Coats", "Topcoat", "Navy", "Merino"],
    fabric_care: "16oz Merino wool. Dry clean only.",
    shipping_returns: "Bespoke items: 6–10 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "coat-003",
    name: "Charcoal Chesterfield Coat",
    price: 110000,
    description: "The Chesterfield is the most distinguished of all overcoats — and this charcoal version with velvet collar detail is its finest expression. Single-breasted, knee-length, and cut with a defined waist, it is the signature coat of old-world tailoring carried beautifully into the modern era.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "coats",
    tags: ["Coats", "Chesterfield", "Charcoal", "Velvet Collar"],
    badge: "Classic",
    fabric_care: "Premium wool with velvet collar. Dry clean only.",
    shipping_returns: "Bespoke items: 6–10 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "coat-004",
    name: "Black Cashmere Overcoat",
    price: 160000,
    description: "A full-length black cashmere overcoat representing the absolute pinnacle of outerwear luxury. Woven in a blended Mongolian cashmere, it falls below the knee with a clean, fluid line. Fully silk-lined, with hand-finished buttonholes and a peak lapel option — for the man who settles for nothing less than exceptional.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "coats",
    tags: ["Coats", "Cashmere", "Black", "Overcoat"],
    badge: "Premium",
    fabric_care: "Mongolian cashmere with silk lining. Professional dry clean only.",
    shipping_returns: "Bespoke items: 6–10 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "coat-005",
    name: "Herringbone Tweed Overcoat",
    price: 88000,
    description: "A brown-grey herringbone tweed overcoat that channels the timeless spirit of British country dressing. Thick, warm, and built to last decades, this coat features a three-button stance, ticket pocket, and horn buttons. Equally at home in Edinburgh in January or Indore in December.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "coats",
    tags: ["Coats", "Tweed", "Herringbone", "Country"],
    fabric_care: "Herringbone tweed with horn buttons. Dry clean only.",
    shipping_returns: "Bespoke items: 6–10 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "coat-006",
    name: "Trench Coat",
    price: 78000,
    description: "The iconic trench coat reinvented with bespoke-grade construction. Storm shield, epaulettes, D-ring belt, and a full cotton-gabardine outer shell with a removable wool inner lining. In a classic stone-khaki that works year-round across every continent and climate.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "coats",
    tags: ["Coats", "Trench", "Cotton", "Classic"],
    fabric_care: "Cotton gabardine with removable wool lining. Dry clean recommended.",
    shipping_returns: "Bespoke items: 6–10 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  }
];

// ============================================
// COLLECTION: TROUSERS (8 products)
// ============================================
const trousers: Product[] = [
  {
    id: "trouser-001",
    name: "Grey Flannel Trousers",
    price: 22000,
    description: "The foundation of classic British dressing, grey flannel trousers combine warmth with refinement. Cut with a medium rise, slight taper, and a single forward pleat for comfort. In a mid-grey that pairs with virtually every jacket in your wardrobe.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: TROUSER_SIZES,
    category: "trousers",
    tags: ["Trousers", "Flannel", "Grey", "Classic"],
    fabric_care: "Wool flannel. Dry clean recommended. Press with low heat.",
    shipping_returns: "Bespoke items: 4–6 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "trouser-002",
    name: "Charcoal Wool Dress Trousers",
    price: 24000,
    description: "Precision-cut charcoal dress trousers in a smooth 100s wool. Flat-front, slim-tapered, and finished with a single break — designed to be worn with your suit jacket or as part of a mixed formal ensemble. Functioning side adjusters replace a belt for a cleaner, more tailored silhouette.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: TROUSER_SIZES,
    category: "trousers",
    tags: ["Trousers", "Dress", "Charcoal", "Wool"],
    fabric_care: "100s wool. Dry clean only.",
    shipping_returns: "Bespoke items: 4–6 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "trouser-003",
    name: "Navy Linen Trousers",
    price: 18000,
    description: "Summer-ready navy linen trousers cut with a relaxed straight leg and a medium rise. Crisp, cool, and effortlessly smart. Pair with the tan linen blazer for a coordinated summer look or wear standalone with a white shirt for relaxed formal occasions.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: TROUSER_SIZES,
    category: "trousers",
    tags: ["Trousers", "Linen", "Navy", "Summer"],
    badge: "Summer",
    fabric_care: "Pure linen. Dry clean recommended. Embrace natural creasing.",
    shipping_returns: "Bespoke items: 4–6 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "trouser-004",
    name: "Camel Cavalry Twill Trousers",
    price: 26000,
    description: "Cavalry twill is the fabric of English country trousers — robust, smooth-faced, and beautifully structured. These camel-tone trousers with a double forward pleat and turn-up hem embody a certain ease and confidence. Pair with a navy blazer and tan loafers for the quintessential smart-casual look.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: TROUSER_SIZES,
    category: "trousers",
    tags: ["Trousers", "Cavalry Twill", "Camel", "Country"],
    fabric_care: "Cavalry twill wool. Dry clean only.",
    shipping_returns: "Bespoke items: 4–6 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "trouser-005",
    name: "Black Formal Trousers",
    price: 20000,
    description: "Flat-front, slim-fit black formal trousers in a smooth Super 100s wool. Finished with a satin side braid for black-tie compatibility or worn plain for business formal. The single most essential trouser in any serious wardrobe.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: TROUSER_SIZES,
    category: "trousers",
    tags: ["Trousers", "Formal", "Black", "Wool"],
    badge: "Essential",
    fabric_care: "Super 100s wool with optional satin braid. Dry clean only.",
    shipping_returns: "Bespoke items: 4–6 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "trouser-006",
    name: "Cream Linen Trousers",
    price: 17000,
    description: "Ivory-cream linen trousers that speak the language of warm-weather luxury. A wide-leg, high-rise cut gives them a quietly fashion-forward silhouette while remaining firmly within the bounds of classic menswear. The ideal companion to the ivory or navy linen jacket.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: TROUSER_SIZES,
    category: "trousers",
    tags: ["Trousers", "Linen", "Cream", "Summer"],
    badge: "Summer",
    fabric_care: "Pure linen. Dry clean recommended.",
    shipping_returns: "Bespoke items: 4–6 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "trouser-007",
    name: "Olive Corduroy Trousers",
    price: 19500,
    description: "A wide-wale olive corduroy trouser for the country-casual gentleman. Medium rise, straight cut, and finished with horn buttons at the waist. The rich texture and earthy tone pair beautifully with chunky knitwear, tweed blazers, and brown leather shoes.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: TROUSER_SIZES,
    category: "trousers",
    tags: ["Trousers", "Corduroy", "Olive", "Country"],
    fabric_care: "Wide-wale cotton corduroy with horn buttons. Dry clean recommended.",
    shipping_returns: "Bespoke items: 4–6 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "trouser-008",
    name: "Brown Herringbone Trousers",
    price: 23000,
    description: "A rich brown herringbone worsted trouser that brings warmth and texture to formal and smart-casual dressing alike. Single pleat, tapered leg, and a medium-high rise give these trousers a distinctly considered, old-school elegance.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: TROUSER_SIZES,
    category: "trousers",
    tags: ["Trousers", "Herringbone", "Brown", "Worsted"],
    fabric_care: "Herringbone worsted wool. Dry clean only.",
    shipping_returns: "Bespoke items: 4–6 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  }
];

// ============================================
// COLLECTION: SHIRTS (10 products)
// ============================================
const shirts: Product[] = [
  {
    id: "shirt-001",
    name: "White Poplin Business Shirt",
    price: 8500,
    description: "The benchmark of formal shirts — a pure white two-ply poplin with a spread collar, barrel cuffs, and a placket front. Cut for a clean, slim silhouette that sits flawlessly beneath a suit jacket. Hand-finished mother-of-pearl buttons.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SHIRT_SIZES,
    category: "shirts",
    tags: ["Shirts", "Poplin", "White", "Business"],
    badge: "Essential",
    fabric_care: "Two-ply cotton poplin. Machine wash gentle or dry clean. Iron while damp.",
    shipping_returns: "Bespoke items: 3–4 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "shirt-002",
    name: "Blue Oxford Shirt",
    price: 9000,
    description: "The blue oxford shirt is the backbone of smart-casual dressing. A soft, slightly textured Oxford-weave cotton in mid-blue with a button-down collar, chest pocket, and a slightly relaxed cut. Equally refined tucked in with a blazer or worn open-collar on its own.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SHIRT_SIZES,
    category: "shirts",
    tags: ["Shirts", "Oxford", "Blue", "Smart Casual"],
    fabric_care: "Oxford weave cotton. Machine wash or dry clean. Tumble dry low.",
    shipping_returns: "Bespoke items: 3–4 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "shirt-003",
    name: "White Spread Collar Formal Shirt",
    price: 9500,
    description: "Constructed in a fine Swiss-cotton voile, this white shirt with a wide spread collar and double (French) cuffs is purpose-built for the most formal occasions. Requires cufflinks. Pairs perfectly with the Navy Suit, Black Tuxedo, or any formal jacket in the collection.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SHIRT_SIZES,
    category: "shirts",
    tags: ["Shirts", "Formal", "White", "French Cuffs"],
    badge: "Formal",
    fabric_care: "Swiss cotton voile. Dry clean recommended. Professional pressing for collar and cuffs.",
    shipping_returns: "Bespoke items: 3–4 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "shirt-004",
    name: "Blue Striped Formal Shirt",
    price: 9000,
    description: "Classic blue-on-white Bengal stripes in a 100-count Egyptian cotton poplin. A spread collar, placket front, and barrel cuffs. This is the definitive British city shirt — intelligent, restrained, and permanently in style. Worn with charcoal or navy suits for maximum effect.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SHIRT_SIZES,
    category: "shirts",
    tags: ["Shirts", "Striped", "Blue", "Formal"],
    fabric_care: "Egyptian cotton poplin. Machine wash gentle or dry clean.",
    shipping_returns: "Bespoke items: 3–4 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "shirt-005",
    name: "Pink End-on-End Shirt",
    price: 9500,
    description: "A subtly woven end-on-end fabric in a dusty rose-pink that reads almost solid from a distance but reveals a fine weave texture up close. Notch collar, barrel cuffs, and a soft shape that works under a navy or grey jacket or standalone at a casual lunch. A sophisticated wardrobe colour addition.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SHIRT_SIZES,
    category: "shirts",
    tags: ["Shirts", "End-on-End", "Pink", "Smart"],
    fabric_care: "Cotton end-on-end weave. Machine wash gentle or dry clean.",
    shipping_returns: "Bespoke items: 3–4 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "shirt-006",
    name: "White Linen Shirt",
    price: 8000,
    description: "A relaxed yet refined white linen shirt for the warm-weather gentleman. Slightly oversized collar, chest patch pocket, and a straight hem that can be tucked or worn out with equal elegance. The ideal summer base layer under a linen or unlined blazer.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SHIRT_SIZES,
    category: "shirts",
    tags: ["Shirts", "Linen", "White", "Summer"],
    badge: "Summer",
    fabric_care: "Pure linen. Machine wash or dry clean. Embrace natural texture.",
    shipping_returns: "Bespoke items: 3–4 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "shirt-007",
    name: "Navy Blue Shirt",
    price: 8500,
    description: "A deep navy cotton twill shirt with a semi-spread collar and barrel cuffs. The solid dark tone makes it a versatile mixer — equally sharp under a tan or camel blazer as it is worn casually with trousers. Clean, bold, dependably elegant.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SHIRT_SIZES,
    category: "shirts",
    tags: ["Shirts", "Twill", "Navy", "Versatile"],
    fabric_care: "Cotton twill. Machine wash or dry clean.",
    shipping_returns: "Bespoke items: 3–4 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "shirt-008",
    name: "Subtle Check Shirt",
    price: 9000,
    description: "A fine windowpane or glen-plaid check shirt in a muted blue-grey palette — a traditional choice for the British and American country-dressing tradition. Button-down collar, flap chest pockets, and a relaxed fit make this equally suited to the office and the weekend countryside retreat.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SHIRT_SIZES,
    category: "shirts",
    tags: ["Shirts", "Check", "Blue-Grey", "Country"],
    fabric_care: "Cotton check weave. Machine wash or dry clean.",
    shipping_returns: "Bespoke items: 3–4 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "shirt-009",
    name: "Bespoke French Cuff Shirt (Custom)",
    price: 12000,
    description: "Choose your collar style, cuff shape, placket, and monogram detail — this is a fully bespoke shirt crafted from your choice of fabric from our curated shirting book. Minimum 2 shirts per order. Allow 10–14 days for delivery.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SHIRT_SIZES,
    category: "shirts",
    tags: ["Shirts", "Bespoke", "French Cuff", "Custom"],
    badge: "Bespoke",
    fabric_care: "Custom fabric selection. Follow care instructions provided with garment.",
    shipping_returns: "Bespoke: 10–14 days. Minimum 2 shirts per order. No returns on bespoke items.",
    status: "active"
  },
  {
    id: "shirt-010",
    name: "Cream Linen Shirt",
    price: 8500,
    description: "A warm cream pure linen shirt with an open, relaxed collar, mother-of-pearl buttons, and a straight cut hem. Worn with cream or ivory linen trousers for a full monochromatic summer look, or contrasted with dark navy or olive. A signature warm-climate wardrobe piece.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SHIRT_SIZES,
    category: "shirts",
    tags: ["Shirts", "Linen", "Cream", "Summer"],
    badge: "Summer",
    fabric_care: "Pure linen with mother-of-pearl buttons. Machine wash or dry clean.",
    shipping_returns: "Bespoke items: 3–4 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  }
];

// ============================================
// COLLECTION: FORMAL WEAR (8 products)
// ============================================
const formalWear: Product[] = [
  {
    id: "formal-001",
    name: "Black Tie Tuxedo",
    price: 120000,
    description: "The complete black tie ensemble: midnight black wool barathea jacket with satin peak lapels, matching flat-front trousers with a single satin braid, and a white poplin evening shirt. Everything a gentleman needs for the most formal occasions on earth — delivered bespoke.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "formal-wear",
    tags: ["Formal Wear", "Tuxedo", "Black Tie", "Complete Set"],
    badge: "Black Tie",
    fabric_care: "Wool barathea with silk satin details. Professional dry clean only.",
    shipping_returns: "Bespoke items: 6–8 weeks delivery. Includes fitting sessions. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "formal-002",
    name: "White Dinner Jacket",
    price: 78000,
    description: "Ivory-white barathea or grosgrain-faced jacket for formal tropical and summer black-tie events. Peak lapels in satin, a one-button stance, and jetted pockets. Paired with black dress trousers and a black bow tie — this is Mediterranean summer elegance at its finest.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "formal-wear",
    tags: ["Formal Wear", "Dinner Jacket", "White", "Summer Black Tie"],
    badge: "Summer Formal",
    fabric_care: "Barathea or grosgrain with satin lapels. Professional dry clean only.",
    shipping_returns: "Bespoke items: 6–8 weeks delivery. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "formal-003",
    name: "Morning Suit",
    price: 135000,
    description: "The morning suit is the uniform of royal garden parties, Derby days, and the most formal of English weddings. Our version features a single-button dove-grey waistcoat, black or grey striped formal trousers, and a traditional black morning coat with a curved front. Bespoke from the first consultation.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "formal-wear",
    tags: ["Formal Wear", "Morning Suit", "Wedding", "Royal"],
    badge: "Royal",
    fabric_care: "Wool morning coat with waistcoat. Professional dry clean only.",
    shipping_returns: "Bespoke items: 8–10 weeks delivery. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "formal-004",
    name: "Bandhgala / Nehru Collar Suit",
    price: 95000,
    description: "A masterwork of Indian formal tailoring — the Bandhgala suit, also known as the Nehru collar suit, in a rich dark navy or black. Crafted with European construction technique and Indian cultural heritage, it is the most distinguished choice for formal functions, state dinners, and destination weddings.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "formal-wear",
    tags: ["Formal Wear", "Bandhgala", "Nehru Collar", "Indian"],
    badge: "Heritage",
    fabric_care: "Premium wool with mandarin collar. Dry clean only.",
    shipping_returns: "Bespoke items: 6–8 weeks delivery. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "formal-005",
    name: "Wedding Three-Piece Suit",
    price: 105000,
    description: "Purpose-built for the man who refuses to compromise on his wedding day. Available in ivory, champagne, pale grey, or navy. Fully bespoke construction with hand-sewn canvas chest, personalised silk lining, and a monogrammed interior pocket. Every measurement. Every detail. Yours alone.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "formal-wear",
    tags: ["Formal Wear", "Wedding", "Three Piece", "Bespoke"],
    badge: "Wedding",
    fabric_care: "Premium wool with silk lining and monogram. Dry clean only.",
    shipping_returns: "Bespoke items: 8–10 weeks delivery. No returns on bespoke wedding items.",
    status: "active"
  },
  {
    id: "formal-006",
    name: "Grey Morning Waistcoat",
    price: 18000,
    description: "A dove-grey formal waistcoat with a backstrap adjuster, five-button stance, and functional welt pockets. Sold standalone as part of the morning suit ensemble or worn with contrasting jacket and trousers. Fully lined in personalised silk.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "formal-wear",
    tags: ["Formal Wear", "Waistcoat", "Morning", "Grey"],
    fabric_care: "Dove-grey wool with silk lining. Dry clean only.",
    shipping_returns: "Bespoke items: 4–6 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "formal-007",
    name: "Double-Breasted Evening Suit",
    price: 115000,
    description: "A formal double-breasted suit in midnight blue or black with peak satin lapels — positioned between a business suit and a tuxedo in the formal hierarchy. The 6x2 button stance and wide lapels create a powerful, cinematic silhouette suited to galas, state occasions, and fine dining.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "formal-wear",
    tags: ["Formal Wear", "Double Breasted", "Evening", "Satin Lapels"],
    badge: "Evening",
    fabric_care: "Wool with satin lapels. Professional dry clean only.",
    shipping_returns: "Bespoke items: 6–8 weeks delivery. Returns accepted within 14 days.",
    status: "active"
  },
  {
    id: "formal-008",
    name: "Black Formal Waistcoat",
    price: 16000,
    description: "A black wool waistcoat to complete any formal three-piece ensemble. Six button stance, welt pockets, and a pointed bottom hem. Fully silk-lined with a backstrap adjuster. Sold as a standalone piece — pairs with the Midnight Black Tuxedo or any black business suit.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: SUIT_SIZES,
    category: "formal-wear",
    tags: ["Formal Wear", "Waistcoat", "Black", "Formal"],
    fabric_care: "Black wool with silk lining. Dry clean only.",
    shipping_returns: "Bespoke items: 4–6 weeks delivery. RTW: 5–7 working days. Returns accepted within 14 days.",
    status: "active"
  }
];

// ============================================
// COLLECTION: MADE TO MEASURE (3 service products)
// ============================================
const madeToMeasure: Product[] = [
  {
    id: "mtm-001",
    name: "Essential Made to Measure Package",
    price: 45000,
    description: "Your entry into the world of made-to-measure tailoring. Includes a full body measurement consultation, fabric selection from our 100+ cloth book, choice of lining and buttons, and one fitting session before delivery. Choose from suit, blazer, or trouser as your base garment. Delivery in 3–4 weeks.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: ["Custom - By Appointment"],
    category: "made-to-measure",
    tags: ["Made to Measure", "MTM", "Entry", "Package"],
    badge: "MTM",
    fabric_care: "Follow care instructions provided with finished garment.",
    shipping_returns: "Made to Measure: 3–4 weeks delivery. Includes 1 fitting session. No returns on MTM.",
    status: "active"
  },
  {
    id: "mtm-002",
    name: "Premium Made to Measure Package",
    price: 85000,
    description: "A suit or jacket crafted with half-canvas construction, full lining, personalised silk pocket square, monogrammed interior label, and two fitting sessions. Access to premium Italian and English cloth books including Scabal, Holland & Sherry, and Dormeuil. Delivery in 4–5 weeks.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: ["Custom - By Appointment"],
    category: "made-to-measure",
    tags: ["Made to Measure", "MTM", "Premium", "Half Canvas"],
    badge: "Premium MTM",
    fabric_care: "Premium cloth with full lining. Follow care instructions provided.",
    shipping_returns: "Made to Measure: 4–5 weeks delivery. Includes 2 fitting sessions. No returns on MTM.",
    status: "active"
  },
  {
    id: "mtm-003",
    name: "Full Bespoke Commission",
    price: 150000,
    description: "The highest expression of tailoring — a fully bespoke garment built from a personal pattern cut to your unique proportions. Three fitting stages: baste, forward, and finish. Full floating canvas chest, hand-padded lapels, hand-stitched buttonholes, and hand-sewn sleeve heads. Minimum 8–10 weeks. A garment for life.",
    images: ["https://placehold.co/800x1100/1a1a1a/ffffff?text=Coming+Soon"],
    sizes: ["Custom - By Appointment"],
    category: "made-to-measure",
    tags: ["Bespoke", "Full Bespoke", "Commission", "Lifetime"],
    badge: "Full Bespoke",
    fabric_care: "Hand-crafted garment. Professional dry clean only. We recommend annual maintenance pressing.",
    shipping_returns: "Full Bespoke: 8–10 weeks minimum. Three fitting stages included. No returns on bespoke commissions.",
    status: "active"
  }
];

// ============================================
// EXPORT ALL PRODUCTS
// ============================================
export const ALL_PRODUCTS: Product[] = [
  ...suits,
  ...blazers,
  ...coats,
  ...trousers,
  ...shirts,
  ...formalWear,
  ...madeToMeasure
];

// Collection names for display
export const COLLECTION_NAMES: Record<string, string> = {
  "suits": "Bespoke Suits",
  "blazers": "Luxury Blazers",
  "coats": "Bespoke Coats",
  "trousers": "Bespoke Trousers",
  "shirts": "Bespoke Shirts",
  "formal-wear": "Formal Wear",
  "made-to-measure": "Made to Measure"
};

// Collection SEO metadata
export const COLLECTION_SEO: Record<string, { title: string; description: string }> = {
  "suits": {
    title: "Bespoke Suits | Custom Tailored Suits for Men | The Bespoke Master",
    description: "Handcrafted bespoke suits made to your exact measurements. Premium wool, floating canvas construction, and timeless elegance. Book your consultation in Indore, India."
  },
  "blazers": {
    title: "Luxury Blazers for Men | Made to Measure | The Bespoke Master",
    description: "Exquisite made-to-measure blazers in premium wool, linen, and velvet. From navy hopsack to burgundy velvet — elevate your wardrobe with bespoke tailoring."
  },
  "coats": {
    title: "Luxury Overcoats & Topcoats | Bespoke Outerwear | The Bespoke Master",
    description: "Bespoke cashmere overcoats and wool topcoats handcrafted in India. From Chesterfields to trench coats — winter elegance made to measure."
  },
  "trousers": {
    title: "Bespoke Trousers | Custom Tailored Pants | The Bespoke Master",
    description: "Precision-cut bespoke trousers in flannel, linen, corduroy and cavalry twill. Flat-front and pleated options available. Made to your measurements."
  },
  "shirts": {
    title: "Bespoke Dress Shirts | Custom Made Shirts | The Bespoke Master",
    description: "Handcrafted bespoke shirts in premium cotton and linen. Choose your collar, cuffs, and fabric. Made to measure with monogram options available."
  },
  "formal-wear": {
    title: "Black Tie & Formal Wear | Bespoke Tuxedos | The Bespoke Master",
    description: "Bespoke black tie tuxedos, morning suits, and formal waistcoats. Handcrafted for weddings, galas, and the most formal occasions."
  },
  "made-to-measure": {
    title: "Made to Measure Services | Bespoke Tailoring | The Bespoke Master",
    description: "Made to measure and full bespoke tailoring services. From essential MTM to full bespoke commissions — experience the art of personal tailoring."
  }
};

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return ALL_PRODUCTS.filter(p => p.category === category);
};

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return ALL_PRODUCTS.find(p => p.id === id);
};

export default ALL_PRODUCTS;
