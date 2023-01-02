export interface Category {
  id: number,
  name: string,
  image: string
}

export interface Product {
  id: string;
  title:string;
  price: number;
  description:string;
  category: Category;
  images: string[];
}

export interface createProductDTO extends Omit<Product, 'id' | 'category'> {
}
