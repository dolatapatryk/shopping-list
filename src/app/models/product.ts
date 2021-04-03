export interface Product {
    id: number;
    name: string;
    departmentId: number;
    unitId: number;
}

export interface ShoppingListProduct extends Product {
    mark?: boolean;
    quantity?: number;
}
