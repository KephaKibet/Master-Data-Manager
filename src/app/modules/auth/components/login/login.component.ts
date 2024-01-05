import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    password: new FormControl<string | null>(null),
  });
  

  submit() {
    
   
  }

}
