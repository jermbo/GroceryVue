import { Category } from "./Category";

export interface InventoryItem {
  id: number;
  stock: number;
  name: string;
  category: Category;
  price: number;
  image: string;
}

export interface CartItem {
  name: string;
  image: string;
  itemPrice: number;
  totalItemCost: number;
  itemQuantity: number;
}
export interface Cart {
  [id: string]: CartItem;
}
