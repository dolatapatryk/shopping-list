import { Pipe, PipeTransform } from '@angular/core';
import { Unit } from '../../models/unit';
import { UnitsService } from '../../services/units.service';

@Pipe({
    name: 'unitName'
})
export class UnitNamePipe implements PipeTransform {
    units: Unit[];

    constructor(private unitService: UnitsService) {
        this.units = unitService.getUnits();
    }

    transform(unitId: number): string {
        const unit = this.units.find(u => u.id === unitId);
        return unit ? unit.name : '';
    }
}
