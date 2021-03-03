import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsService } from '../services/departments.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [DepartmentsListComponent],
    imports: [
        CommonModule,
        DepartmentsRoutingModule,
        SharedModule
    ],
    providers: [DepartmentsService]
})
export class DepartmentsModule {
}
