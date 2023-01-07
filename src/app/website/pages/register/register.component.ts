import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { OnExit } from '../../../guards/exit.guard';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  nameField = new FormControl();
  emailField = new FormControl();
  passwordField = new FormControl();

  constructor(private usersService: UsersService) {}

  onExit() {
    const rta = confirm('¿Estas seguro que quieres salir?');
    return rta;
  }

  register() {
    this.usersService.create({
      name: this.nameField.value,
      email: this.emailField.value,
      password: this.passwordField.value,
      role: 'customer'
    }).subscribe(rta => {
      console.log(rta)
    });
  }
}
