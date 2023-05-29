import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService, Employee  } from 'src/app/core/api.service';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent implements OnInit {
  empoloyees: Array<Employee> =[]
  searchField ='';

 empoloyeesForm =new FormGroup({
  name:new FormControl('',{
    validators:[Validators.required]
  }),
  phone:new FormControl('',{
    validators:[Validators.required]
  }),
  email:new FormControl('',{
    validators:[Validators.required,Validators.email]
  }),
  birthday:new FormControl('',{
    validators:[Validators.required]
  }),
 })
 constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getAllEmpoloyees()
  }
  getAllEmpoloyees(){
    this.api.getEmployee().subscribe({
      next: (data: Array<Employee>) => this.empoloyees = data,
      error: (err)=> console.log(err)
      
    })
    }
    onSubmit(){
      if(this.empoloyeesForm.invalid){
        return
      }
      this.api.addEmployee(this.empoloyeesForm.value).subscribe({
        next:(data: Employee) => {
          this.empoloyeesForm.reset()
            this.getAllEmpoloyees()
          },
          error:(err)=> console.log(err)
        
      })
    }
    searchInEmployee() {
    this.empoloyees.length === 0 ? this.empoloyees = Array.from(this.empoloyees) : this.empoloyees = Array.from(this.empoloyees)

    this.empoloyees = this.empoloyees.filter(empoloyees =>
      empoloyees.name?.toLocaleLowerCase().includes(this.searchField)
      
    )

  }

  getEmployee() {
    this.api.getEmployee().subscribe({
      next: (data: Array<Employee>) => {
        this.empoloyees = data;
      }
    })
  }
    
}
