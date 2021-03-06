import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLayoutComponent } from './list-layout/list-layout.component';
import { MaterialModule } from '../material/material.module';
import { DepartmentNamePipe } from './pipes/department-name.pipe';
import { TouchListLayoutComponent } from './touch-list-layout/touch-list-layout.component';


@NgModule({
    declarations: [
        ListLayoutComponent,
        ListLayoutComponent,
        DepartmentNamePipe,
        TouchListLayoutComponent
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
