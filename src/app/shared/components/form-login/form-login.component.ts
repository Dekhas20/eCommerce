import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  nameField = new FormControl()



}
