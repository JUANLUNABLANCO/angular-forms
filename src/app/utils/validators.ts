import { AbstractControl } from '@angular/forms';

export class MyValidators {

  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    console.log(value);
    if (value > 10000) {
      return {price_invalid: true};
    }
    return null;
  }
  static validatePassword(control: AbstractControl) {
    const value = control.value;
    if (!MyValidators.containsNumber(value)) {
      console.log('error: invalid_password');
      return {invalid_password: true};
    }
    console.log('#### no hay error de momento ####');
    return null;
  }
  static matchPasswords(controls: AbstractControl) {
    const pass1 = controls.get('password').value;
    const pass2 = controls.get('confirmPassword').value;
    if (pass1 !== pass2 ) return {match_passwords:  true};
    return null;
  }

  private static containsNumber(value: string): boolean {
    console.log('containsNumber');
    return value.split('').find(w => MyValidators.isNumber(w)) !== undefined;
  }
  private static isNumber(value:string): boolean {
    console.log('isNumber');
    return !isNaN(parseInt(value, 10));
  }
}
