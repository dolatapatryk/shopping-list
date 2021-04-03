import { Injectable } from '@angular/core';
import { Unit } from '../models/unit';
import units from '../../assets/units.json';

@Injectable({
    providedIn: 'root'
})
export class UnitsService {

    constructor() {
        console.log(':::units service constructor');
    }

    getUnits(): Unit[] {
        return units;
    }
}
