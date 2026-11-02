import { Product } from '../types';

/**
 * ============================================================================
 * MS AUTO PART INDUSTRIES - PRODUCT CATALOGUE DATA
 * ============================================================================
 * 
 * PRICING INSTRUCTION:
 * - If `price` is set to `null`, the catalogue displays "REQUEST A QUOTE".
 * - To set a price in Indian Rupees (₹), enter a numerical value (e.g., price: 1250).
 * - All images strictly reference the 4 original uploaded product photographs.
 */

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'stepped-king-pin',
    name: 'Stepped King Pin',
    code: 'MS-KP-001',
    category: 'Heavy Vehicle King Pin',
    shortDescription: 'Precision-machined stepped king pin designed for compatible heavy commercial vehicle front axle and steering knuckle applications.',
    fullDescription: 'Heavy-duty cylindrical stepped king pin engineered specifically for commercial vehicle front axle pivots and steering knuckles. Features precision-machined stepped diameters and threaded end with heavy-duty locking nut for secure axial retention and alignment under rigorous operational conditions.',
    image: '/assets/king-pin-stepped.png',
    fallbackImage: '/assets/aistudio/image_4e48cdd4.png',
    price: null, // Set a numeric price (e.g. 1450) to display in ₹ INR, or keep null for "REQUEST A QUOTE"
    specifications: {
      productType: 'Stepped Commercial Vehicle King Pin',
      material: 'Confirm with Manufacturer',
      innerDiameter: 'Solid Core / Available on Request',
      outerDiameter: 'Available on Request',
      totalLength: 'Available on Request',
      weight: 'Available on Request',
      surfaceFinish: 'Contact for Specifications',
      vehicleApplication: 'Confirm Vehicle Model',
      availability: 'Contact for Availability',
    },
    features: [
      'Engineered stepped shank design for dedicated axle knuckles',
      'High-grade machined threading for retention nut fastening',
      'Uniform cylindrical tolerance along load-bearing pivot zones',
      'Designed for heavy-duty commercial vehicle steering assemblies'
    ]
  },
  {
    id: 'spiral-groove-king-pin',
    name: 'Spiral Groove King Pin',
    code: 'MS-KP-002',
    category: 'Lubrication Groove King Pin',
    shortDescription: 'Cylindrical king pin featuring spiral-style grooves for compatible steering assembly applications.',
    fullDescription: 'Precision ground king pin featuring continuous helical/spiral lubrication channels engineered to distribute grease uniformly across the entire contact surface. Equipped with upper retaining head and threaded lower section for robust steering joint alignment.',
    image: '/assets/king-pin-spiral-groove.png',
    fallbackImage: '/assets/aistudio/image_979ee061.png',
    price: null, // Set a numeric price (e.g. 1650) to display in ₹ INR, or keep null for "REQUEST A QUOTE"
    specifications: {
      productType: 'Spiral Groove Lubricated King Pin',
      material: 'Confirm with Manufacturer',
      innerDiameter: 'Available on Request',
      outerDiameter: 'Available on Request',
      totalLength: 'Available on Request',
      weight: 'Available on Request',
      surfaceFinish: 'Contact for Specifications',
      vehicleApplication: 'Confirm Vehicle Model',
      availability: 'Contact for Availability',
    },
    features: [
      'Continuous spiral groove profile for uninterrupted grease flow',
      'Integrated grease inlet port for steering knuckle lubrication',
      'Precision ground outer diameter ensuring snug bush fitment',
      'Engineered to reduce rotational friction under continuous steering load'
    ]
  },
  {
    id: 'oil-hole-king-pin',
    name: 'Oil-Hole King Pin',
    code: 'MS-KP-003',
    category: 'Oil-Hole King Pin',
    shortDescription: 'Precision-machined cylindrical king pin featuring a side opening for compatible lubrication arrangements.',
    fullDescription: 'Solid cylindrical king pin with internal channel passages and lateral side port for direct lubricant injection. Designed with machined flat keyway zones for positive orientation lock and anti-rotation positioning within front suspension axle assemblies.',
    image: '/assets/king-pin-oil-hole.png',
    fallbackImage: '/assets/aistudio/image_ee5460e9.png',
    price: null, // Set a numeric price (e.g. 1200) to display in ₹ INR, or keep null for "REQUEST A QUOTE"
    specifications: {
      productType: 'Oil-Hole / Channel Lubricated King Pin',
      material: 'Confirm with Manufacturer',
      innerDiameter: 'Internal Lubricant Conduit / Available on Request',
      outerDiameter: 'Available on Request',
      totalLength: 'Available on Request',
      weight: 'Available on Request',
      surfaceFinish: 'Contact for Specifications',
      vehicleApplication: 'Confirm Vehicle Model',
      availability: 'Contact for Availability',
    },
    features: [
      'Machined side lubrication port for pressurized grease delivery',
      'Precision milled flat keyway for anti-rotation steering knuckle locking',
      'Chamfered lead-in ends for safe insertion during assembly',
      'Heavy-duty solid core for high shear and bending resistance'
    ]
  },
  {
    id: 'king-pin-bush',
    name: 'King Pin Bush',
    code: 'MS-BU-001',
    category: 'Automotive Bush',
    shortDescription: 'Cylindrical bush designed for compatible king pin and steering knuckle assemblies.',
    fullDescription: 'Precision turned cylindrical bushing designed to serve as the critical replaceable wear sleeve between the king pin shaft and the axle beam knuckle bore. Engineered with close concentric tolerances to maintain steering geometry and minimize knuckle bore wear.',
    image: '/assets/king-pin-bush.png',
    fallbackImage: '/assets/aistudio/image_342b3027.png',
    price: null, // Set a numeric price (e.g. 480) to display in ₹ INR, or keep null for "REQUEST A QUOTE"
    specifications: {
      productType: 'Heavy Commercial Vehicle King Pin Bushing',
      material: 'Confirm with Manufacturer',
      innerDiameter: 'Available on Request',
      outerDiameter: 'Available on Request',
      totalLength: 'Available on Request',
      weight: 'Available on Request',
      surfaceFinish: 'Contact for Specifications',
      vehicleApplication: 'Confirm Vehicle Model',
      availability: 'Contact for Availability',
    },
    features: [
      'Precision turned inner and outer cylindrical bearing surfaces',
      'Provides sacrificial wear protection for axle knuckle bores',
      'Engineered for tight press-fit installation into king pin knuckles',
      'Compatible with grease lubrication regimes for smooth pivot operation'
    ]
  }
];

export const COMPANY_DETAILS = {
  name: 'MS AUTO PART INDUSTRIES',
  shortName: 'MS Auto Parts',
  tagline: 'Precision • Strength • Reliability',
  mainHeading: 'Precision Engineering. Reliable Performance.',
  subheading: 'Quality Automotive Components Designed for Strength, Precision and Dependable Performance.',
  mission: 'To provide dependable automotive components with a focus on precision, quality and customer requirements.',
  vision: 'To build long-term business relationships by offering reliable automotive component solutions.',
  placeholders: {
    phone: '+91 [Phone Number - Contact to update]',
    email: 'enquiry@msautopartindustries.com [Placeholder]',
    factoryAddress: 'Industrial Area, Phase 1, Automotive Hub [Placeholder Address]',
    businessLocation: 'India [Regional Office Placeholder]',
    enquiryContact: 'Direct Technical Sales Desk'
  }
};
