import { ShoppingListProduct } from './product';

export interface ShoppingList {
    id?: number;
    name: string;
    description?: string;
    products: ShoppingListProduct[];
}
