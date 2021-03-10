import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLayoutComponent } from './list-layout/list-layout.component';
import { MaterialModule } from '../material/material.module';
import { DepartmentNamePipe } from './pipes/department-name.pipe';
import { TouchListLayoutComponent } from './touch-list-layout/touch-list-layout.component';
import { SwipeAngularListModule } from 'swipe-angular-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsListComponent } from './products-list/products-list.component';


@NgModule({
    declarations: [
        ListLayoutComponent,
        ListLayoutComponent,
        DepartmentNamePipe,
        TouchListLayoutComponent,
        ProductsListComponent
    ],
    exports: [
        ListLayoutComponent,
        MaterialModule,
        DepartmentNamePipe,
        TouchListLayoutComponent,
        FontAwesomeModule,
        ProductsListComponent
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
