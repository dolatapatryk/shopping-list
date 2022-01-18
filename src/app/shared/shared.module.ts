import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLayoutComponent } from './list-layout/list-layout.component';
import { MaterialModule } from '../material/material.module';
import { DepartmentNamePipe } from './pipes/department-name.pipe';
import { TouchListLayoutComponent } from './touch-list-layout/touch-list-layout.component';
import { SwipeAngularListModule } from 'swipe-angular-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsListComponent } from './products-list/products-list.component';
import { DialogLayoutComponent } from './dialog-layout/dialog-layout.component';
import { FormsModule } from '@angular/forms';
import { IsProductChosenPipe } from './pipes/is-product-chosen.pipe';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ProductSaveComponent } from './product-save/product-save.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
    declarations: [
        ListLayoutComponent,
        ListLayoutComponent,
        DepartmentNamePipe,
        TouchListLayoutComponent,
        ProductsListComponent,
        DialogLayoutComponent,
        IsProductChosenPipe,
        ConfirmationDialogComponent,
        ProductSaveComponent
    ],
    exports: [
        ListLayoutComponent,
        MaterialModule,
        DepartmentNamePipe,
        TouchListLayoutComponent,
        FontAwesomeModule,
        ProductsListComponent,
        DialogLayoutComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        SwipeAngularListModule,
        FontAwesomeModule,
        FormsModule,
        NgSelectModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}
