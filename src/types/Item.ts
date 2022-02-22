import { Category } from "./Category";

export interface InventoryItem {
  id: number;
  stock: number;
  title: string;
  category: Category;
  price: number;
  image?: string;
  description?: string;
  slogan?: string;
}

export interface CartItem {
  title: string;
  image: string;
  price: number;
  quantity: number;
}

export interface Cart {
  [id: string]: CartItem;
}
