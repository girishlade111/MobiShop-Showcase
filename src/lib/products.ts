
export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  specs: { [key: string]: string };
  images: string[];
  stock: number;
  rating: number;
  reviews: number;
};

export const products: Product[] = [
  {
    id: 'apple-iphone-15-pro',
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    price: 999,
    description: 'The ultimate iPhone, with the powerful A17 Pro chip, a customizable Action button, and the best iPhone camera system yet.',
    specs: {
      'Display': '6.1" Super Retina XDR display with ProMotion',
      'Chip': 'A17 Pro chip',
      'Camera': 'Pro camera system (48MP Main, 12MP Ultra Wide, 12MP Telephoto)',
      'Storage': '128GB, 256GB, 512GB, 1TB',
      'Biometrics': 'Face ID'
    },
    images: [
      'https://images.unsplash.com/photo-1716882173326-04d822f142a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNHx8aXBob25lJTIwMTUlMjBwcm98ZW58MHx8fHwxNzU1ODg0OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    stock: 50,
    rating: 4.9,
    reviews: 215,
  },
  {
    id: 'samsung-galaxy-s24-ultra',
    name: 'Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 1299,
    description: 'Experience the new era of mobile AI with Galaxy S24 Ultra. It comes with a built-in S Pen, and a stunning 200MP camera.',
    specs: {
      'Display': '6.8" Dynamic AMOLED 2X',
      'Chip': 'Snapdragon 8 Gen 3 for Galaxy',
      'Camera': '200MP Wide, 12MP Ultra Wide, 10MP Telephoto 1, 50MP Telephoto 2',
      'Storage': '256GB, 512GB, 1TB',
      'Biometrics': 'Ultrasonic Fingerprint'
    },
    images: [
      'https://images.unsplash.com/photo-1705530292519-ec81f2ace70d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxnYWxheHklMjBzMjQlMjB1bHRyYXxlbnwwfHx8fDE3NTU4ODUwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    stock: 35,
    rating: 4.8,
    reviews: 189,
  },
  {
    id: 'google-pixel-8-pro',
    name: 'Pixel 8 Pro',
    brand: 'Google',
    price: 899,
    description: 'The Google Pixel 8 Pro is the most powerful, personal, and secure Pixel phone yet, with Google AI and the best Pixel Camera.',
    specs: {
      'Display': '6.7" Super Actua display',
      'Chip': 'Google Tensor G3',
      'Camera': '50 MP wide, 48 MP ultrawide, 48 MP telephoto',
      'Storage': '128GB, 256GB, 512GB, 1TB',
      'Biometrics': 'Fingerprint Unlock, Face Unlock'
    },
    images: [
      'https://images.unsplash.com/photo-1697355360151-2866de32ad4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxQaXhlbCUyMDglMjBwcm98ZW58MHx8fHwxNzU1ODg1MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    stock: 60,
    rating: 4.7,
    reviews: 302,
  },
  {
    id: 'oneplus-12',
    name: 'OnePlus 12',
    brand: 'OnePlus',
    price: 799,
    description: 'The OnePlus 12 is effortlessly fast and smooth. Powered by the latest Snapdragon processor and featuring a 4th Gen Hasselblad Camera for Mobile.',
    specs: {
      'Display': '6.82" 2K 120 Hz ProXDR Display',
      'Chip': 'Snapdragon 8 Gen 3',
      'Camera': '50MP Main, 64MP Periscope Telephoto, 48MP Ultra-wide',
      'Storage': '256GB, 512GB',
      'Biometrics': 'In-display Fingerprint Sensor'
    },
    images: [
      'https://images.unsplash.com/photo-1629110276446-7f26e2654757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxvbmUlMjBwbHVzJTIwcGhvbmV8ZW58MHx8fHwxNzU1ODg1NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    stock: 42,
    rating: 4.6,
    reviews: 150,
  },
  {
    id: 'apple-iphone-15',
    name: 'iPhone 15',
    brand: 'Apple',
    price: 799,
    description: 'The iPhone 15 brings you Dynamic Island, a 48MP Main camera, and USB-C — all in a durable color-infused glass and aluminum design.',
    specs: {
      'Display': '6.1" Super Retina XDR display',
      'Chip': 'A16 Bionic chip',
      'Camera': 'Advanced dual-camera system (48MP Main, 12MP Ultra Wide)',
      'Storage': '128GB, 256GB, 512GB',
      'Biometrics': 'Face ID'
    },
    images: [
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
      'https://placehold.co/600x600.png',
    ],
    stock: 80,
    rating: 4.8,
    reviews: 450,
  },
  {
    id: 'samsung-galaxy-z-fold-5',
    name: 'Galaxy Z Fold 5',
    brand: 'Samsung',
    price: 1799,
    description: 'Unfold an immersive screen and get ready for a cinematic experience. The Galaxy Z Fold5 is a movie theater, a gaming console, and a multi-screen workspace.',
    specs: {
      'Display': '7.6" Main Screen, 6.2" Cover Screen',
      'Chip': 'Snapdragon 8 Gen 2 for Galaxy',
      'Camera': '50MP Wide, 12MP Ultra Wide, 10MP Telephoto',
      'Storage': '256GB, 512GB, 1TB',
      'Biometrics': 'Side Fingerprint Scanner'
    },
    images: [
      'https://images.unsplash.com/photo-1692299388337-1831853a4794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxzYW1zdW5nJTIwZ2FsYXh5JTIweiUyMGZvbGQlMjA1fGVufDB8fHx8MTc1NTg4NTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1692299388321-3678517b6534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxzYW1zdW5nJTIwZ2FsYXh5JTIweiUyMGZvbGQlMjA1fGVufDB8fHx8MTc1NTg4NTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1692299388643-915478492061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzYW1zdW5nJTIwZ2FsYXh5JTIweiUyMGZvbGQlMjA1fGVufDB8fHx8MTc1NTg4NTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    stock: 20,
    rating: 4.5,
    reviews: 98,
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id: string) {
  return products.find(p => p.id === id);
}

export function getProductsByIds(ids: string[]) {
    return products.filter(p => ids.includes(p.id));
}
