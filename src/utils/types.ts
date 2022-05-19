export interface Product {
  name_ru: string;
  data: any;
  image: string[];
  is_new: boolean;
  alias: string;
  count: number;
  id: number;
  products?: [];
  item: [];
}

export type Cart = {
  product: Product;
  id: number;
  count: number;
  image: string[];
  alias: string;
  name_ru?: string;
  products?: [];
};
