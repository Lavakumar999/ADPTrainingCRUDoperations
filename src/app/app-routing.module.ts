import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
const routes:Routes=[
    {path:'register',component: RegisterComponent},
    {path:'select',component: ListEmployeesComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
export const routingComponents=[RegisterComponent,ListEmployeesComponent]