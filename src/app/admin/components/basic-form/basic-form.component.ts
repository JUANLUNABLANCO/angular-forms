import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  form_basic: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    // this.getNameValue();
    // obtener los valores del campo de forma reactiva
    // this.nameField.valueChanges
    // .subscribe(realValue =>{
    //   console.log('Real time value: ', realValue);
    // });
  }
  // click del boton
  getNameValue() {
    console.log(this.nameField.value);
  }

  private buildForm() {
    this.form_basic = this.formBuilder.group ({
      // inputs
      fullName: this.formBuilder.group ({
        name: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^([a-zA-ZÁÉÍÓÚáéíóúÀÈÌÒÙàèìòùüÜÑñ]{3,}\s?){1,2}$/)]],
        last:['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^([a-zA-ZÁÉÍÓÚáéíóúÀÈÌÒÙàèìòùüÜÑñ]{3,}\s?){1,2}$/)]],
      }),
      email: ['', [Validators.required, Validators.email]],
      // +34609443529
      phone: ['', [Validators.minLength(9), Validators.pattern(/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{2,9}\)?[\s.-]?\d{3,9}[\s.-]?\d{4,12}$/)]],
      color: ['#c62424'],
      date: [''],
      age: [18, [Validators.required,Validators.min(18), Validators.required,Validators.max(65)]],
      // selects
      category: ['category-1'],
      tag: [''],
      // checkbox
      agree: [false, [Validators.requiredTrue]],
      // radio button
      gender: [''],
      zone: ['']
    });
  }

  // ### GETTERS
  // name
  get nameField() {
    return this.form_basic.get('fullName').get('name'); // o también .get('fullName.name');
  }
  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }
  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }
  // last
  get lastField() {
    return this.form_basic.get('fullName').get('last');  // o también .get('fullName.last');
  }
  get isLastFieldValid() {
    return this.lastField.touched && this.lastField.valid;
  }
  get isLastFieldInvalid() {
    return this.lastField.touched && this.lastField.invalid;
  }
  // email
  get emailField() {
    return this.form_basic.get('email');
  }
  get isEmailFieldValid() {
    return this.emailField.touched && this.emailField.valid;
  }
  get isEmailFieldInvalid() {
    return this.emailField.touched && this.emailField.invalid;
  }
  // phone
  get phoneField() {
    return this.form_basic.get('phone');
  }
  get isPhoneFieldValid() {
    return this.phoneField.touched && this.phoneField.valid;
  }
  get isPhoneFieldInvalid() {
    return this.phoneField.touched && this.phoneField.invalid;
  }
  // color
  get colorField() {
    return this.form_basic.get('color');
  }
  // date
  get dateField() {
    return this.form_basic.get('date');
  }
  //age
  get ageField() {
    return this.form_basic.get('age');
  }
  get isAgeFieldValid() {
    return this.ageField.touched && this.ageField.valid;
  }
  get isAgeFieldInvalid() {
    return this.ageField.touched && this.ageField.invalid;
  }
  // select categry
  get categoryField() {
    return this.form_basic.get('category');
  }
  // select tag
  get tagField() {
    return this.form_basic.get('tag');
  }
  // checkbox agree
  get agreeField() {
    return this.form_basic.get('agree');
  }
  // radio gender
  get genderField() {
    return this.form_basic.get('gender');
  }
  // radio zone
  get zoneField() {
    return this.form_basic.get('zone');
  }

  // enviar form
  save(event) {
    if (this.form_basic.valid){
      console.log(this.form_basic.value);
    } else { // marcar como tocados todos los campos para revelar posibles errores
      this.form_basic.markAllAsTouched();
    }
  }
}
