import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsLayoutComponent } from './departments-layout/departments-layout.component';

const routes: Routes = [
    {
        path: '',
        component: DepartmentsLayoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentsRoutingModule {
}
