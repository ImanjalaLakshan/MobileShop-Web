// Dummy product data for mobile shop
import { images } from "../assets/images";

export const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "Smartphones",
    price: 1199,
    rating: 5,
    reviews: 342,
    image: images.iphone,
    badge: "New",
    description: "Latest flagship iPhone with A17 Pro chip and titanium design"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    category: "Smartphones",
    price: 1299,
    rating: 5,
    reviews: 289,
    image: images.samsung,
    badge: "Hot",
    description: "Samsung's premium flagship with S Pen and AI features"
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    category: "Smartphones",
    price: 999,
    rating: 4,
    reviews: 156,
    image: images.Google,
    badge: "Sale",
    description: "Best camera phone with Google AI capabilities"
  },
  {
    id: 4,
    name: "OnePlus 12",
    category: "Smartphones",
    price: 799,
    rating: 4,
    reviews: 203,
    image: images.unsplash,
    badge: null,
    description: "Fast charging flagship killer with Snapdragon 8 Gen 3"
  },
  {
    id: 5,
    name: "AirPods Pro (2nd Gen)",
    category: "Accessories",
    price: 249,
    rating: 5,
    reviews: 512,
    image: images.airpod,
    badge: "Trending",
    description: "Active noise cancellation and spatial audio"
  },
  {
    id: 6,
    name: "Samsung Galaxy Buds Pro",
    category: "Accessories",
    price: 199,
    rating: 4,
    reviews: 287,
    image: images.samsungBud,
    badge: null,
    description: "Premium wireless earbuds with ANC"
  },
  {
    id: 7,
    name: "Wireless Charging Pad",
    category: "Accessories",
    price: 39,
    rating: 4,
    reviews: 145,
    image: images.chargingPad,
    badge: null,
    description: "15W fast wireless charger for all Qi devices"
  },
  {
    id: 8,
    name: "Premium Phone Case",
    category: "Accessories",
    price: 29,
    rating: 5,
    reviews: 678,
    image: images.phoneCase,
    badge: "Best Seller",
    description: "Military-grade drop protection"
  },
  {
    id: 9,
    name: "Xiaomi 13 Pro",
    category: "Smartphones",
    price: 899,
    rating: 4,
    reviews: 176,
    image: images.Xiaomi,
    badge: null,
    description: "Leica camera system with flagship performance"
  },
  {
    id: 10,
    name: "Screen Protector Kit",
    category: "Accessories",
    price: 19,
    rating: 4,
    reviews: 423,
    image: images.screenProtector,
    badge: null,
    description: "Tempered glass with easy installation"
  },
  {
    id: 11,
    name: "Power Bank 20000mAh",
    category: "Accessories",
    price: 49,
    rating: 5,
    reviews: 892,
    image: images.powerBank,
    badge: "Popular",
    description: "Fast charging portable battery"
  },
  {
    id: 12,
    name: "iPhone 14",
    category: "Smartphones",
    price: 799,
    rating: 5,
    reviews: 567,
    image: images.iphone,
    badge: "Sale -20%",
    description: "Previous generation iPhone at great price"
  }
];

// Service data
export const services = [
  {
    id: 1,
    title: "Mobile Repair",
    description: "Professional repair services for all major smartphone brands. Fast turnaround time with genuine parts and warranty.",
    icon: "🔧"
  },
  {
    id: 2,
    title: "Screen Replacement",
    description: "High-quality screen replacement for cracked or damaged displays. Original and aftermarket options available.",
    icon: "📱"
  },
  {
    id: 3,
    title: "Extended Warranty",
    description: "Comprehensive warranty plans covering accidental damage, hardware failures, and more. Peace of mind guaranteed.",
    icon: "🛡️"
  },
  {
    id: 4,
    title: "Battery Replacement",
    description: "Fast battery replacement service to restore your phone's battery life. Genuine batteries with warranty.",
    icon: "🔋"
  },
  {
    id: 5,
    title: "Data Transfer",
    description: "Seamless data transfer from your old phone to new one. All your contacts, photos, and apps safely migrated.",
    icon: "💾"
  },
  {
    id: 6,
    title: "Trade-In Program",
    description: "Get the best value for your old device. Instant quote and easy trade-in process for upgrades.",
    icon: "♻️"
  }
];
