import { ShoppingListProduct } from './product';

export interface ShoppingList {
    name: string;
    description?: string;
    products: ShoppingListProduct[];
}
