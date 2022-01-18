import { Id } from './id';

export interface Product extends Id {
    name: string;
    departmentId: number;
}

export interface ShoppingListProduct extends Product {
    mark?: boolean;
    quantity?: string;
}
