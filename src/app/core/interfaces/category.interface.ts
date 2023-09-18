import { Product } from './product.interface';

export interface Category {
  key?: string | null;
  id: string;
  name: string;
  nameEn: string;
  products: Product[];
}
