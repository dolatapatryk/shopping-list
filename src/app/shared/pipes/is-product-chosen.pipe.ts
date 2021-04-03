import { Pipe, PipeTransform } from '@angular/core';
import { ShoppingListProduct } from '../../models/product';

@Pipe({
    name: 'isProductChosen'
})
export class IsProductChosenPipe implements PipeTransform {

    transform(productId: number, chosen: ShoppingListProduct[], change: boolean): any {
        console.log(':::isProductChosen', productId);
        if (!chosen || !chosen.length) {
            return false;
        }
        return !!chosen.find(p => p.id === productId);
    }
}
