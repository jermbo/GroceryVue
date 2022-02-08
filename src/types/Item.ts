import { Category } from "./Category";

export interface InventoryItem {
  id: number;
  stock: number;
  name: string;
  category: Category;
  price: number;
  image: string;
}
