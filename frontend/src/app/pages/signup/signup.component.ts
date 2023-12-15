import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  userData: FormGroup

  password = '';

  lowerCaseValid = false;
  upperCaseValid = false; 
  numberValid = false;
  specialCharValid = false;
  minLengthValid = false;

  toggleShowPassword = false;

  constructor() {
    this.userData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.minLength(8)]),
    })
  }

  onSubmit() {

  }

  checkPassword() {
    const lowerCaseRegex = /[a-z]/;
    const upperCaseRegex = /[A-Z]/;
    const numberRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*]/;
    const minLengthRegex = /^.{8,}$/;

    this.lowerCaseValid = lowerCaseRegex.test(this.password);
    this.upperCaseValid = upperCaseRegex.test(this.password);
    this.numberValid = numberRegex.test(this.password);
    this.specialCharValid = specialCharRegex.test(this.password);
    this.minLengthValid = minLengthRegex.test(this.password);
  }

  toggleShowPasswords() {
    this.toggleShowPassword = !this.toggleShowPassword;
  }

}
