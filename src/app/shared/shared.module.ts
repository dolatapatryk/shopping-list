import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLayoutComponent } from './list-layout/list-layout.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
    declarations: [ListLayoutComponent, ListLayoutComponent],
    exports: [
        ListLayoutComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ]
})
export class SharedModule { }
