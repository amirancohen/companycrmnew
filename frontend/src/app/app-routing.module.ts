import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersPageComponent } from './customers/customers-page/customers-page.component';
import { EmployeesPageComponent } from './employees/employees-page/employees-page.component';
import { RegisterPageComponent } from './auth/register-page/register-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { UpdatecustomerComponent } from './customers/updatecustomer/updatecustomer.component';
import { ViewcustomersComponent } from './customers/viewcustomers/viewcustomers.component';




const routes: Routes = [
  {path: 'customers', component: CustomersPageComponent},
  {path: 'employees', component: EmployeesPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'update/:id', component: UpdatecustomerComponent},
  {path: 'viewCustomer/:id', component: ViewcustomersComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
