import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DepartmentSaveComponent } from './department-save/department-save.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [DepartmentsListComponent, DepartmentSaveComponent],
    imports: [
        CommonModule,
        DepartmentsRoutingModule,
        SharedModule,
        FormsModule
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DepartmentsModule {
}
