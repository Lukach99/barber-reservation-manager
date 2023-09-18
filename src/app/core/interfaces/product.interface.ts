export interface Product {
  key?: string | null;
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: number;
  length: number;
  serviceOrder: number;
  active: boolean;
  selectable: boolean;
  categoryId: number | null;
  image_galery_urls: string[];
  workers: string[];
}
