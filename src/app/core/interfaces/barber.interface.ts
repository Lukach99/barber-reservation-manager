export interface Barber {
  key?: string | null;
  id: string;
  active: boolean;
  name: string;
  profile_picture: string | null;
  products: string[];
}
