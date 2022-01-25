import { ShoppingListProduct } from './product';
import { Id } from './id';

export interface ShoppingList extends Id {
    name: string;
    description?: string;
    products: ShoppingListProduct[];
    closed?: boolean;
}
