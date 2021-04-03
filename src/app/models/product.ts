export interface Product {
    id: number;
    name: string;
    departmentId: number;
    unit: string;
}

export interface ShoppingListProduct extends Product {
    mark?: boolean;
}
