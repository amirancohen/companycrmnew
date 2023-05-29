import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { RouterLink } from '@angular/router';
import { ViewcustomersComponent } from './viewcustomers/viewcustomers.component';




@NgModule({
  declarations: [
    CustomersPageComponent,
    UpdatecustomerComponent,
    ViewcustomersComponent
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class CustomersModule  {
    
}

