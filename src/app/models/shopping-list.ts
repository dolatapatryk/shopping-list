import { Product } from './product';

export interface ShoppingList {
    name: string;
    description?: string;
    products: Product[];
}
