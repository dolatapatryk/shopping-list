import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLayoutComponent } from './list-layout/list-layout.component';
import { MaterialModule } from '../material/material.module';
import { DepartmentNamePipe } from './pipes/department-name.pipe';
import { TouchListLayoutComponent } from './touch-list-layout/touch-list-layout.component';
import { SwipeAngularListModule } from 'swipe-angular-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
        DepartmentNamePipe,
        TouchListLayoutComponent,
        FontAwesomeModule
    ],
    imports: [
        CommonModule,
        MaterialModule,
        SwipeAngularListModule,
        FontAwesomeModule
    ],
    providers: []
})
export class SharedModule {
}
