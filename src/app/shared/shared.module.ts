import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLayoutComponent } from './list-layout/list-layout.component';
import { MaterialModule } from '../material/material.module';
import { DepartmentNamePipe } from './pipes/department-name.pipe';


@NgModule({
    declarations: [
        ListLayoutComponent,
        ListLayoutComponent,
        DepartmentNamePipe
    ],
    exports: [
        ListLayoutComponent,
        MaterialModule,
        DepartmentNamePipe
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    providers: []
})
export class SharedModule {
}
