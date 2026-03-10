export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface Order {
  id: string;
  product: Product;
  customer: {
    name: string;
    mobile: string;
    address: string;
    pincode: string;
  };
  status: 'Pending' | 'Processing' | 'Shipped';
  expectedDelivery?: string;
  createdAt: string;
}
