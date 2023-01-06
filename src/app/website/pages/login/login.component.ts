import { Component } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // nameField = new FormControl(Validators.required)
  emailField = new FormControl()
  passwordField = new FormControl()

  constructor(private authService:AuthService, private router:Router){

  }

  login() {
    this.authService
      .loginAndGetProfile(this.emailField.value, this.passwordField.value)
      .subscribe((user) => {
        this.router.navigate(['/home']);
      }, error => {alert("Credenciales invalidas")});
  }

}
