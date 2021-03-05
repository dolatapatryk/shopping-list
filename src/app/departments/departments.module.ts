import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [DepartmentsListComponent],
    imports: [
        CommonModule,
        DepartmentsRoutingModule,
        SharedModule
    ],
    providers: []
})
export class DepartmentsModule {
}
