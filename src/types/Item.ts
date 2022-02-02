import { Category } from "./Category";

export interface InventoryItem {
  id: number;
  name: string;
  category: Category;
  price: number;
  image: string;
}
