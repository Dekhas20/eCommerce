import { Component } from '@angular/core';

import { OnExit } from "../../../guards/exit.guard";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  onExit() {
    const rta = confirm('¿Estas seguro qeu quieres salir?')
    return rta
  }

}
