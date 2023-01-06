import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { OnExit } from "../../../guards/exit.guard";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  nameField = new FormControl()
  emailField = new FormControl()
  passwordField = new FormControl()

  onExit() {
    const rta = confirm('¿Estas seguro que quieres salir?')
    return rta
  }

  register(){

  }

}
