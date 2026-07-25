export interface Product {
  id: string;
  title: string;
  category: 'Houses' | 'Lands' | 'Villas' | string;
  price: number;
  priceFormatted: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  landSize: string;
  stockStatus: string;
  description: string;
  images: string[];
  features: string[];
}

export interface InquiryItem {
  product: Product;
  quantity: number;
}
