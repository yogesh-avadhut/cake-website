export type NavLink = {
  id: string;
  label: string;
};

export type CakeItem = {
  name: string;
  flavour: string;
  occasion: string;
  weight: string;
  price: number;
  image: string;
  description: string;
};

export type ProductItem = {
  name: string;
  price: number;
  image: string;
  description: string;
};

export type ProductCategory = {
  id: "paper-blast" | "candles" | "extras";
  title: string;
  subtitle: string;
  items: ProductItem[];
};

export const business = {
  name: "Renuka's Kitchen",
  displayPhone: "+91 8482823137",
  phoneNumber: "8482823137",
  whatsappNumber: "918482823137",
  defaultOrderMessage: "Hello Renuka's Kitchen, I want to order a cake 🎂",
  address:
    "Near Hiremat Hospital, Opposite Shrimam Bahusaheb Zadbuke Complex, Agalgaon Road, Barshi",
  mapsLink: "https://maps.app.goo.gl/vULirxV6wAEpei5m6",
  embedMapUrl:
"https://www.google.com/maps/place/New+gurukrupa+Kirana+stores/@18.2459247,75.6943167,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc455fe296d3573:0xdb8a5e0ca586e266!8m2!3d18.2459196!4d75.6968916!16s%2Fg%2F11k9sb28zf?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D"
};

export const navLinks: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "cakes", label: "Cakes" },
  { id: "products", label: "Products" },
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact" }
];

export const cakeCatalog: CakeItem[] = [
  {
    name: "Romance Bloom",
    flavour: "Chocolate Truffle",
    occasion: "Anniversary special",
    weight: "500g",
    price: 599,
    image: "/images/cakes/romance-bloom.jpeg",
    description: "A dramatic half-glaze heart cake with rose piping for romantic celebrations."
  },
  {
    name: "Birthday Cloud",
    flavour: "Vanilla Cream",
    occasion: "Birthday classic",
    weight: "500g",
    price: 349,
    image: "/images/cakes/birthday-cloud.jpeg",
    description: "Soft whipped cream swirls and confetti sprinkles for a timeless birthday moment."
  },
  {
    name: "Choco Glaze Party",
    flavour: "Black Forest",
    occasion: "Party favorite",
    weight: "500g",
    price: 399,
    image: "/images/cakes/choco-glaze-party.jpeg",
    description: "Glossy chocolate glaze with airy cream rosettes and colorful celebratory sprinkles."
  },
  {
    name: "Pink Drip Celebration",
    flavour: "Strawberry Chocolate",
    occasion: "Birthday surprise",
    weight: "500g",
    price: 489,
    image: "/images/cakes/pink-drip-celebration.jpeg",
    description: "A chic pink finish with drip detailing and topper styling for statement celebrations."
  },
  {
    name: "Butterfly Anniversary",
    flavour: "Chocolate Vanilla",
    occasion: "Monthly milestone",
    weight: "500g",
    price: 459,
    image: "/images/cakes/butterfly-anniversary.jpeg",
    description: "Elegant butterfly accents bring a soft handmade touch to this creamy celebration cake."
  },
  {
    name: "Ruby Double Decker",
    flavour: "Mixed Fruit Cream",
    occasion: "Grand celebration",
    weight: "500g",
    price: 619,
    image: "/images/cakes/ruby-double-decker.jpeg",
    description: "A festive two-tier styled design with bold colors that instantly lights up the table."
  },
  {
    name: "Kitty Party Special",
    flavour: "Vanilla Strawberry",
    occasion: "Kids delight",
    weight: "500g",
    price: 549,
    image: "/images/cakes/kitty-party-special.jpeg",
    description: "Cute character detailing with rich piping work for memorable kids' birthdays."
  },
  {
    name: "Vaishnavi Heart",
    flavour: "Chocolate Rose",
    occasion: "Personalized love cake",
    weight: "500g",
    price: 569,
    image: "/images/cakes/vaishnavi-heart.jpeg",
    description: "A half-black, half-floral heart cake that feels both bold and beautifully handcrafted."
  },
  {
    name: "Sunshine Kitty",
    flavour: "Pineapple Cream",
    occasion: "Fun birthday theme",
    weight: "500g",
    price: 499,
    image: "/images/cakes/sunshine-kitty.jpeg",
    description: "Bright yellow piping and kitty artwork make this one perfect for cheerful celebrations."
  },
  {
    name: "Black Forest Cherry",
    flavour: "Black Forest",
    occasion: "Simple elegance",
    weight: "500g",
    price: 379,
    image: "/images/cakes/black-forest-cherry.jpeg",
    description: "Classic black forest styling with cherries, cream, and a glossy chocolate finish."
  },
  {
    name: "Signature Birthday Lights",
    flavour: "Chocolate Celebration",
    occasion: "Name cake",
    weight: "500g",
    price: 589,
    image: "/images/cakes/signature-birthday-lights.jpeg",
    description: "An eye-catching celebration cake that looks magical once the candles are lit."
  },
  {
    name: "Scarlet Love Heart",
    flavour: "Red Velvet",
    occasion: "Love theme",
    weight: "500g",
    price: 559,
    image: "/images/cakes/scarlet-love-heart.jpeg",
    description: "Romantic red piping, heart shape, and delicate detailing crafted for special days."
  },
  {
    name: "Midnight Web Truffle",
    flavour: "Dark Chocolate",
    occasion: "Designer finish",
    weight: "500g",
    price: 429,
    image: "/images/cakes/midnight-web-truffle.jpeg",
    description: "Striking glaze artistry and chocolate accents create a premium designer-style cake."
  },
  {
    name: "Renuka Classic Birthday",
    flavour: "Chocolate Cherry",
    occasion: "Signature house style",
    weight: "500g",
    price: 469,
    image: "/images/cakes/renuka-classic-birthday.jpeg",
    description: "A clean chocolate finish with bright cream swirls in Renuka's classic celebration style."
  },
  {
    name: "Rose Romance Delight",
    flavour: "Chocolate Rose Cream",
    occasion: "Couple celebration",
    weight: "500g",
    price: 579,
    image: "/images/cakes/rose-romance-delight.jpeg",
    description: "Pink rose piping, glossy glaze, and silhouette topper make this one instantly memorable."
  }
];

