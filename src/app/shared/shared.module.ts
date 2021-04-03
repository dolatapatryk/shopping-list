import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLayoutComponent } from './list-layout/list-layout.component';
import { MaterialModule } from '../material/material.module';
import { DepartmentNamePipe } from './pipes/department-name.pipe';
import { TouchListLayoutComponent } from './touch-list-layout/touch-list-layout.component';
import { SwipeAngularListModule } from 'swipe-angular-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsListComponent } from './products-list/products-list.component';
import { DialogLayoutComponent } from './dialog-layout/dialog-layout.component';
import { UnitNamePipe } from './pipes/unit-name.pipe';
import { FormsModule } from '@angular/forms';
import { IsProductChosenPipe } from './pipes/is-product-chosen.pipe';


@NgModule({
    declarations: [
        ListLayoutComponent,
        ListLayoutComponent,
        DepartmentNamePipe,
        TouchListLayoutComponent,
        ProductsListComponent,
        DialogLayoutComponent,
        UnitNamePipe,
        IsProductChosenPipe
    ],
    exports: [
        ListLayoutComponent,
        MaterialModule,
        DepartmentNamePipe,
        TouchListLayoutComponent,
        FontAwesomeModule,
        ProductsListComponent,
        DialogLayoutComponent,
        UnitNamePipe
    ],
    imports: [
        CommonModule,
        MaterialModule,
        SwipeAngularListModule,
        FontAwesomeModule,
        FormsModule
    ]
})
export class SharedModule {
}
