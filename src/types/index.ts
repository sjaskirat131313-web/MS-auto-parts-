export interface ProductSpecification {
  productType: string;
  material: string;
  innerDiameter: string;
  outerDiameter: string;
  totalLength: string;
  weight: string;
  surfaceFinish: string;
  vehicleApplication: string;
  availability: string;
}

export interface Product {
  id: string;
  name: string;
  code: string;
  category: 'Heavy Vehicle King Pin' | 'Lubrication Groove King Pin' | 'Oil-Hole King Pin' | 'Automotive Bush';
  shortDescription: string;
  fullDescription: string;
  image: string;
  fallbackImage: string;
  price: number | null; // null means 'REQUEST A QUOTE', numeric displays '₹ X'
  specifications: ProductSpecification;
  features: string[];
}

export interface EnquiryFormData {
  customerName: string;
  companyName: string;
  phoneNumber: string;
  emailAddress: string;
  selectedProductId: string;
  vehicleBrand: string;
  vehicleModel: string;
  requiredQuantity: string;
  requiredDimensions: string;
  additionalMessage: string;
}

export type PageId = 'home' | 'products' | 'about' | 'login';
