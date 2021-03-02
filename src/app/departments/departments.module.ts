import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsLayoutComponent } from './departments-layout/departments-layout.component';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsService } from '../services/departments.service';
import { MaterialModule } from '../material/material.module';


@NgModule({
    declarations: [DepartmentsLayoutComponent],
    imports: [
        CommonModule,
        DepartmentsRoutingModule,
        MaterialModule
    ],
    providers: [DepartmentsService]
})
export class DepartmentsModule {
}
