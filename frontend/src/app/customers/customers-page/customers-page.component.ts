import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService, Customer } from 'src/app/core/api.service';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent implements OnInit {

  customers: Array<Customer> = []

  customersForm = new FormGroup({
    fname: new FormControl('', {
        validators: [Validators.required]
    }),
    lname: new FormControl('', {
        validators: [Validators.required]
    }),
    phone: new FormControl('', {
        validators: [Validators.required]
    }),
   
    email: new FormControl('', {
        validators: [Validators.required, Validators.email]
    }),
    address: new FormControl('', {
        validators: [Validators.required]
    })
})

constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getAllCustomers()
  }

getAllCustomers(){
this.api.getCustomer().subscribe({
  next: (data: Array<Customer>) => this.customers = data,
  error: (err)=> console.log(err)
  
})
}

onSubmit(){
  if(this.customersForm.invalid){
    return
  }

  this.api.addCustomer(this.customersForm.value).subscribe({
    next: (data: Customer) =>{
      this.customersForm.reset()
      this.getAllCustomers()
    },
    error: (err)=> console.log(err)
    
  })
}
deletecustomer(customer:Customer){
if (!customer._id){
  return
}
this.api.deleteCustomer(customer._id).subscribe({
  next:(data:Customer)=>this.getAllCustomers(),
  error:(err)=>console.log(err)
  
})
}
}

