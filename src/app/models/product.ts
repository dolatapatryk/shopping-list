export interface Product {
    id: number;
    name: string;
    departmentId: number;
}

export interface ShoppingListProduct extends Product {
    mark?: boolean;
    quantity?: number;
}
