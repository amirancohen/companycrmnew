import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  signupForm = new FormGroup({
    name: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(20)]
    }),
    email: new FormControl('', {
        validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)]
    })
})
  constructor(private api: ApiService, private router: Router){}

onSubmit(){
  if(this.signupForm.invalid){
    return
  }

  this.api.signup(this.signupForm.value).subscribe({
    next: (data) =>{
      this.signupForm.reset()
      this.router.navigate(['login'])
    },
    error: (err)=>{
      console.log(err.error);
      
    }
  })
  
}
}