export const productCategories: ProductCategory[] = [
  {
    id: "paper-blast",
    title: "Paper Blast",
    subtitle: "Add a surprise element to make every order extra joyful.",
    items: [
      {
        name: "Birthday Paper Blast Box",
        price: 149,
        image: "/images/products/birthday-paper-blast.svg",
        description: "A colorful surprise box with celebratory paper elements for birthdays."
      },
      {
        name: "Surprise Explosion Box",
        price: 249,
        image: "/images/products/surprise-explosion-box.svg",
        description: "Layered reveal box styling that makes your cake surprise even more special."
      }
    ]
  },
  {
    id: "candles",
    title: "Candles",
    subtitle: "Spark, shine, and celebrate with the right candle set.",
    items: [
      {
        name: "Number Candles",
        price: 40,
        image: "/images/products/number-candles.svg",
        description: "Single or double digit number candles in bright festive colors."
      },
      {
        name: "Sparkle Candles",
        price: 80,
        image: "/images/products/sparkle-candles.svg",
        description: "Sparkler candles that instantly elevate the cake-cutting moment."
      },
      {
        name: "Birthday Candles Set",
        price: 60,
        image: "/images/products/birthday-candles-set.svg",
        description: "Classic birthday candle pack ready to pair with any cake order."
      }
    ]
  },
  {
    id: "extras",
    title: "Extras",
    subtitle: "Thoughtful finishing touches for a complete celebration setup.",
    items: [
      {
        name: "Greeting Cards",
        price: 50,
        image: "/images/products/greeting-cards.svg",
        description: "Cute message cards for writing a personal note with your order."
      },
      {
        name: "Cake Toppers",
        price: 70,
        image: "/images/products/cake-toppers.svg",
        description: "Stylish toppers for birthdays, anniversaries, and romantic occasions."
      },
      {
        name: "Party Decorations",
        price: 199,
        image: "/images/products/party-decorations.svg",
        description: "Decor add-ons to make the full setup feel festive and complete."
      }
    ]
  }
];

export const aboutPoints = [
  "We have been making fresh and delicious cakes for the last 2 years with a homemade touch that people remember.",
  "Every order is prepared with care, balanced sweetness, and thoughtful finishing so your occasion feels extra special.",
  "From birthdays to anniversaries, we love turning your ideas into custom cakes made with quality ingredients and lots of heart."
];

export const aboutHighlights = [
  { label: "Freshly prepared", value: "Daily baking" },
  { label: "Custom support", value: "WhatsApp orders" },
  { label: "Signature feel", value: "Homemade with love" }
];

export const orderTips = [
  "Share your occasion, preferred flavor, name, and delivery or pickup timing.",
  "Send a reference photo if you want a customized design.",
  "Add candles, toppers, or paper blast products in the same WhatsApp message."
];

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const callLink = `tel:+91${business.phoneNumber}`;
