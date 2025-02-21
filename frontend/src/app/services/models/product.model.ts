export interface Product {
    id: number;
    title: string;
    description: string;
    details: {
      price: number;
      amount: number;
      image: string;
    }[];
  }