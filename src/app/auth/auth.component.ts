import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { ReactiveFormsModule } from '@angular/forms'; 
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  imports: [ReactiveFormsModule, RouterLink, NgIf]
})
export class AuthComponent {
  signInForm: FormGroup;
  registerForm: FormGroup;

  signInMessage: string = "";
  registerMessage: string = "";

  constructor(private fb: FormBuilder, private authentication: AuthenticationService) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSignIn() {
    if (this.signInForm.valid) {
      const signInData = this.signInForm.value;
      console.log(signInData.email + ' ' + signInData.password);

      this.authentication.authenticate(signInData.email, signInData.password).subscribe(response => {
        console.log('Sign-In Response:', response);
      });
    } else {
      console.log('Form is invalid');
    }
  }
  
  onRegister() {
    if (this.registerForm.valid) {
      const registerData = this.registerForm.value;
      console.log(registerData.email + ' ' + registerData.password);

      this.authentication.register(registerData.email, registerData.password).subscribe(response => {
        console.log('Register Response:', response);
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
