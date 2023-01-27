import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../../core/services/auth.service';

import { MyValidators } from './../../../utils/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  register(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.createUser(value.email, value.password)
      .then(() => {
        this.router.navigate(['/auth/login']);
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), MyValidators.validatePassword]],
      confirmPassword:['', [Validators.required]]
    }, {
      // validacion grupal entre password y confirmPassword
      validators:  MyValidators.matchPasswords
    });
  }
  get passwordField() {
    return this.form.get('password');
  }
  get isPasswordFieldInvalid() {
    return this.passwordField.touched && this.passwordField.invalid;
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
  get isConfirmPasswordFieldInvalid() {
    return this.confirmPassword.touched && this.form.errors; 
  }
}
